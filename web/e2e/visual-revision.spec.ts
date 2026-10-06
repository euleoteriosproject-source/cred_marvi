import { expect, test } from "@playwright/test";
import { mkdir } from "node:fs/promises";

const evidenceDirectory = "../docs/evidence";

test("vitrine mantém produtos, contexto Agro e imagens locais em todas as larguras", async ({
  page,
}) => {
  test.setTimeout(60_000);
  await mkdir(evidenceDirectory, { recursive: true });
  for (const width of [360, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/", { waitUntil: "domcontentloaded" });
    await page.evaluate(() => document.fonts.ready);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    await expect(
      page.getByRole("link", { name: "Encontrar minha solução" }),
    ).toBeVisible();
    await expect(page.locator("#solucoes article")).toHaveCount(6);
    const imageSources = await page
      .locator("#solucoes img")
      .evaluateAll((images) =>
        images.map((image) => ({
          alt: (image as HTMLImageElement).alt,
          src: (image as HTMLImageElement).getAttribute("src") ?? "",
        })),
      );
    expect(imageSources.every(({ alt, src }) => alt && src)).toBe(true);
    if (width === 360) {
      for (const { src } of imageSources) {
        const url = new URL(src, page.url());
        const asset =
          url.pathname === "/_next/image"
            ? (url.searchParams.get("url") ?? "")
            : url.pathname;
        const response = await page.request.get(asset);
        expect(response.ok(), asset).toBe(true);
        expect(response.headers()["content-type"], asset).toMatch(/^image\//);
      }
    }
    await page.evaluate(() => {
      if (document.activeElement instanceof HTMLElement)
        document.activeElement.blur();
      scrollTo({ top: 0, behavior: "instant" });
    });
    await expect.poll(() => page.evaluate(() => scrollY)).toBe(0);
    if (width === 390 || width === 1440) {
      await page.screenshot({
        path: `${evidenceDirectory}/ux-review-${width}.png`,
        fullPage: true,
      });
      await page.screenshot({
        path: `${evidenceDirectory}/ux-review-first-screen-${width}.png`,
      });
    }
  }
  await page
    .getByRole("link", { name: "Conhecer Crédito para o Agro", exact: true })
    .click();
  const message = decodeURIComponent(
    (await page
      .getByRole("link", {
        name: "Falar sobre Crédito para o Agro — abre o WhatsApp",
        exact: true,
      })
      .getAttribute("href")) ?? "",
  );
  expect(message).toContain("crédito para o Agro");
  expect(message).not.toContain("para minha empresa");
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await page
    .getByRole("link", {
      name: "Conhecer Financiamento de veículos",
      exact: true,
    })
    .click();
  await expect(page).toHaveURL(/\/solucoes\/financiamento-de-veiculo$/);
});

test("saída direta da orientação conserva assunto e categoria escolhidos", async ({
  page,
}) => {
  await page.goto("/analise?product=consorcio");
  await page.getByRole("button", { name: "Imóvel", exact: true }).click();
  await page.getByRole("button", { name: "Para mim", exact: true }).click();
  const contact = page.getByRole("link", {
    name: /conversar no whatsapp/i,
  });
  const message = decodeURIComponent(
    (await contact.getAttribute("href")) ?? "",
  );
  expect(message).toContain("consórcio de imóvel para mim");
  expect(message).not.toMatch(/protocolo|CM-|renda|CPF|CNPJ/i);
});

test("links publicados na master continuam com assunto e páginas legais corretos", async ({
  page,
}) => {
  await page.goto("/analise?objective=buy-home&profile=PERSON");
  await expect(
    page.getByText("aquisição de um imóvel", { exact: true }),
  ).toBeVisible();
  const href = await page
    .getByRole("link", { name: /conversar no whatsapp/i })
    .getAttribute("href");
  expect(decodeURIComponent(href ?? "")).toContain("aquisição de um imóvel");
  expect(decodeURIComponent(href ?? "")).not.toContain("financiamento");
  await page.goto("/privacidade");
  await expect(page).toHaveURL(/\/politica-de-privacidade$/);
  await page.goto("/termos");
  await expect(page).toHaveURL(/\/termos-de-uso$/);
});
