import { expect } from "@playwright/test";

export class NotificationsPage {
    constructor(page) {
        
        this.page = page;
        this.notificationsButton = page.getByRole('button', { name: 'Notifications' });
        this.noNotificationsText = page.locator("//div[contains(text(), 'No new notifications')]").first();
        this.closeIcon = page.locator("//div[contains(@class, 'z-20') and contains(@class, 'border-b')]//button//*[name()='svg']").first();
        this.firstActionButton = page.locator("(//div[contains(@class, 'flex') and contains(@class, 'gap')]/div[2]//button)[1]");
    }

    async openNotifications() {
        await expect(this.notificationsButton).toBeVisible({ timeout: 10000 });
        await this.notificationsButton.click();
    }

    async checkNoNotifications() {
        await expect(this.noNotificationsText).toBeVisible({ timeout: 5000 });
        await this.noNotificationsText.click();
    }

    async closeNotificationPopup() {
        await expect(this.closeIcon).toBeVisible({ timeout: 5000 });
        await this.closeIcon.click();
    }

    async clickFirstActionTwice() {
        await expect(this.firstActionButton).toBeVisible({ timeout: 5000 });
        await this.firstActionButton.click();
        await this.page.waitForTimeout(500);
        await this.firstActionButton.click();
    }
}
