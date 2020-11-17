class forgetPassword {

    signInButton() {

        return cy.get('[data-testid="signin_button"]')

    }

    forgetPasswordButton() {

        return cy.get('[data-testid="forget_password_link"]')

    }

    forgetEmail() {

        return cy.get('[data-testid="forget_password_email"]')

    }

    resetButton() {

        return cy.get('[data-testid="forget_password_button"]')
    }

   okButton() {

        return cy.get('.alert-container > .mat-focus-indicator')
    }

    

}
export default forgetPassword 
