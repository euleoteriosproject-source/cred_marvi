import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("home apresenta a experiência institucional sem violações axe", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  await page.goto("/");

  await expect(page).toHaveTitle("Cred Marvi");
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: /soluções financeiras para pessoas e empresas/i,
    }),
  ).toBeVisible();
  await expect(
    page.getByText("Assistente Marvi", { exact: true }).first(),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Iniciar análise" }).first(),
  ).toHaveAttribute("href", "/analise");

  const accessibility = await new AxeBuilder({ page }).analyze();
  expect(accessibility.violations).toEqual([]);
  expect(errors).toEqual([]);
});

test("home funciona em 320px sem overflow e menu fecha com Escape", async ({
  page,
}) => {
  await page.setViewportSize({ width: 320, height: 800 });
  await page.goto("/");

  const menuButton = page.getByRole("button", { name: "Abrir menu" });
  await menuButton.click();
  await expect(
    page.getByRole("navigation", { name: /dispositivos móveis/i }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(
    page.getByRole("navigation", { name: /dispositivos móveis/i }),
  ).toBeHidden();
  await expect(page.getByRole("button", { name: "Abrir menu" })).toBeFocused();

  const overflow = await page.evaluate(
    () =>
      document.documentElement.scrollWidth >
      document.documentElement.clientWidth,
  );
  expect(overflow).toBe(false);
});

test("marca do header permanece controlada em todos os breakpoints", async ({
  page,
}) => {
  for (const width of [320, 375, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");

    const header = page.locator("header");
    const brand = header.getByRole("link", { name: /Cred Marvi/i });
    const brandImage = brand.locator("img");

    await expect(header).toBeVisible();
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Iniciar análise" }).first(),
    ).toBeVisible();
    await expect(brandImage).toBeVisible();

    const dimensions = await brandImage.evaluate((image) => {
      const imageRect = image.getBoundingClientRect();
      const containerRect = image.parentElement?.getBoundingClientRect();

      return {
        imageWidth: imageRect.width,
        imageHeight: imageRect.height,
        containerWidth: containerRect?.width ?? 0,
        containerHeight: containerRect?.height ?? 0,
      };
    });

    expect(dimensions.imageWidth).toBeGreaterThan(0);
    expect(dimensions.imageHeight).toBeGreaterThan(0);
    expect(dimensions.imageWidth).toBeLessThanOrEqual(48);
    expect(dimensions.imageHeight).toBeLessThanOrEqual(48);
    expect(dimensions.imageWidth).toBeLessThanOrEqual(
      dimensions.containerWidth,
    );
    expect(dimensions.imageHeight).toBeLessThanOrEqual(
      dimensions.containerHeight,
    );
    expect(await page.locator("main > section").count()).toBeGreaterThan(1);

    const overflow = await page.evaluate(
      () =>
        document.documentElement.scrollWidth >
        document.documentElement.clientWidth,
    );
    expect(overflow).toBe(false);
  }
});

test("layout permanece utilizável com zoom de 200% e fallback de contato", async ({
  page,
}) => {
  await page.setViewportSize({ width: 640, height: 800 });
  await page.goto("/");
  await page.evaluate(() => {
    document.documentElement.style.zoom = "2";
  });

  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(
    page.getByRole("link", { name: /falar com especialista/i }).first(),
  ).toHaveAttribute("href", "/contato");
  const overflow = await page.evaluate(
    () =>
      document.documentElement.scrollWidth >
      document.documentElement.clientWidth,
  );
  expect(overflow).toBe(false);
});

test("skip link permite navegação por teclado", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  const skipLink = page.getByRole("link", {
    name: "Ir para o conteúdo principal",
  });
  await expect(skipLink).toBeFocused();
  await skipLink.press("Enter");
  await expect(page).toHaveURL(/#conteudo$/);
});

test("rotas públicas, análise e 404 respondem corretamente", async ({
  page,
}) => {
  for (const route of [
    "/solucoes",
    "/solucoes/consorcio",
    "/sobre",
    "/seguranca-e-privacidade",
    "/politica-de-privacidade",
    "/termos-de-uso",
    "/faq",
    "/contato",
  ]) {
    const response = await page.goto(route);
    expect(response?.ok()).toBe(true);
    await expect(page.locator("h1")).toBeVisible();
  }

  await page.goto("/analise");
  await expect(
    page.getByRole("heading", { level: 1, name: /espaço preparado/i }),
  ).toBeVisible();
  await expect(
    page.getByText(/nenhuma informação pessoal é solicitada/i),
  ).toBeVisible();

  const missing = await page.goto("/pagina-inexistente");
  expect(missing?.status()).toBe(404);
  await expect(
    page.getByRole("heading", { name: /não foi encontrada/i }),
  ).toBeVisible();
});

test("headers de segurança e noindex da análise estão presentes", async ({
  page,
}) => {
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
