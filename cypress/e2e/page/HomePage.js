import { Utilities } from "../utilities/Utilities";
let methods = new Utilities();
require("cypress-xpath");

//require("cypress-xpath");
export class HomePage {
  //locators
  category = '//h2[text()="Category"]';
  menButton = '//a[normalize-space()="Men"]';
  shirtButton = '//a[normalize-space()="Tshirts"]';
  viewProductButton = '//a[normalize-space()="View Product"]';
  viewProduct = "//a[text()='View Product']";
  overContainer_2 = "div.col-sm-4>div.product-image-wrapper";
  addToCart = '//a[normalize-space()="Add to cart"]';
  addToCartButton = '//button[normalize-space()="Add to cart"]';
  continueShopping = '//button[normalize-space()="Continue Shopping"]';
  continueOnCart = '//button[normalize-space()="Continue On Cart"]';
  viewCart = '//a//u[text()="View Cart"]';
  checkout = '//a[normalize-space()="Proceed To Checkout"]';
  inputQuantity = "#quantity";

  /*** Action ***/
  //add items into cart
  //this method includes all necessary actions
  //this will be called in test phase
  addtoCartProcess() {
    //waits for the page loads
    methods.waitForThePageLoads(2000);
    //scroll to an element
    cy.xpath(this.category).scrollIntoView();
    // click menu button
    methods.findByXpath(this.menButton).click();
    //choose shirt butoon
    methods.findByXpath(this.shirtButton).click();
    // click add to cart
    methods.findByXpath(this.addToCart).should("contain", "Add to cart");
    // again see another product
    methods.findByXpath(this.viewProduct).eq(0).click();
    //waits untill the page loads
    methods.waitForThePageLoads(3000);
    //input
    methods.findByGet(this.inputQuantity).clear().type(5, { delay: 500 });
    //add to cart
    methods.findByXpath(this.addToCartButton).click();
    //cart view
    methods.findByXpath(this.viewCart).click();
    //take screen shot
    cy.screenshot();
    //checkout
    methods.findByXpath(this.checkout).click();
    //continue on cart
    methods.findByXpath(this.continueOnCart).click();
  }
}
