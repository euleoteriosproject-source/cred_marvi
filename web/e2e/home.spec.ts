import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("home apresenta a vitrine, WhatsApp direto e acessibilidade", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  await page.goto("/");

  await expect(page).toHaveTitle("Cred Marvi");
  const favicon = page.locator('link[rel="icon"][href*="/icon"]').first();
  await expect(favicon).toHaveAttribute("href", /\/icon(?:\.png)?\?/);
  const faviconHref = await favicon.getAttribute("href");
  const faviconResponse = await page.request.get(faviconHref!);
  expect(faviconResponse.ok()).toBe(true);
  expect(faviconResponse.headers()["content-type"]).toContain("image/png");
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: /seu imóvel.*seu carro.*seus planos, mais perto/i,
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: /financiamento de veículos/i }).first(),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Consórcio", exact: true }).first(),
  ).toBeVisible();

  const contact = page
    .getByRole("link", { name: /falar com a marlise.*whatsapp/i })
    .first();
  await expect(contact).toHaveAttribute("href", /^https:\/\/wa\.me\//);
  expect(
    decodeURIComponent((await contact.getAttribute("href")) ?? ""),
  ).not.toMatch(/cpf|cnpj|renda|protocolo|CM-/i);

  const accessibility = await new AxeBuilder({ page }).analyze();
  expect(accessibility.violations).toEqual([]);
  expect(errors).toEqual([]);
});

test("home não tem overflow nos breakpoints e menu fecha com Escape", async ({
  page,
}) => {
  await page.goto("/");
  for (const width of [360, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    expect(
      await page.evaluate(
        () =>
          document.documentElement.scrollWidth >
          document.documentElement.clientWidth,
      ),
    ).toBe(false);
  }

  await page.setViewportSize({ width: 390, height: 844 });
  const menuButton = page.getByRole("button", { name: "Abrir menu" });
  await menuButton.click();
  await expect(
    page.getByRole("navigation", { name: /dispositivos móveis/i }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(
    page.getByRole("navigation", { name: /dispositivos móveis/i }),
  ).toBeHidden();
  await expect(menuButton).toBeFocused();
  await expect(page.getByLabel("Contato rápido")).toBeVisible();
});

test("catálogo filtra públicos sem esconder compartilhados e Agro PF", async ({
  page,
}) => {
  await page.goto("/solucoes?profile=PERSON");
  await expect(
    page.getByRole("link", { name: "Para você", exact: true }),
  ).toHaveAttribute("aria-current", "page");
  await expect(page.getByRole("heading", { name: "Consórcio" })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Crédito para o Agro" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Capital de giro" }),
  ).toBeHidden();

  await page.goto("/solucoes?profile=BUSINESS");
  await expect(page.getByRole("heading", { name: "Consórcio" })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Financiamento de veículos" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Capital de giro" }),
  ).toBeVisible();
});

test("consórcio legado preserva produto e perfil", async ({ page }) => {
  for (const url of [
    "/analise?product=consorcio&profile=PF",
    "/analise?solution=CONSORTIUM&profile=PJ",
    "/analise?product=consorcio&solution=VEHICLE_FINANCING&profile=PJ",
  ]) {
    await page.goto(url);
    await expect(
      page.getByText("consórcio", { exact: true }).first(),
    ).toBeVisible();
    const href = await page
      .getByRole("link", { name: /conversar no whatsapp/i })
      .getAttribute("href");
    expect(decodeURIComponent(href ?? "")).toContain("consórcio");
  }
});

test("orientação não exige resposta, não abre WhatsApp sozinha e quick é seguro", async ({
  page,
}) => {
  const requests: string[] = [];
  page.on("request", (request) => requests.push(request.url()));
  await page.goto("/analise?quick=1&product=<script>");
  await expect(
    page.getByRole("heading", { name: /vamos começar pelo seu objetivo/i }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: /conversar no whatsapp/i }),
  ).toBeVisible();
  expect(page.url()).toContain("/analise");
  expect(requests.some((url) => url.includes("wa.me"))).toBe(false);
  await expect(page.getByRole("progressbar")).toHaveCount(0);
  await expect(page.getByRole("textbox")).toHaveCount(0);
});

test("rotas publicadas respondem e sucesso redireciona sem parâmetros", async ({
  page,
}) => {
  test.setTimeout(60_000);
  for (const route of [
    "/solucoes",
    "/solucoes/financiamento-de-imovel",
    "/solucoes/financiamento-de-veiculo",
    "/solucoes/capital-de-giro",
    "/solucoes/consorcio",
    "/sobre",
    "/seguranca-e-privacidade",
    "/politica-de-privacidade",
    "/termos-de-uso",
    "/faq",
    "/contato",
  ]) {
    const response = await page.goto(route, { waitUntil: "domcontentloaded" });
    expect(response?.ok()).toBe(true);
    await expect(page.locator("h1")).toBeVisible();
  }

  await page.goto("/sucesso?nome=Pessoa&protocol=CM-123");
  await expect(page).toHaveURL(/\/contato$/);
  await expect(
    page.getByRole("heading", { name: /fale com a marlise/i }),
  ).toBeVisible();
});

test("skip link, headers de segurança e noindex da orientação", async ({
  page,
}) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  const skipLink = page.getByRole("link", {
    name: "Ir para o conteúdo principal",
  });
  await expect(skipLink).toBeFocused();
  await skipLink.press("Enter");
  await expect(page).toHaveURL(/#conteudo$/);

  const response = await page.goto("/analise");
  expect(response?.headers()["x-content-type-options"]).toBe("nosniff");
  expect(response?.headers()["x-frame-options"]).toBe("DENY");
  expect(response?.headers()["content-security-policy"]).toContain(
    "frame-ancestors 'none'",
  );
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    /noindex/,
  );
});
