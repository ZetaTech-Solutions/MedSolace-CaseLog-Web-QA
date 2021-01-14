class ForgetPassword {

    ForgetPasswordButton() {
        return cy.get('.MuiBox-root > .MuiTypography-root')
    }

    Email() {
        return cy.get('.MuiInputBase-input')
    }

    ResetButton() {
        return cy.get('.MuiButton-contained > .MuiButton-label')
    }

    OkButton() {
        return cy.get('.alert-container > .mat-focus-indicator')
    }   
}
export default ForgetPassword 
