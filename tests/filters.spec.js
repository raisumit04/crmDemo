import { test, expect } from "@playwright/test";
import { loginpg } from "../pages/login";
import { FiltersPage } from "../pages/filtersPage";

test.describe('Filters Feature Tests', () => {
  let filtersPage;

  test.beforeEach(async ({ page }) => {
    const login = new loginpg(page);
    await login.gotologinpg();
    await login.login('sumit.rai@testriq.com', 'Sumitrai@12');

    filtersPage = new FiltersPage(page);
    await filtersPage.openSecondButtonMenu();
  });

  test('should apply filters, sort, refresh and export CSV', async ({ page }) => {
    expect(await page.title()).not.toBeNull();

    await filtersPage.addColumnFirstName();
    await filtersPage.sortByOrganization();
    await filtersPage.addWebsiteFilter();
    await filtersPage.refreshTable();
    await filtersPage.customizeQuickFiltersAddSource();
    await filtersPage.exportAsCSV();

    // const [download] = await Promise.all([
    //   page.waitForEvent('download'),
    //   filtersPage.exportAsCSV()
    // ]);
    // expect(await download.suggestedFilename()).toContain('.csv');
  });
});
