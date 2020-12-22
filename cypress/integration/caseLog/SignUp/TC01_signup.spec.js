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
                signup.emailInput().type(user.Email)
                signup.phonenumberInput().type(user.phonenumber)
                signup.SelectCountry().type(user.phonenumber)
                signup.passwordInput().type(user.password)
                signup.confirmPasswordInput().type(user.confirmPassword)
                signup.nextButton().should('be.visible').click()
                cy.contains("To continue، you’ll need to agree to the terms and conditions below.").should('be.visible')
                signup.acceptButton().should('be.visible').click()
                cy.contains("Please verify your account in order to complete your regestration").should('be.visible')
            })
            
            cy.wait('@apiCheck').then((xhr) => {
                assert.include(xhr.response.body.data, { isValid: true })
            })
        })
    })
})
