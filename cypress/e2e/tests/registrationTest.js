import { Registration } from "../page/RegistrationPage";
import { Url } from "../base/Url";
const site_url = new Url();
const signup = new Registration();
require("cypress-xpath");

describe("Registration Form", () => {
  context("Windows", () => {
    beforeEach("Visit site", () => {
      site_url.visitSite();
    });
    it("Registration process starts here", () => {
      signup.registrationProcess();
    });
  });
});
