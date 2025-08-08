export class OrganizationPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToOrganizations() {
    await this.page.getByRole('button', { name: 'Organizations' }).click();

  }

  async createOrganization({ name, website, revenue, territory, empRange, industry, address }) {
    await this.page.getByRole('button', { name: 'Create' }).click();

    await this.page.getByRole('textbox', { name: 'Organization Name' }).fill(name);
    await this.page.getByRole('textbox', { name: 'Website' }).fill(website);

    await this.page.getByRole('textbox', { name: 'Annual Revenue' }).fill(revenue);
    await this.page.getByRole('textbox', { name: 'Annual Revenue' }).press('Enter');

    await this.page.getByRole('button', { name: 'Territory' }).click();
    await this.page.getByText(territory, { exact: true }).click();

    await this.page.locator("select[value='1-10']").selectOption(empRange);

    await this.page.getByRole('button', { name: 'Industry' }).click();
    await this.page.getByRole('option', { name: industry }).click();

    await this.page.getByRole('button', { name: 'Address' }).click();
    await this.page.getByRole('option', { name: address }).click();

    await this.page.getByRole('button', { name: 'Create' }).click();
  }

  async reloadPage() {
    
    await this.page.reload();
  }
}
