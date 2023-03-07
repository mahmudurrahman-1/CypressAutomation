import { Url } from "../base/Url";
import { HomePage } from "../page/HomePage";
require("cypress-xpath");
///// <reference types="cypress" />

const site_url = new Url();
const homePage = new HomePage();

describe("Automation_Exercise app testing", function () {
  context("Windows", () => {
    beforeEach("Server starts", () => {
      site_url.visitSite();
    });
    it("Starting test automation", () => {
      homePage.addtoCartProcess();
    });
  });
});
