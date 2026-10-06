import { expect, test } from "@playwright/test";
import { mkdir } from "node:fs/promises";

const evidenceDirectory = "../docs/evidence";

test("vitrine mantém produtos, contexto Agro e imagens locais em todas as larguras", async ({
  page,
}) => {
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
    // Images must load, including lazy product photos after scrolling into view.
    await page.locator("#solucoes").scrollIntoViewIfNeeded();
    for (const image of await page.locator("#solucoes img").all()) {
      await image.scrollIntoViewIfNeeded();
      await expect
        .poll(
          () =>
            image.evaluate(
              (element) =>
                (element as HTMLImageElement).complete &&
                (element as HTMLImageElement).naturalWidth > 0,
            ),
          { timeout: 15_000 },
        )
        .toBe(true);
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
  await page.goto("/");
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
