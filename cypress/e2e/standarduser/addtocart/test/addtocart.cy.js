import { Step } from "../helper/step.cy";

const step = new Step();

describe('Add to cart', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);

        cy.visit('/');
    });

    it('TCATC-04 - Add to cart standard user', () => {
        step.addToCartWithStandardUser();
    });

    it('TCTAC-06 - Remove from cart standard user', () => {
        step.removeTocartWithStandardUserFromCartPage();
    })

    it('TCTAC-07 - Remove from cart standard user Home Page', () => {
        step.removeToCartWithStandardUserFromHomePage
    })

})