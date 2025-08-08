import { test, expect } from '@playwright/test';
import { loginpg } from '../pages/login';
import { OrganizationPage } from '../pages/organizationPage';

test.beforeEach('Login', async ({ page }) => {
  const login = new loginpg(page);
  await login.gotologinpg();
  await login.login('sumit.rai@testriq.com', 'Sumitrai@12');
  await page.locator("//div[@class='flex items-center justify-between px-2 py-1.5']//button[2]").click();
});

test('Create Organization', async ({ page }) => {
  const orgPage = new OrganizationPage(page);

  await orgPage.navigateToOrganizations();

  await orgPage.createOrganization({
    name: 'Software testing',
    website: 'softwaretester.com',
    revenue: '500000',
    territory: 'test_territory',
    empRange: '501-1000',
    industry: 'Service',
    address: 'Testriq QA Labs-Billing India'
  });

  await orgPage.reloadPage();
  await expect(page.getByText('Software testing')).toBeVisible();
});
