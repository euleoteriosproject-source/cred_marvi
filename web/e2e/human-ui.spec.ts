import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { mkdir } from "node:fs/promises";

test("foto real, seguros distintos e contato humano permanecem acessíveis", async ({
  page,
}) => {
  test.setTimeout(120_000);
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  const directory = "test-results/ui";
  await mkdir(directory, { recursive: true });
  for (const [name, route] of [
    ["home", "/"],
    ["contato", "/contato?product=consorcio&profile=PF"],
    ["sobre", "/sobre"],
    ["seguros", "/solucoes/seguro-auto"],
  ]) {
    await page.goto(route);
    for (const width of [390, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      await page.evaluate(() => document.fonts.ready);
      for (const photo of await page.locator("main img").all()) {
        if (!(await photo.isVisible())) continue;
        await photo.scrollIntoViewIfNeeded();
        await expect
          .poll(() =>
            photo.evaluate(
              (element) => (element as HTMLImageElement).naturalWidth,
            ),
          )
          .toBeGreaterThan(0);
      }
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
  expect(errors).toEqual([]);
});
