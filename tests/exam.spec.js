import { test, expect } from '@playwright/test';
import { loginpg } from '../pages/login';

test.beforeEach('Login', async ({ page }) => {
    const login = new loginpg(page);
    await login.gotologinpg();
    await login.login('sumit.rai@testriq.com', 'Sumitrai@12');
    await page.locator("//div[@class='flex items-center justify-between px-2 py-1.5']//button[2]").click();
});

test('checkout', async ({ page }) => {

    // await page.locator("select[value='1-10']").selectOption(size);
    // await page.locator("//input[@id='#frappe-ui-38' and @type='checkbox']").check();
    // await expect(await page.locator("//input[@id='#frappe-ui-38' and @type='checkbox']")).toBeChecked();


    // await page.locator('#frappe-ui-38').check();
    // const checkboxes = await page.locator("//div[contains(., 'Mr pranav nair')]//input[@type='checkbox']");
    // const count = await checkboxes.count();
    // for (let i = 0; i < count; i++) {
    //     await checkboxes.nth(i).toBeChecked();
    // }

    // await page.getByRole('row', { name: /Mr pranav nair/i }).locator("input[type='checkbox']").check();
//     const checkboxes = page.locator("//input[@id='frappe-ui-19' and @type='checkbox']");
//     const count = await checkboxes.count();

//     for (let i = 0; i < count; i++) {
//         await checkboxes.nth(i).check();
//     }
//    expect (await page.locator("//input[@id='frappe-ui-19' and @type='checkbox']")).toBeChecked();
//    expect (await page.locator("//input[@id='frappe-ui-19' and @type='checkbox']")).toBeTruthy();

const checkboxes = page.locator("//div[contains(., 'Mr pranav nair')]//input[@type='checkbox']");
const count = await checkboxes.count();

for (let i = 0; i < count; i++) {
  await checkboxes.nth(i).check(); // or .click({ force: true }) if needed
}


    await page.waitForTimeout(3000)


    // await page.locator('#headlessui-menu-button-v-0-877').getByRole('button').click();
    // await page.getByRole('menuitem', { name: 'Delete' }).click();
    // await page.getByRole('button', { name: 'Delete' }).click();

})

test('check', async ({ page }) => {
    await page.locator('#frappe-ui-3').check();
    await page.locator('#headlessui-menu-button-v-0-185').getByRole('button').click();
    await page.getByRole('menuitem', { name: 'Delete' }).click();
    await page.getByRole('button', { name: 'Delete' }).click();

    await page.getByRole('button', { name: 'Deals' }).click();
    await page.getByRole('button', { name: 'Create' }).click();
    await page.getByRole('textbox', { name: 'Organization Name' }).click();
    await page.getByRole('textbox', { name: 'Organization Name' }).fill('');
    await page.locator('#headlessui-switch-v-0-473').click();
    await page.locator('#headlessui-switch-v-0-474').click();
    await page.getByRole('button', { name: 'Organization' }).click();
    await page.getByRole('option', { name: 'software', exact: true }).locator('div').click();
    await page.getByRole('button', { name: 'Contact' }).click();
    await page.getByRole('option', { name: 'pranav mehta pranav mehta', exact: true }).click();
    await page.getByRole('button', { name: 'Create' }).click();
    await page.getByRole('button', { name: 'Deals' }).click();

    await page.locator('#frappe-ui-38').check();
    await page.locator('#headlessui-menu-button-v-0-877').getByRole('button').click();
    await page.getByRole('menuitem', { name: 'Delete' }).click();
    await page.getByRole('button', { name: 'Delete' }).click();

    await page.locator('#frappe-ui-29').check();
    await page.locator('#headlessui-menu-button-v-0-877').getByRole('button').click();
    await page.getByRole('menuitem', { name: 'Delete' }).click();
    await page.getByRole('button', { name: 'Delete 2 items', exact: true }).click();
    await page.getByRole('button', { name: 'Delete' }).click();

    await page.getByRole('button', { name: 'Delete' }).dblclick();
    await page.getByRole('button').filter({ hasText: /^$/ }).click();

    await page.getByRole('button', { name: 'Leads' }).click();
    await page.getByRole('button', { name: 'Columns' }).click();
    await page.getByRole('button', { name: 'Add Column' }).click();
    await page.getByRole('option', { name: 'Lead Owner' }).locator('div').click();
    await page.getByRole('button', { name: 'Reset Changes' }).click();

    await page.getByRole('button', { name: 'Columns' }).click();
    await page.getByRole('button', { name: 'Add Column' }).click();
    await page.getByRole('option', { name: 'Industry' }).locator('div').click();
    await page.getByRole('button', { name: 'Reset to Default' }).click();

    await page.getByRole('button', { name: 'Sort' }).click();
    await page.getByRole('option', { name: 'Website' }).locator('div').click();
    await page.getByRole('button', { name: 'Website' }).click();
    await page.getByRole('button', { name: 'Clear Sort' }).click();

    await page.getByRole('button', { name: 'Filter' }).click();
    await page.locator('div').filter({ hasText: /^Add Filter$/ }).first().click();
    await page.getByRole('button', { name: 'Add Filter' }).click();
    await page.getByRole('option', { name: 'Net Total' }).locator('div').click();
    await page.getByRole('button', { name: 'Clear all Filter' }).click();


    await page.locator('#headlessui-menu-button-v-0-987').getByRole('button').click();
    await page.getByRole('menuitem', { name: 'Export' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Download' }).click();
    const download = await downloadPromise;

    await page.locator('#headlessui-menu-button-v-0-987').getByRole('button').click();
    await page.getByRole('menuitem', { name: 'Customize quick filters' }).click();
    await page.getByRole('button', { name: 'Add filter' }).click();
    await page.getByRole('option', { name: 'Organization' }).locator('div').click();
    await page.getByRole('button', { name: 'Save' }).click();

    await page.locator('#headlessui-menu-button-v-0-1430').getByRole('button').click();
    await page.getByRole('menuitem', { name: 'Customize quick filters' }).click();
    await page.getByRole('button', { name: 'Organization', exact: true }).click();
    await page.getByRole('button', { name: 'Website' }).click();
    await page.getByRole('button', { name: 'Organization', exact: true }).click();
    await page.getByRole('button').filter({ hasText: /^$/ }).click();

    await page.locator('#headlessui-menu-button-v-0-1619').getByRole('button').click();
    await page.getByRole('menuitem', { name: 'Customize quick filters' }).click();
    await page.getByRole('button', { name: 'Organization', exact: true }).dblclick();
    await page.getByRole('button', { name: 'Website' }).dblclick();
    await page.getByRole('button', { name: 'Website' }).dblclick();
});
