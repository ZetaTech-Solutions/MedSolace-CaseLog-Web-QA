import Signup from '../../pageObjects/Signup'

describe('Sign Up', function () {
    const signup = new Signup()
    it('Sign Up', function () {
        cy.server()
        cy.route({
            method: 'POST',
            url: '/api/v1/user/ValidateEmail',
        }).as('apiCheck')

        cy.fixture('WebsiteUrl').then((url)=>{
            cy.visit(url.WebsiteUrl+"signup")

            cy.fixture('userSignUpDetailsCaseLog').then((user) => {
                signup.firstNameInput().type(user.firstName)
                signup.lastNameInput().type(user.lastName)
                signup.emailInput().type(user.invalidEmail)
               
                signup.phonenumberInput().type(user.invalidphonenumber)
                signup.SelectCountry()
                signup.passwordInput().type(user.invalidpassword)
                signup.nextButton().click()
                 
                //cy.contains(user.invalidEmailMessage)
                // cy.contains(user.wrongPasswordMessage).should('be.visible')
                // cy.contains(user.wrongconfirmPasswordMessage)
                // cy.contains(user.invalidEmailMessage)
                
            })
        })
    })
})
