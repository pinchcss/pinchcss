const { test, expect } = require('@playwright/test');

test('typography', async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveScreenshot({ fullPage: true });
});

test('inputs', async ({ page }) => {
	await page.goto('/inputs');
	await expect(page).toHaveScreenshot({ fullPage: true });
});

test('buttons', async ({ page }) => {
	await page.goto('/buttons');
	await expect(page).toHaveScreenshot({ fullPage: true });
});
