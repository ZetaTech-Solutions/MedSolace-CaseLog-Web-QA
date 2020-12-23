class ChangePassword {

    changePasswordInput() {
        return cy.get('[data-testid="change_password_click"]')
    }

    oldPasswordInput() {
        return cy.get('[data-testid="change_password_old"]')
    }

    newPasswordInput() {
        return cy.get('[data-testid="change_password_new"]')
    }

    changePasswordButton() {
        return cy.get('[data-testid="change_password_button"]')
    }

    seePasswordButton() {
        return cy.get('[data-testid=".mat-form-field-suffix > .mat-icon"]')
    }   

    okButton() {
        return cy.get('.alert-container > .mat-focus-indicator')
    }
}
export default ChangePassword 
