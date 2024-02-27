import { Step } from "../helper/step.cy";

const step = new Step();

describe('Add to cart', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);

        cy.visit('/');
    });
    
    it('TCATC-05 - Add to cart problem user', () => {
        step.addToCartWithProblemUser();
    });

    it('TCATC-08 - Remove from cart problem user', () => {
        step.RemoveFromCartWithProblemUser();
    });

    it('TCATC-09 - Remove from cart problem user home page', () => {
        step.RemoveFromCartWithProblemUserHomePage();
    });
})