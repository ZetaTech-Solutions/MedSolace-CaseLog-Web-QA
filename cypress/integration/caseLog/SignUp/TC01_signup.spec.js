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
                signup.emailInput().type(user.Email)
                signup.phonenumberInput().type(user.phonenumber)
                signup.SelectCountry().type(user.phonenumber)
                signup.passwordInput().type(user.password)
                signup.nextButton().click()
                //signup.acceptButton().should('be.visible').click()
            })
            
            cy.wait('@apiCheck').then((xhr) => {
                assert.include(xhr.response.body.data, { isValid: true })
            })
        })
    })
})
