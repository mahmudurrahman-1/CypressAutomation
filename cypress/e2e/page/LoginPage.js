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
    //clicks on sign in/ sign up button
    methods.findByXpath(this.signInBtn).click();
    //enters email
    methods
      .findByXpath(this.emailInput)
      .eq(0)
      .type(data.email, { delay: 3000 });
    // enters passwords
    methods.sendDataByXpath(this.passInput, data.password);
    //clicks on login button
    methods.findByXpath(this.loginBtn).should("be.enabled");
  };
}
