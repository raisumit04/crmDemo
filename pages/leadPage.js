import { expect } from '@playwright/test';
export class LeadPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToLeads() {
    await this.page.getByRole('button', { name: 'Leads' }).click();
  }

  async fillBasicDetails({ salutation, firstName, lastName, email, mobile, gender }) {
    await this.page.getByRole('button', { name: 'Salutation' }).click();
    await this.page.getByText(salutation, { exact: true }).click();

    await this.page.getByRole('textbox', { name: 'First Name' }).fill(firstName);
    await this.page.getByRole('textbox', { name: 'Last Name' }).fill(lastName);
    await this.page.getByRole('textbox', { name: 'Email' }).fill(email);
    await this.page.getByRole('textbox', { name: 'Mobile No' }).fill(mobile);

    await this.page.getByRole('button', { name: 'Gender' }).click();
    await this.page.getByText(gender, { exact: true }).click();
  }

  async fillOrganizationDetails(org, website, size) {
    await this.page.getByRole('textbox', { name: 'Organization' }).fill(org);
    await this.page.getByRole('textbox', { name: 'Website' }).fill(website);
    await this.page.locator("select[value='1-10']").selectOption(size);
  }

  async selectTerritory(name) {
    await this.page.getByRole('button', { name: 'Territory' }).click();
    await this.page.getByText(name, { exact: true }).click();
  }

  async enterRevenue(amount) {
    await this.page.getByRole('textbox', { name: 'Annual Revenue' }).fill(amount);
  }

  async selectIndustry(name) {
    await this.page.getByRole('button', { name: 'Industry' }).click();
    await this.page.getByText(name).click();
  }

  async selectStatusAndOwner(status, owner) {
    await this.page.locator("select[value='New']").selectOption(status);
    await this.page.getByRole('button', { name: owner }).click();
    await this.page.getByRole('option', { name: owner }).click();
  }

  async submitLeadForm() {
    await this.page.getByRole('button', { name: 'Create' }).click();
    await this.page.waitForURL('**/crm/leads/view');
    await this.page.reload();
  }

  async verifyLeadOnDashboard() {
    await this.page.locator("//span[normalize-space()='Dashboard']").click();
    await this.page.waitForURL('**/crm/dashboard');
    await this.page.getByRole('button', { name: 'Dashboard' }).click();
    await this.page.locator("//div[@class='flex items-center justify-between px-2 py-1.5']//button[2]").click();
    await expect(this.page.getByText('Total Leads')).toBeVisible();
  }
}
