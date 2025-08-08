import { test } from "@playwright/test";
import { loginpg } from '../pages/login';
import { DashboardPage } from '../pages/dashboardPage';

test.beforeEach('Login and setup', async ({ page }) => {
  const login = new loginpg(page);
  await login.gotologinpg();
  await login.login('sumit.rai@testriq.com', 'Sumitrai@12');
  await page.locator("//div[@class='flex items-center justify-between px-2 py-1.5']//button[2]").click();
});

test('Verify Dashboard Widgets and Filters', async ({ page }) => {
  const dashboard = new DashboardPage(page);

  await dashboard.navigateToDashboard();
  await dashboard.filterSalesUser('S Sumit Rai');
  await dashboard.filterByDateRange('Last 60 Days');
  await dashboard.verifyDashboardWidgets();
});
