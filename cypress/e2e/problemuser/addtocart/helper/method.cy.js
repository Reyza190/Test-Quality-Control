import { Locator } from "./locator.cy";

const locator = new Locator();

export class Method {
  fillProblemUsername() {
    var username = "problem_user";
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

  clickRemoveButton() {
    cy.get(locator.btnRemove).click();
  }

  clickItemProduct() {
    cy.get(locator.item).click();
  }

  clickCart() {
    cy.get(locator.cart).click();
  }

  clickAddToCart() {
    cy.get(locator.addToCart).click();
  }

  listCartItemsShowed() {
    cy.get(locator.cartItem).should("be.visible");
  }

  clickAddToCartProblemUser() {
    cy.get(locator.addToCartProblemUser).click();
  }
  listCartItemsNotShowed() {
    cy.get(locator.cartItem).should("not.exist");
  }
}
