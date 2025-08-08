import { expect } from '@playwright/test';

export class CallLogsPage {
  constructor(page) {
    this.page = page;
    this.callLogsButton = page.getByRole('button', { name: 'Call Logs' });
    this.createButton = page.getByRole('button', { name: 'Create' });

    this.typeSelect = page.locator("//div[@data-name='type']//select");
    this.callReceivedByDropdown = page.getByRole('button', { name: 'Call Received By' });
    this.callerDropdown = page.getByRole('button', { name: 'Caller' });

    this.toInput = page.getByRole('textbox', { name: 'To' });
    this.fromInput = page.getByRole('textbox', { name: 'From' });

    this.statusSelect = page.locator("//div[@data-name='status']//select");
    this.durationInput = page.getByRole('textbox', { name: 'Duration' });

    this.manualSelect = page.locator("select[value='Manual']").first();
    this.incomingSelect = page.locator("select[value='Incoming']").first();
  }

  async navigateToCallLogs() {
    await this.callLogsButton.click();
  }

  async createCallLog() {
    await this.createButton.click();

    await this.typeSelect.selectOption('Incoming');
    await expect(this.callReceivedByDropdown).toBeVisible();
    await this.callReceivedByDropdown.click();
    await this.page.getByRole('option', { name: 'S Sumit Rai' }).click();

    await this.typeSelect.selectOption('Outgoing');
    await expect(this.callerDropdown).toBeVisible();
    await this.callerDropdown.click();
    await this.page.getByRole('option', { name: 'S Sumit Rai' }).click();

    await this.toInput.fill('pranav');
    await this.fromInput.fill('suneesh');

    await this.statusSelect.selectOption('Completed');
    await this.durationInput.fill('10');

    await this.createButton.click();
  }

  async applyFiltersAndReload() {
    await this.manualSelect.selectOption('Manual');
    await this.incomingSelect.selectOption('Outgoing');
    await this.page.reload();
  }
}
