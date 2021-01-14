class signUp {

    firstNameInput(){
        return cy.get('.MuiBox-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
    }

    lastNameInput(){
        return cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
    }
    
    emailInput(){
        return cy.get(':nth-child(2) > .MuiGrid-grid-md-12 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
    }

    phonenumberInput(){
        return cy.get('.MuiGrid-grid-xs-9 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
    }

    SelectCountry(){
        return cy.get('.MuiAutocomplete-popupIndicator > .MuiIconButton-label > .MuiSvgIcon-root')
    }

    SelectAnyCountry(){
        return cy.get('')
    }

    passwordInput(){
        return cy.get(':nth-child(5) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
    }

    signUpButton(){
        return cy.get('')
    }

    backButoon(){
        return cy.get('')
    }

    nextButton(){
        return cy.get('.MuiButton-contained')
    }

    backButton(){
        return cy.get('')
    }

    acceptButton(){
        return cy.get('[class="MuiButtonBase-root MuiButton-root MuiButton-contained jss218 MuiButton-containedPrimary"]')
    }
    
    resendemail(){
        return cy.get('[class="MuiTypography-root jss249 MuiTypography-body1"]')
    }
}
export default signUp
