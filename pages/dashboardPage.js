export class DashboardPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToDashboard() {
    await this.page.getByRole('button', { name: 'Dashboard' }).click();
  }

  async filterSalesUser(userName) {
    await this.page.getByRole('button', { name: 'Sales user' }).click();
    await this.page.getByRole('option', { name: userName }).click();
  }

  async filterByDateRange(rangeName) {
    await this.page.getByRole('button', { name: 'Last 30 Days' }).click();
    await this.page.getByRole('menuitem', { name: rangeName }).click();
  }

  async verifyDashboardWidgets() {
    const textsToCheck = [
      'Total Leads',
      'Avg. time to close a lead',
      'Ongoing deals',
      'Won deals',
      'Avg. won deal value',
      'Avg. deal value',
      'Avg. time to close a deal',
      'Sales trend',
      'Forecasted revenue',
      'Funnel conversion',
      'Deals by stage',
      'Leads by source',
      'Deals by source',
      'Deals by territory',
      'Deals by salesperson',
      'Lost deal reasons'
    ];

    for (const text of textsToCheck) {
      await this.page.getByText(text).isVisible();
    }
  }
}
