import { test, expect } from '@playwright/test';

test('search for Playwright Python shows Python result', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  const searchButton = page.getByLabel('Search');
  await searchButton.click();

  const searchInput = page.getByPlaceholder('Search docs');
  await searchInput.fill('python');

  await expect(page.getByRole('link', { name: 'Playwright for Python' })).toBeVisible();
});