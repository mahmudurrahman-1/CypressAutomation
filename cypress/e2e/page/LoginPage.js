import { Utilities } from "../utilities/Utilities";
require("cypress-xpath");
const methods = new Utilities();
export class LoginPage {
  //Locators
  signInBtn = '//a[normalize-space()="Signup / Login"]';
  emailInput = "//input[@name='email']";
  passInput = '//input[@name="password"]';
  loginBtn = "//button[text()='Login']";

  //Methods or actions
  loginProcess = () => {};
}
