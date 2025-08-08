import { test } from "@playwright/test";
import { loginpg } from "../pages/login";
import { NotificationsPage } from "../pages/notificationsPage";

test.describe("Notifications Module", () => {
  test.beforeEach(async ({ page }) => {
    const login = new loginpg(page);
    await login.gotologinpg();
    await login.login('sumit.rai@testriq.com', 'Sumitrai@12');
    await page.locator("//div[@class='flex items-center justify-between px-2 py-1.5']//button[2]").click();
  });

  test("Check Notifications", async ({ page }) => {
    const notifications = new NotificationsPage(page);

    await notifications.openNotifications();
    await notifications.checkNoNotifications();
    await notifications.closeNotificationPopup();
    await notifications.clickFirstActionTwice();
  });
});
