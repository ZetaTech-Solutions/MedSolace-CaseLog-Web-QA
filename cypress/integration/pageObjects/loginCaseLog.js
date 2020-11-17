class login {

    email() {

         return cy.get('[data-testid="signin_email"]')

    }

    password() {

         return cy.get('[data-testid="signin_password"]')

    }

    signInButton() {

         return cy.get('[data-testid="signin_button"]')

    }

    logOutButton() {

     return cy.get('[data-testid="logout_button"]')

 }

 okButton() {

     return cy.get('.alert-container > .mat-focus-indicator')
 }

}

export default login
