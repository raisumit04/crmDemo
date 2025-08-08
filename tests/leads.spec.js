import { test } from "@playwright/test";
import { loginpg } from '../pages/login.js';
import { LeadPage } from '../pages/leadPage.js';

test.beforeEach('Login', async ({ page }) => {
  const login = new loginpg(page);
  await login.gotologinpg();
  await login.login('sumit.rai@testriq.com', 'Sumitrai@12');
  await page.locator("//div[@class='flex items-center justify-between px-2 py-1.5']//button[2]").click();
});

test('Create Lead and Validate Dashboard', async ({ page }) => {
  const leadPage = new LeadPage(page);

  await leadPage.navigateToLeads();
  
  await page.getByRole('button', { name: 'Create' }).click();

  await leadPage.fillBasicDetails({
    salutation: 'Mr',
    firstName: 'pranav',
    lastName: 'nair',
    email: 'pranav.nair@testriq.com',
    mobile: '9865231474',
    gender: 'Male',
  });

  await leadPage.fillOrganizationDetails('automation', 'automation.com', '51-200');
  await leadPage.selectTerritory('test_territory');
  await leadPage.enterRevenue('500000');
  await leadPage.selectIndustry('Software');
  await leadPage.selectStatusAndOwner('Qualified', 'S Sumit Rai');

  await leadPage.submitLeadForm();
  await leadPage.verifyLeadOnDashboard();
});
