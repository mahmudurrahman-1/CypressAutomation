import { Url } from "../base/Url";
import { LoginPage } from "../page/LoginPage";

const site_url = new Url();
const login = new LoginPage();

describe("Sign in test", () => {
  context("Window", () => {
    beforeEach("visit site", () => {
      site_url.visitSite();
    });
    it("Start login process", () => {
      login.loginProcess();
    });
  });
});
