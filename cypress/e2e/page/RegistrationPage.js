import { Utilities } from "../utilities/Utilities";
require("cypress-xpath");
const methods = new Utilities();
const data = require("../../fixtures/data.json");
export class Registration {
  //Locators

  signupBtn = '//a[text()=" Signup / Login"]';
  nameInput = '//input[@name="name"]';
  emailInput = '//input[@name="email"]';

  genderBtn = "#id_gender1";
  passwordInput = "#password";
  selectDays = "#days";
  selectMonths = "#months";
  selectYears = "#years";
  checkNews = "#newsletter";
  checkOffers = "#optin";
  firstNameInput = "#first_name";
  lastNameInput = "#last_name";
  cpNameInput = "#company";
  inputAddress = "#address1";
  inputAddress2 = "#address2";

  selectCountry = "#country";
  inputState = "#state";
  inputCity = "#city";
  inputZip = "#zipcode";
  inputMobileNum = "#mobile_number";
  formsignupBtn = '//button[text()="Signup"]';
  createacBtn = "//button[text()='Create Account']";

  //form
  form_title = "Enter Account Information";
  form_title_loc = "//h2/b[text()='Enter Account Information']";

  //Actions
  //This method includes all the activities for registration
  registrationProcess() {
    //assert that if btn is visible
    methods.findByXpath(this.signupBtn).should("be.visible").click();
    //waits for the page load
    methods.waitForThePageLoads(2000);
    //input values
    methods
      .findByXpath(this.nameInput)
      .clear()
      .should("be.empty")
      .type(data.name);
    methods
      .findByXpath(this.emailInput)
      .eq(1)
      .clear()
      .should("be.enabled")
      .type(data.email);
    //take a screenshot
    cy.screenshot();
    methods.findByXpath(this.formsignupBtn).click();
    //Full form page
    methods
      .findByXpath(this.form_title_loc)
      .should("have.text", this.form_title);
    //gender
    methods.findByGet(this.genderBtn).click();
    //password
    methods
      .findByGet(this.passwordInput)
      .eq(0)
      .clear()
      .should("be.empty")
      .type(data.password, { delay: 200 });
    //day
    methods.findByGet(this.selectDays).eq(0).select(data.day);
    //month
    methods.findByGet(this.selectMonths).eq(0).select(data.month);
    //year
    methods.findByGet(this.selectYears).eq(0).select(data.year);
    //check news
    methods.findByGet(this.checkNews).should("not.be.checked").check();
    //check offers
    methods
      .findByGet(this.checkOffers)

      .should("not.be.checked")
      .check();
    //check firstName
    methods.sendData(this.firstNameInput, data.firstName);
    //check lastname
    methods.sendData(this.lastNameInput, data.lastName);
    //company
    methods.sendData(this.cpNameInput, data.company);
    //address one
    methods.sendData(this.inputAddress, data.address);
    //address two
    methods.sendData(this.inputAddress2, data.address2);
    //country
    methods.selectData(this.selectCountry, data.country);
    //state
    methods.sendData(this.inputState, data.state);
    //city
    methods.sendData(this.inputCity, data.City);
    //zipcode
    methods.sendData(this.inputZip, data.Zipcode);
    //Mobil number
    methods.sendData(this.inputMobileNum, data.Mobile);
    //save create btn
    methods.findByXpath(this.createacBtn).should("have.text", "Create Account");
  }
}
