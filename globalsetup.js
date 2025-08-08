import { chromium } from '@playwright/test';

async function globalSetup() {

  const browser = await chromium.launch({ headless: false });

  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://app.meetsoci.com/admin/");

  await page.waitForSelector(".input_email");

  await page.getByPlaceholder('Email Address', { exact: true }).fill("ayadav@meetsoci.com");
  await page.locator(".input_password").fill("excitement injured accidental step");
  await page.getByRole("button", { name: "Sign In" }).click();

  await page.locator("#select2-chosen-4").click();
  await page.getByText("Ajay Yadav Demo Account").click();

  await context.storageState({ path: "./LoginAuth.json" });

  await browser.close();
}

export default globalSetup;