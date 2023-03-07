//Server setup
export class Url {
  //keep base url as string in a variable
  base_url = "https://automationexercise.com/";
  //later in the test file the method will be called
  visitSite() {
    //visit the site
    cy.visit(this.base_url);
    //set screen range
    cy.viewport(1200, 800);
  }
}
