class login {

     email() {
          return cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input')
     }

     password() {
          return cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input')
     }

     eyepassword(){
          return cy.get('.MuiSvgIcon-root')
     }

     signInButton() {
          return cy.get('.MuiButton-contained > .MuiButton-label')
     }
}
export default login
