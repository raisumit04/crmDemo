import { test } from '@playwright/test';
import { loginpg } from '../pages/login';
import { CallLogsPage } from '../pages/callLogsPage';

test.beforeEach('Login', async ({ page }) => {
  const login = new loginpg(page);
  await login.gotologinpg();
  await login.login('sumit.rai@testriq.com', 'Sumitrai@12');
  await page.locator("//div[@class='flex items-center justify-between px-2 py-1.5']//button[2]").click();
});

test('Create and filter Call Log', async ({ page }) => {
  const callLogs = new CallLogsPage(page);

  await callLogs.navigateToCallLogs();
  await callLogs.createCallLog();
  await callLogs.applyFiltersAndReload();

});
