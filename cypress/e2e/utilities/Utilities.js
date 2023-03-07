require("cypress-xpath");

export class Utilities {
  titleVerify(value) {
    return cy.title().should("eq", value);
  }

  sendData(path, value) {
    return cy.get(path).type(value);
  }
  sendDataByXpath(path, value) {
    return cy.xpath(path).type(value, { delay: 3000 });
  }
  selectData(path, value) {
    return cy.get(path).select(value);
  }
  findByGet(value) {
    return cy.get(value);
  }
  findByXpath(value) {
    return cy.xpath(value);
  }
  screenshotSpecific(value) {
    return cy.get(value).screenshot();
  }
  waitForThePageLoads(value) {
    return cy.wait(value);
  }
}
