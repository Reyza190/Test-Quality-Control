import { Locator } from "./locator.cy";

const locator = new Locator();

export class Method{
    fillUsername(){
        var username = "standard_user";
        cy.get(locator.inputUsername).type(username);
        cy.get(locator.inputUsername).should('have.value', username);
    }

    fillIncorrectUsername() {
        var username = "incorrect_user";
        cy.get(locator.inputUsername).type(username);
        cy.get(locator.inputUsername).should('have.value', username);
    }

    fillPassword(){
        var password = "secret_sauce";
        cy.get(locator.inputPassword).type(password);
        cy.get(locator.inputPassword).should('have.value', password);
    }

    fillIncorrectPassword() {
        var password = "incorrect_password";
        cy.get(locator.inputPassword).type(password);
        cy.get(locator.inputPassword).should('have.value', password);
    }

    clickButtonLogin(){
        cy.get(locator.btnLogin).click();
    }

    checkListItemShowed(){
        cy.get(locator.listItem).should('be.visible');
    }

    checkErrorMessageShowed(){
        cy.get(locator.alertFailed).should('be.visible');
    }
}