import signUp from '../pageObjectsCaseLog/signupCaseLog'

describe('SignUp invalid', function () {
    const signup = new signUp()
// Sign up invalid
    it('Sign Up with invalid data', function () {
        cy.server()
        cy.route({
            method: 'POST',
            url: '/api/v1/user/ValidateEmail',
        }).as('apiCheck')
        cy.visit('http://s2cript.azurewebsites.net/')
        signup.signUpButton1().should('be.visible').click()
        cy.fixture('userSignUpDetails').then((user) => {
            cy.wait(1000)
            signup.signUpEmail().type(user.invalidEmail)
            signup.signUpPassword().type(user.invalidPassword)
            signup.acceptCheckBox().click()
            signup.acceptCheckBox().click()
            signup.signUpButton().should('be.visible').click()
            cy.contains('This feild is required').should('be.visible')
            cy.contains('Please enter a valid email').should('be.visible')
            cy.contains('Password should be at least 8 alphanumeric characters!').should('be.visible')
            cy.contains('Please accept privacy and terms and conditions').should('be.visible')
            cy.get('.close-icon').click()
        })

    //Used (Active/UnActive) Sign Up',
        cy.fixture('userSignUpDetails').then((user) => {
            signup.signUpButton1().should('be.visible').click()
            signup.accountTypeDropdown().click()
            signup.distrebuterType().click()
            signup.companyNameInput().type(user.companyName)
            signup.signUpEmail().type(user.companyEmail)
            signup.signUpPassword().type(user.companyPassword)
            signup.acceptCheckBox().click()
            signup.signUpButton().should('be.visible').click()
            cy.get('.error').contains('This email is used!').should('be.visible')
            cy.get('.close-icon').click()
        })
        cy.wait('@apiCheck').then((xhr) => {
            assert.include(xhr.response.body.data, { isValid: false })
        })
 
       
    })

})


