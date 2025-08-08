export class ContactPage {
  constructor(page) {
    this.page = page;
  }

  async createContact(details) {
    const { salutation, firstName, lastName, email, mobile, gender, company, designation, address } = details;

    await this.page.getByRole('button', { name: 'Contacts' }).click();

    await this.page.getByRole('button', { name: 'Create' }).click();

    await this.page.getByRole('button', { name: 'Salutation' }).click();
    await this.page.getByText(salutation, { exact: true }).click();

    await this.page.getByRole('textbox', { name: 'First Name' }).fill(firstName);
    await this.page.getByRole('textbox', { name: 'Last Name' }).fill(lastName);
    await this.page.getByRole('textbox', { name: 'Email Address' }).fill(email);
    await this.page.getByRole('textbox', { name: 'Mobile No' }).fill(mobile);

    await this.page.getByRole('button', { name: 'Gender' }).click();
    await this.page.getByText(gender, { exact: true }).click();

    await this.page.getByRole('textbox', { name: 'Company Name' }).fill(company);
    await this.page.getByRole('textbox', { name: 'Designation' }).fill(designation);

    await this.page.getByRole('button', { name: 'Address' }).click();
    await this.page.getByRole('option', { name: address }).click();

    await this.page.getByRole('button', { name: 'Create' }).click();
  }

  async goToContactsAndReload() {
    await this.page.getByRole('button', { name: 'Contacts' }).click();
    await this.page.reload();
  }
}
