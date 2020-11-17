import signUp from '../pageObjectsCaseLog/signupCaseLog'

describe('Sign Up', function () {
    const signup = new signUp()
    //Sign Up
    it('Sign Up', function () {
        cy.server()
        cy.route({
            method: 'POST',
            url: '/api/v1/user/ValidateEmail',
        }).as('apiCheck')

        cy.visit('http://s2cript.azurewebsites.net/')

        cy.fixture('userSignUpDetailsCaseLog').then((user) => {
            signup.signInButton().should('be.visible').click()
            signup.signUpButton1().should('be.visible').click()
            signup.firstNameInput().type(user.firstName)
            signup.lastNameInput().type(user.lastName)
            signup.nbiInput().type(user.npi)
            signup.signUpEmail().type(user.Email)
            signup.numberInput().type(user.number)
            signup.signUpPassword().type(user.Password)
            signup.signUpConfirmPassword().type(user.confirmPassword)
            signup.signUpButton().should('be.visible').click()
            cy.contains("To continue، you’ll need to agree to the terms and conditions below.").should('be.visible')
            signup.acceptButton().should('be.visible').click()
            cy.contains("Please verify your account in order to complete your regestration").should('be.visible')

        })
        cy.wait('@apiCheck').then((xhr) => {
            assert.include(xhr.response.body.data, { isValid: true })
        })

    })


})
