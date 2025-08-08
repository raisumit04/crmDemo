import { expect } from "@playwright/test";
export class FiltersPage {
  constructor(page) {
    this.page = page;

    this.secondButton = page.locator("//div[@class='flex items-center justify-between px-2 py-1.5']//button[2]");

    this.columnsBtn = page.getByRole('button', { name: 'Columns' });
    this.resetBtn = page.getByRole('button', { name: 'Reset To Default' }); // FIXED: correct locator usage
    this.addColumnBtn = page.getByRole('button', { name: 'Add Column' });
    this.firstNameOption = page.getByRole('option', { name: 'First Name' }).locator('div');

    this.sortBtn = page.getByRole('button', { name: 'Sort' }); // Removed duplicate declaration
    this.clearBtn = page.getByRole('button', { name: 'Clear Sort' });
    this.organizationBtn = page.getByRole('button', { name: 'Organization' });

    this.filterBtn = page.getByRole('button', { name: 'Filter' });
    this.addFilterBtn = page.getByRole('button', { name: 'Add Filter' });
    this.websiteOption = page.getByRole('option', { name: 'Website' }).locator('div');
    this.filterCloseIcon = page.locator("//div[@data-state='closed']//button//*[name()='svg']");

    this.refreshBtn = page.getByRole('button', { name: 'Refresh' });

    this.quickFilterMenu = page.locator("//div[@id='headlessui-menu-button-v-0-27']//button").first(); // More stable than '...'
    this.customizeQuickFilters = page.getByRole('menuitem', { name: 'Customize quick filters' });
    this.addQuickFilterBtn = page.getByRole('button', { name: 'Add filter' });
    this.sourceOption = page.getByText('Source');
    this.saveBtn = page.getByRole('button', { name: 'Save' });

    this.exportMenu = page.getByRole('menuitem', { name: 'Export' });
    this.exportTypeDropdown = page.getByLabel('Export Type');
    this.downloadBtn = page.getByRole('button', { name: 'Download' });
  }


  async openSecondButtonMenu() {
    await this.secondButton.click();
  }

  async addColumnFirstName() {
    await this.columnsBtn.click();
    await this.resetBtn.click();
    await this.columnsBtn.click();
    await this.addColumnBtn.click();
    await this.firstNameOption.click();
  }

  async sortByOrganization() {
    await this.sortBtn.click();
    await this.clearBtn.click();
    await this.sortBtn.click();
    await this.organizationBtn.click();
    await this.sortBtn.click();
  }

  async addWebsiteFilter() {
    await this.filterBtn.click();
    await this.addFilterBtn.click();
    await this.websiteOption.click();
    await this.filterCloseIcon.click();
  }

  async refreshTable() {
    await this.refreshBtn.click();
  }

  async customizeQuickFiltersAddSource() {
    await this.quickFilterMenu.click();
    await this.customizeQuickFilters.click();
    await this.addQuickFilterBtn.click();
    await this.sourceOption.click();
    await this.saveBtn.click();
  }

  async exportAsCSV() {
    await this.exportMenu.click();
    await this.exportTypeDropdown.selectOption('CSV');
    await this.downloadBtn.click();
  }
}
