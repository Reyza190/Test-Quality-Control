import { Step } from "../helper/step.cy";

const step = new Step();

describe('Login', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);

        cy.visit('/');
    });

    it('TCL01 - Login with valid username password', () => {
        step.login();
    });

    it('TCL-02 - Login with incorrect username', () => {
        step.loginWithIncorretUsername();
    });

    it('TCL-03 - Login with incorrect password', () => {
        step.loginWithIncorretPassword();
    });
})