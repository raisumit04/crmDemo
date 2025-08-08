const { expect } = require('@playwright/test');

exports.loginpg = class loginpg {
  constructor(page) {
    this.page = page;
    this.usernameinput = '#login_email';
    this.passwordinput = '#login_password';
    this.loginbutton = "//button[normalize-space()='Login']";
    this.dashboardLink = 'text=Dashboard'; 
  }

  async gotologinpg() {
    await this.page.goto("https://testriq.m.frappe.cloud/login?redirect-to=/crm#login");
  }

  async login(username, password) {
    await this.page.locator(this.usernameinput).fill(username);
    await this.page.locator(this.passwordinput).fill(password);
    await this.page.locator(this.loginbutton).click();

    await this.page.waitForURL('https://testriq.m.frappe.cloud/crm/leads/view');
    
    }
}
