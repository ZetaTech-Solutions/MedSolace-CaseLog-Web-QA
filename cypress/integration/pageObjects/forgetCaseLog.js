class forgetPassword {

    forgetPasswordButton() {
        return cy.get('[data-testid="forget_password_link"]')
    }

    Email() {
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
