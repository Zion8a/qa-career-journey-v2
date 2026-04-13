import { test, expect } from '@playwright/test';

test('empty name field shows validation alert on submit', async ({ page }) => {
  await page.goto('https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_validation_empty_input');

  page.on('dialog', async dialog => {
    expect(dialog.message()).toContain('Name must be filled out');
    await dialog.accept();
  });

  const frame = page.frameLocator('#iframeResult');
  await frame.locator('input[type="submit"]').click();
});