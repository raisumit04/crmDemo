
import { test } from "@playwright/test";
import { loginpg } from "../pages/login";
import { TasksPage } from "../pages/tasksPage";

test.beforeEach('Login', async ({ page }) => {
  const login = new loginpg(page);
  await login.gotologinpg();
  await login.login('sumit.rai@testriq.com', 'Sumitrai@12');
  await page.locator("//div[@class='flex items-center justify-between px-2 py-1.5']//button[2]").click();
});

test('Create and view task', async ({ page }) => {
  const taskPage = new TasksPage(page);

  await taskPage.navigateToTasks();

  await taskPage.createTask({
    title: 'call with pranav',
    description: 'have your client requirements fullfilled',
    dueDate: '2025-05-02 02:12:25'
  });

  await taskPage.changeStatusFilter('Todo');
  await taskPage.reloadPage();

  await taskPage.verifyTaskExists('call with pranav');
});

// import { test,expect } from "@playwright/test";
// import { loginpg } from '../pages/login'; 

// test.beforeEach('Login', async ({ page }) => {
//   const login = new loginpg(page);
//   await login.gotologinpg();
//   await login.login('sumit.rai@testriq.com', 'Sumitrai@12');
//   await page.locator("//div[@class='flex items-center justify-between px-2 py-1.5']//button[2]").click();
// });

// test('Tasks', async({page})=>
// {
//     await page.getByRole('button', { name: 'Tasks' }).click();

//     await page.getByRole('button', { name: 'Create' }).click();
//     // await page.locator('#app-header').getByRole('button', { name: 'Create' }).click();

//     await page.getByRole('textbox', { name: 'Title (required)' }).click();
//     await page.getByRole('textbox', { name: 'Title (required)' }).fill('call with pranav');

//     await page.getByRole('paragraph').click();
//     await page.locator("//div[@contenteditable='true']").fill('have your client requirements fullfilled');

//     await page.getByRole('button', { name: 'Backlog Backlog' }).click();
//     await page.getByRole('menuitem', { name: 'Done Done' }).click();

//     await page.getByRole('button', { name: 'S Sumit Rai' }).click();
//     await page.getByRole('option', { name: 'S Sumit Rai' }).click();

//     await page.getByRole('textbox', { name: '01/04/2024 11:30 PM' }).click();
//     await page.locator('#frappeui-popper-root').getByRole('textbox').click();
//     await page.locator('#frappeui-popper-root').getByRole('textbox').fill('2025-05-02 02:12:25');
//     await page.locator('#frappeui-popper-root').getByRole('textbox').press('Enter');
  

//     await page.getByRole('button', { name: 'Low' }).click();
//     await page.getByRole('menuitem', { name: 'Medium' }).click();

//     await page.getByRole('button', { name: 'Create' }).click();

//     await page.locator("select[value='Done']").first().selectOption('Todo');
//     await page.reload();

//     //   await page.getByRole('button', { name: 'CRM Sumit Rai' }).click();
//   //   await page.getByRole('menuitem', { name: 'Log out' }).click();


// });