import { Method } from "./method.cy";

const method = new Method();

export class Step {
  addToCartWithProblemUser() {
    method.fillProblemUsername();
    method.fillPassword();
    method.clickButtonLogin();
    method.checkListItemShowed();
    method.clickAddToCartProblemUser();
    method.clickCart();
    method.listCartItemsShowed();
  }

  RemoveFromCartWithProblemUser() {
    method.fillProblemUsername();
    method.fillPassword();
    method.clickButtonLogin();
    method.checkListItemShowed();
    method.clickAddToCart();
    method.clickCart();
    method.clickRemoveButton();
    method.listCartItemsNotShowed();
  }

  RemoveFromCartWithProblemUserHomePage() {
    method.fillProblemUsername();
    method.fillPassword();
    method.clickButtonLogin();
    method.checkListItemShowed();
    method.clickAddToCart();
    method.clickRemoveButton();
    method.clickCart();
    method.listCartItemsNotShowed();
  }
}
