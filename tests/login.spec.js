import { test } from "@playwright/test";
import { loginpg } from '../pages/login'; 

test('Login', async ({ page }) => {
  const login = new loginpg(page);
  await login.gotologinpg();
  await login.login('sumit.rai@testriq.com', 'Sumitrai@12');
  await page.locator("//div[@class='flex items-center justify-between px-2 py-1.5']//button[2]").click();
  await page.waitForTimeout(1000);
});
