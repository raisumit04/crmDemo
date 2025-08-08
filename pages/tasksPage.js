import { expect } from "@playwright/test";

export class TasksPage {
  constructor(page) {
    this.page = page;
    this.tasksButton = page.getByRole('button', { name: 'Tasks' });
    this.createButton = page.getByRole('button', { name: 'Create' });
    this.titleInput = page.getByRole('textbox', { name: 'Title (required)' });
    this.descriptionBox = page.locator("//div[@contenteditable='true']");
    this.statusButton = page.getByRole('button', { name: /Backlog|Todo|Done/ });
    this.doneStatus = page.getByRole('menuitem', { name: 'Done Done' });
    this.ownerDropdown = page.getByRole('button', { name: 'S Sumit Rai' });
    this.ownerOption = page.getByRole('option', { name: 'S Sumit Rai' });
    this.dueDateInput = page.getByRole('textbox', { name: /[0-9]{2}\/[0-9]{2}\/[0-9]{4}/ });
    this.datePickerInput = page.locator('#frappeui-popper-root').getByRole('textbox');
    this.priorityButton = page.getByRole('button', { name: 'Low' });
    this.priorityOption = page.getByRole('menuitem', { name: 'Medium' });
    this.statusFilter = page.locator("select[value='Done']").first();
  }

  async navigateToTasks() {
    await this.tasksButton.click();
  }

  async createTask({ title, description, dueDate }) {
    await this.createButton.click();
    await this.titleInput.fill(title);
    await this.descriptionBox.fill(description);

    await this.statusButton.click();
    await this.doneStatus.click();

    await this.ownerDropdown.click();
    await this.ownerOption.click();

    await this.dueDateInput.click();
    await this.datePickerInput.fill(dueDate);
    await this.datePickerInput.press('Enter');

    await this.priorityButton.click();
    await this.priorityOption.click();

    await this.createButton.click();
  }

  async changeStatusFilter(status) {
    await this.statusFilter.selectOption(status);
  }

  async reloadPage() {
    await this.page.reload();
  }

}


