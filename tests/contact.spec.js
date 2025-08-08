import { test, expect } from '@playwright/test';
import { loginpg } from '../pages/login';
import { ContactPage } from '../pages/contactPage';

test.beforeEach('Login', async ({ page }) => {
  const login = new loginpg(page);
  await login.gotologinpg();
  await login.login('sumit.rai@testriq.com', 'Sumitrai@12');
  await page.locator("//div[@class='flex items-center justify-between px-2 py-1.5']//button[2]").click();
});

test('Create and validate contact', async ({ page }) => {
  const contact = new ContactPage(page);

  await contact.createContact({
    salutation: 'Mr',
    firstName: 'pranav',
    lastName: 'patil',
    email: 'pranav.patil@testriq.com',
    mobile: '9874562315',
    gender: 'Male',
    company: 'software tester',
    designation: 'senior QA',
    address: 'Testriq QA Labs-Billing India'
  });

  await contact.goToContactsAndReload();

  await page.getByRole('button', { name: 'Contacts' }).click(); 
  await page.locator("//div[@class='flex items-center justify-between px-2 py-1.5']//button[2]").click();

  // await expect(page.getByText('pranav patil')).toBeVisible();
});
