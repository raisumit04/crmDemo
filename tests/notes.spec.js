import { test, expect } from "@playwright/test";
import { loginpg } from "../pages/login";
import { NotesPage } from "../pages/notesPage";

test.beforeEach('Login', async ({ page }) => {
  const login = new loginpg(page);
  await login.gotologinpg();
  await login.login("sumit.rai@testriq.com", "Sumitrai@12");
  await page.locator("//div[@class='flex items-center justify-between px-2 py-1.5']//button[2]").click();
});

test("Create and search note", async ({ page }) => {
  const notes = new NotesPage(page);

  await notes.openNotesSection();
  await notes.createNewNote("Call with pranav", "have you done your task");
  await notes.searchNote("suneesh", "together");
  await notes.reloadPage();

});
