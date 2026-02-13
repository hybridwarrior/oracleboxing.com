import { expect, test } from "@playwright/test";

test.describe("Public App Smoke", () => {
  test("home page renders", async ({ page }) => {
    const response = await page.goto("/");
    expect(response).not.toBeNull();
    expect(response!.status()).toBeLessThan(500);
    await expect(page).toHaveURL(/\/$/);
  });

  test("checkout-v2 page renders", async ({ page }) => {
    const response = await page.goto("/checkout-v2");
    expect(response).not.toBeNull();
    expect(response!.status()).toBeLessThan(500);
    await expect(page.url()).toMatch(/\/checkout-v2$|\/closed$/);
  });

  test("detect-location API responds", async ({ request }) => {
    const response = await request.get("/api/detect-location");
    expect(response.status()).toBeLessThan(500);
    const contentType = response.headers()["content-type"] || "";
    const body = await response.text();
    expect(body.length).toBeGreaterThan(0);
    if (contentType.includes("application/json")) {
      const parsed = JSON.parse(body);
      expect(typeof parsed).toBe("object");
      expect(parsed).not.toBeNull();
    }
  });
});
