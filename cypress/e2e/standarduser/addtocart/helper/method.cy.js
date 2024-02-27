import { Locator } from "./locator.cy";

const locator = new Locator();

export class Method {
  fillUsername() {
    var username = "standard_user";
    cy.get(locator.inputUsername).type(username);
    cy.get(locator.inputUsername).should("have.value", username);
  }

  fillPassword() {
    var password = "secret_sauce";
    cy.get(locator.inputPassword).type(password);
    cy.get(locator.inputPassword).should("have.value", password);
  }

  clickButtonLogin() {
    cy.get(locator.btnLogin).click();
  }

  checkListItemShowed() {
    cy.get(locator.listItem).should("be.visible");
  }

  clickAddToCart() {
    cy.get(locator.addToCart).click();
  }

  clickCart() {
    cy.get(locator.cart).click();
  }

  listCartItemsShowed() {
    cy.get(locator.cartItem).should("be.visible");
  }

  clickRemoveButton() {
    cy.get(locator.btnRemove).click();
  }

  listCartItemsNotShowed() {
    cy.get(locator.cartItem).should("not.exist");
  }

}
