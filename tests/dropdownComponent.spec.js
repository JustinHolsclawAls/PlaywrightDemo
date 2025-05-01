import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://127.0.0.1:8080/dropdowntest.html');
});

test.describe('Drop down Component works as intended', () => {
    test('Dropdown Component shows when text is entered.', async ({ page }) => {
      const input = page.locator('.form-control');
      await input.fill('some text'); 

      const dropdown = page.locator('.dropdown-menu');
      await expect(dropdown).toBeVisible(); 
    });

    test('Dropdown Component class is-invalid symbol when text is not valid.', async ({ page }) => {
      const input = page.locator('.form-control');
      await input.fill('some text'); 
      await expect(input).toHaveClass(/(^|\s)is-invalid(\s|$)/);

  });

  test('Dropdown Component class is-valid symbol when text is valid.', async ({ page }) => {
    const input = page.locator('.form-control');
    await input.fill('Apple'); 
    await expect(input).toHaveClass(/(^|\s)is-valid(\s|$)/);

});
});