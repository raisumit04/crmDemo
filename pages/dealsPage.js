import { expect } from "@playwright/test";

export class DealsPage {
    constructor(page) {
        this.page = page;
        this.dealsButton = page.getByRole('button', { name: 'Deals' });
        this.createButton = page.getByRole('button', { name: 'Create' });

        this.chooseExistingOrgSwitch = page.locator("//div[text()='Choose Existing Organization']/following::button[@role='switch'][1]");
        this.chooseExistingContactSwitch = page.locator("//div[text()='Choose Existing Contact']/following::button[@role='switch'][1]");

        this.organizationDropdown = page.getByRole('button', { name: 'Organization' });
        this.contactDropdown = page.getByRole('button', { name: 'Contact' });
    }

    async openDeals() {
        await this.page.waitForLoadState('domcontentloaded');
        await expect(this.dealsButton).toBeVisible({ timeout: 20000 });
        await this.dealsButton.click({ timeout: 10000 });
        await this.page.waitForLoadState('networkidle');
    }
    


    async clickCreate() {
        await expect(this.createButton).toBeVisible();
        try {
            await this.createButton.click();
        } catch (error) {
            console.warn("First click on Create button failed, retrying...");
            await this.page.waitForTimeout(1000); 
            await this.createButton.click();
        }
    }


    async selectExistingOrganization(orgName) {
        await expect(this.chooseExistingOrgSwitch).toBeVisible();
        await this.chooseExistingOrgSwitch.click();
        await this.organizationDropdown.click();
        await this.page.getByRole('option', { name: orgName, exact: true }).click();
    }

    async selectExistingContact(contactName) {
        await expect(this.chooseExistingContactSwitch).toBeVisible();
        await this.chooseExistingContactSwitch.click();
        await this.contactDropdown.click();
        await this.page.getByText(contactName).click();
    }
}