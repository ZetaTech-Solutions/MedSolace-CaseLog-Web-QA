import signUp from '../../pageObjects/signupCaseLog'

describe('Sign Up', function () {
    const signup = new signUp()
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
                cy.contains(user.invalidEmailMessage)
                signup.phonenumberInput().type(user.invalidphonenumber)
                cy.contains(user.invalidEmailMessage)
                signup.SelectCountry()
                signup.passwordInput().type(user.invalidpassword)
                cy.contains(user.wrongPasswordMessage).should('be.visible')
                signup.confirmPasswordInput().type(user.wrongconfirmPassword)
                cy.contains(user.wrongconfirmPasswordMessage)
                signup.nextButton().should('be.invisible').click()
            })
            
            cy.wait('@apiCheck').then((xhr) => {
                assert.include(xhr.response.body.data, { isValid: true })
            })
        })
    })
})
