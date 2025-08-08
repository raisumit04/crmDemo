import { expect } from "@playwright/test";

export class NotesPage {
  constructor(page) {
    this.page = page;
    this.notesButton = page.getByRole('button', { name: 'Notes' });
    this.createButton = page.getByRole('button', { name: 'Create' });
    this.titleInput = page.getByRole('textbox', { name: 'Title (required)' });
    this.contentEditable = page.locator("//div[@contenteditable='true']");
    this.searchTitle = page.getByRole('textbox', { name: 'Title' });
    this.searchContent = page.getByRole('textbox', { name: 'Content' });
  }

  async openNotesSection() {
    await this.notesButton.click();
  }

  async createNewNote(title, content) {
    await this.createButton.nth(1).click();
    await this.titleInput.click();
    await this.titleInput.fill(title);
    await this.contentEditable.click();
    await this.contentEditable.fill(content);
    await this.createButton.first().click();
  }

  async searchNote(title, content) {
    await this.searchTitle.fill(title);
    await this.searchTitle.press('Enter');
    await this.searchContent.fill(content);
    await this.searchContent.press('Enter');
  }

  async reloadPage() {
    await this.page.reload();
  }
}
