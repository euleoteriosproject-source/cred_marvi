import { expect, test } from "@playwright/test";

test("exibe o bootstrap da Cred Marvi", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("Cred Marvi");
  await expect(
    page.getByRole("heading", { level: 1, name: "Cred Marvi" }),
  ).toBeVisible();
  await expect(page.getByText("Base da aplicação inicializada.")).toBeVisible();
});
