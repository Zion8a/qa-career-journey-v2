import { test } from '@playwright/test';
import { PlaywrightHomePage } from '../pages/playwrightHomePage';

test('user can navigate from homepage to installation page', async ({ page }) => {
  const homePage = new PlaywrightHomePage(page);

  await homePage.goto();
  await homePage.expectTitleToContainPlaywright();
  await homePage.clickGetStarted();
  await homePage.expectInstallationHeadingVisible();
});