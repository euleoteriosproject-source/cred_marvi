import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { mkdir } from "node:fs/promises";

test("foto real, seguros distintos e contato humano permanecem acessíveis", async ({
  page,
}) => {
  test.setTimeout(180_000);
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  const directory = "test-results/ui";
  await mkdir(directory, { recursive: true });
  for (const asset of [
    "/images/people/marlise.png",
    "/images/vehicle-insurance.webp",
  ]) {
    const response = await page.request.get(asset);
    expect(response.ok(), asset).toBe(true);
    expect(response.headers()["content-type"], asset).toMatch(/^image\//);
    expect((await response.body()).byteLength, asset).toBeGreaterThan(0);
  }
  for (const [name, route] of [
    ["home", "/"],
    ["contato", "/contato?product=consorcio&profile=PF"],
    ["sobre", "/sobre"],
    ["seguros", "/solucoes/seguro-auto"],
  ]) {
    for (const width of [390, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      const response = await page.goto(route, {
        waitUntil: "domcontentloaded",
      });
      expect(response?.ok(), `${name} ${width}`).toBe(true);
      await page.evaluate(() => document.fonts.ready);
      await page.evaluate(() => scrollTo({ top: 0, behavior: "instant" }));
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBe(true);
      expect(
        (await new AxeBuilder({ page }).analyze()).violations,
        `${name} ${width}`,
      ).toEqual([]);
      await page.screenshot({
        path: `${directory}/${name}-${width}.png`,
        fullPage: true,
      });
    }
    await expect(page.locator('main img[src*="marlise"]')).not.toHaveCount(0);
  }
  await expect(
    page
      .getByRole("navigation", { name: "Principal", exact: true })
      .getByRole("link", { name: "Pessoa Física", exact: true }),
  ).toBeVisible();
  await page.goto("/solucoes/seguro-auto");
  await expect(
    page.locator('main img[alt*="Moto, carro e caminhão"]'),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: /^Falar sobre Seguro de veículos/ }),
  ).toHaveAttribute("href", /wa\.me/);
  await page.goto("/contato?product=consorcio&profile=PF");
  const contact = page
    .getByRole("main")
    .getByRole("link", { name: /Falar com a Marlise.*WhatsApp/ })
    .first();
  expect(decodeURIComponent((await contact.getAttribute("href"))!)).toContain(
    "consórcio para mim",
  );
  await expect(
    page.getByText("Atendimento online em todo o Brasil."),
  ).toBeVisible();
  await expect(
    page.getByText(/Capão da Canoa e no Litoral Norte/),
  ).toBeVisible();
  for (const [network, href] of [
    ["Instagram", "https://www.instagram.com/credmarvi"],
    ["Facebook", "https://pt-br.facebook.com/Credmarvi/"],
    ["TikTok", "https://www.tiktok.com/@credmarvi"],
  ]) {
    const socialLink = page
      .getByRole("main")
      .getByRole("link", { name: new RegExp(`${network} da Cred Marvi`) });
    await expect(socialLink).toHaveAttribute("href", href);
    await expect(socialLink).toHaveAttribute("target", "_blank");
  }
  await page.goto("/sobre");
  await expect(
    page.getByRole("heading", {
      name: "Vivência bancária aplicada a um atendimento consultivo.",
    }),
  ).toBeVisible();
  await expect(page.getByText("CPA-10 ativa", { exact: true })).toBeVisible();
  await expect(
    page.getByText("Certificação CORBAN", { exact: true }),
  ).toBeVisible();
  await expect(
    page.getByText("Corretora de Seguros", { exact: true }),
  ).toBeVisible();
  expect(errors).toEqual([]);
});
