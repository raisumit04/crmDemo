import { test } from "@playwright/test";
import { loginpg } from "../pages/login";
import { DealsPage } from "../pages/dealsPage";

test.describe.configure({ mode: 'parallel' });

test.beforeEach(async ({ page }) => {
  const login = new loginpg(page);
  await login.gotologinpg();
  await login.login('sumit.rai@testriq.com', 'Sumitrai@12');
  await page.locator("//div[@class='flex items-center justify-between px-2 py-1.5']//button[2]").click();
});

test('Create New Deal', async ({ page }) => {
  const deals = new DealsPage(page);

  await deals.openDeals();
  await deals.clickCreate();

  await page.getByRole('textbox', { name: 'Organization Name' }).fill('software');
  await page.getByRole('textbox', { name: 'Website' }).fill('software.com');
  await page.locator("select[value='1-10']").selectOption('201-500');

  await page.getByRole('button', { name: 'Territory' }).click();
  await page.getByText('test_territory01').click();

  await page.getByRole('textbox', { name: 'Annual Revenue' }).fill('200000');
  await page.getByRole('textbox', { name: 'Annual Revenue' }).press('Enter');

  await page.getByRole('button', { name: 'Industry' }).click();
  await page.getByText('Technology').click();

  await page.getByRole('button', { name: 'Salutation' }).click();
  await page.getByText('Mr', { exact: true }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('pranav');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('singh');

  await page.getByRole('button', { name: 'Gender' }).click();
  await page.getByText('Male', { exact: true }).click();

  await page.locator("select[value='Qualification']").selectOption('Negotiation');
  await page.getByRole('button', { name: 'S Sumit Rai' }).click();
  await page.getByRole('option', { name: 'S Sumit Rai' }).click();

  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('button', { name: 'Create' }).click();

  await deals.openDeals();
});

test('Deals with Existing Organization', async ({ page }) => {
  const deals = new DealsPage(page);

  await deals.openDeals();
  await deals.clickCreate();
  await deals.selectExistingOrganization('software');

  await page.getByRole('button', { name: 'Salutation' }).click();
  await page.getByText('Mr', { exact: true }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('pranav');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('patil');

  await page.getByRole('button', { name: 'Gender' }).click();
  await page.getByText('Male', { exact: true }).click();

  await page.locator("select[value='Qualification']").selectOption('Negotiation');
  await page.getByRole('button', { name: 'S Sumit Rai' }).click();
  await page.getByRole('option', { name: 'S Sumit Rai' }).click();

  await page.getByRole('button', { name: 'Create' }).click();
  await deals.openDeals();
});

test('Deals with Existing Contact', async ({ page }) => {
  const deals = new DealsPage(page);

  await deals.openDeals();
  await deals.clickCreate();
  await deals.selectExistingContact('Shreyash PakhareShreyash');

  await page.getByRole('textbox', { name: 'Organization Name' }).fill('software');
  await page.getByRole('textbox', { name: 'Website' }).fill('software.com');
  await page.locator("select[value='1-10']").selectOption('201-500');

  await page.getByRole('button', { name: 'Territory' }).click();
  await page.getByText('test_territory01').click();

  await page.getByRole('textbox', { name: 'Annual Revenue' }).fill('200000');
  await page.getByRole('textbox', { name: 'Annual Revenue' }).press('Enter');

  await page.getByRole('button', { name: 'Industry' }).click();
  await page.getByText('Technology').click();

  await page.locator("select[value='Qualification']").selectOption('Negotiation');
  await page.getByRole('button', { name: 'S Sumit Rai' }).click();
  await page.getByRole('option', { name: 'S Sumit Rai' }).click();

  await page.getByRole('button', { name: 'Create' }).click();
  await deals.openDeals();
});

test('Deals with Existing Organization & Contact', async ({ page }) => {
  const deals = new DealsPage(page);

  await deals.openDeals();
  await deals.clickCreate();
  await deals.selectExistingOrganization('software');
  await deals.selectExistingContact('Shreyash PakhareShreyash');

  await page.locator("select[value='Qualification']").selectOption('Negotiation');
  await page.getByRole('button', { name: 'S Sumit Rai' }).click();
  await page.getByRole('option', { name: 'S Sumit Rai' }).click();

  await page.getByRole('button', { name: 'Create' }).click();
  await deals.openDeals();
});
