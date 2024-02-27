import { Method } from "./method.cy";

const method = new Method();

export class Step{
    login(){
        method.fillUsername();
        method.fillPassword();
        method.clickButtonLogin();
        method.checkListItemShowed();
    }

    loginWithIncorretUsername(){
        method.fillIncorrectUsername();
        method.fillPassword();
        method.clickButtonLogin();
        method.checkErrorMessageShowed();
    }

    loginWithIncorretPassword(){
        method.fillUsername();
        method.fillIncorrectPassword();
        method.clickButtonLogin();
        method.checkErrorMessageShowed();
    }
}