const { test, expect } = require('@playwright/test');


test('screenshot', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveScreenshot({ fullPage : true });
})
