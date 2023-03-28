import { Utilities } from "../utilities/Utilities";
const data = require("../../fixtures/data.json");
require("cypress-xpath");
const methods = new Utilities();
export class LoginPage {
  //Locators
  signInBtn = '//a[normalize-space()="Signup / Login"]';
  emailInput = "//input[@name='email']";
  passInput = '//input[@name="password"]';
  loginBtn = "//button[text()='Login']";

  //Methods or actions
  loginProcess = () => {
    methods.findByXpath(this.signInBtn).click();
    methods
      .findByXpath(this.emailInput)
      .eq(0)
      .type(data.email, { delay: 3000 });
    methods.sendDataByXpath(this.passInput, data.password);
    methods.findByXpath(this.loginBtn).should("be.enabled");
  };
}
