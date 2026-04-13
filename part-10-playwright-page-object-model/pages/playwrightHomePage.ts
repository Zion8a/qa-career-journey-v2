import { expect, type Page } from '@playwright/test';

export class PlaywrightHomePage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://playwright.dev/');
  }

  async clickGetStarted() {
    await this.page.getByRole('link', { name: 'Get started' }).click();
  }

  async expectTitleToContainPlaywright() {
    await expect(this.page).toHaveTitle(/Playwright/);
  }

  async expectInstallationHeadingVisible() {
    await expect(this.page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  }
}