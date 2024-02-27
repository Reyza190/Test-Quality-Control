import { Method } from "./method.cy";

const method = new Method();

export class Step {
  addToCartWithStandardUser() {
    method.fillUsername();
    method.fillPassword();
    method.clickButtonLogin();
    method.checkListItemShowed();
    method.clickAddToCart();
    method.clickCart();
    method.listCartItemsShowed();
  }

  removeTocartWithStandardUserFromCartPage() {
    method.fillUsername();
    method.fillPassword();
    method.clickButtonLogin();
    method.checkListItemShowed();
    method.clickAddToCart();
    method.clickCart();
    method.listCartItemsShowed();
    method.clickRemoveButton();
    method.listCartItemsNotShowed();
  }

  removeToCartWithStandardUserFromHomePage() {
    method.fillUsername();
    method.fillPassword();
    method.clickButtonLogin();
    method.checkListItemShowed();
    method.clickAddToCart();
    method.clickRemoveButton();
    method.clickCart();
    method.listCartItemsNotShowed();
  }
}
