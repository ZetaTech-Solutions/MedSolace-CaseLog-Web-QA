class login {

     email() {
          return cy.get('[data-testid="signin_email"]')
     }

     password() {
          return cy.get('[data-testid="signin_password"]')
     }

     eyepassword(){
          return cy.get('[data-testid="signin_password"]')
     }

     signInButton() {
          return cy.get('[data-testid="signin_button"]')
     }
}
export default login
