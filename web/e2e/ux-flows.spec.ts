import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("cada produto tem imagem, página e contato consistente com perfil", async ({
  page,
}) => {
  test.setTimeout(60_000);
  await page.goto("/solucoes?profile=BUSINESS");
  const cards = page.locator(".solution-card");
  const hrefs = await cards
    .locator("a")
    .evaluateAll((links) => links.map((link) => link.getAttribute("href")!));
  expect(hrefs.length).toBeGreaterThan(5);
  expect(await cards.locator("img").count()).toBe(hrefs.length);
  for (const href of hrefs) {
    const response = await page.goto(href, { waitUntil: "domcontentloaded" });
    expect(response?.ok()).toBe(true);
    await expect(page.locator("h1")).toBeVisible();
    const productContact = page.getByRole("link", {
      name: /^Falar sobre .*WhatsApp$/,
    });
    const message = decodeURIComponent(
      (await productContact.getAttribute("href"))!,
    );
    expect(message).toContain("para minha empresa");
    expect(
      await page
        .getByRole("banner")
        .getByRole("link", { name: /falar com a marlise.*whatsapp/i })
        .getAttribute("href"),
    ).toBe(await productContact.getAttribute("href"));
  }
});

test("Agro PF, filtros combinados e consulta sem cadastro", async ({
  page,
}) => {
  await page.goto("/solucoes?category=agro&profile=PERSON");
  await expect(page.locator(".solution-card")).toHaveCount(2);
  await page
    .getByRole("link", { name: "Conhecer Crédito Rural", exact: true })
    .click();
  await expect(page).toHaveURL(/credito-rural\?profile=PERSON$/);
  await page.setViewportSize({ width: 390, height: 844 });
  const contact = page.getByLabel("Contato rápido").getByRole("link");
  expect(decodeURIComponent((await contact.getAttribute("href"))!)).toContain(
    "crédito rural para mim",
  );
  await expect(page.getByRole("textbox")).toHaveCount(0);
  await page.goto("/contato?product=consorcio&profile=PF&cpf=12345678900");
  const message = decodeURIComponent(
    (await page
      .getByRole("main")
      .getByRole("link", { name: /falar com a marlise.*whatsapp/i })
      .getAttribute("href"))!,
  );
  expect(message).toContain("consórcio para mim");
  expect(message).not.toContain("12345678900");
});

test("páginas internas são acessíveis e responsivas", async ({ page }) => {
  const routes = [
    "/solucoes",
    "/solucoes/seguro-auto",
    "/solucoes/emprestimo",
    "/solucoes/antecipacao-de-recebiveis",
    "/sobre",
    "/contato",
    "/faq",
    "/politica-de-privacidade",
    "/termos-de-uso",
    "/seguranca-e-privacidade",
    "/analise",
  ];
  for (const route of routes) {
    await page.goto(route);
    for (const width of [360, 768, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBe(true);
    }
    const result = await new AxeBuilder({ page }).analyze();
    expect(result.violations, route).toEqual([]);
  }
});
