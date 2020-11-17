class signUp {

    accountTypeDropdown() {

        return cy.get('mat-select[id="account_type"]')

    }

    distrebuterType() {

        return cy.get('mat-option').contains('Distrebuter')

    }

    manufacturerType() {

        return cy.get('[value="manufacture"]')
    }

    companyNameInput(){

        return cy.get('[data-testid="signup_company_name"]')
    }

    manufactureNameInput(){

        return cy.get('[data-testid="signup_manufacture_name"]')
    }

    signUpEmail() {

        return cy.get('[data-testid="signup_email"]')

    }

    signUpPassword() {

        return cy.get('[data-testid="signup_password"]')

    }

    acceptCheckBox() {

        return cy.get('.mat-checkbox-inner-container')
    }

    signUpButton1() {

        return cy.get(':nth-child(3) > .mat-focus-indicator').contains('Sign Up')
        
    }

    signUpButton() {

        return cy.get('[data-testid="signup_button"]')
    }

}

export default signUp
