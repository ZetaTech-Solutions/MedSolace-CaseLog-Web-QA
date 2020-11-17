import forgetPassword from '../pageObjectsCaseLog/forgetCaseLog'

describe('Forget Password invalid', function () {
    const forgetpassword = new forgetPassword()
// Forget invalid
    it('Open Forget Password dialog', function () {
        cy.visit('http://s2cript.azurewebsites.net/')
        forgetpassword.signInButton().should('be.visible').click()
        forgetpassword.forgetPasswordButton().should('be.visible').click()
        cy.contains("We need your registered e-mail address to send you a reset password link.").should('be.visible')

    })

    it('Forget Password without enter email', function () {
        forgetpassword.forgetEmail().click()
        forgetpassword.resetButton().should('be.visible').click()
        cy.contains('This feild is required').should('be.visible')
    })


    it('Forget Password with invalid email', function () {

        cy.fixture('forgetDetailsCaseLog').then((user) => {
            forgetpassword.forgetEmail().type(user.invalidForgetEmail)
            forgetpassword.resetButton().should('be.visible').click()
            cy.contains('Please enter a valid email').should('be.visible')
        })
    })

    it('Forget Password with un used email', function () {
        cy.server()
        cy.route('POST', '/api/v1/user/ForgotPassword').as('forgetPassword')
        cy.fixture('forgetDetailsCaseLog').then((user) => {
            forgetpassword.forgetEmail().clear().type(user.unUsedEmail)
            forgetpassword.resetButton().should('be.visible').click()
        })
        cy.wait('@forgetPassword').its('status').should('eq', 200)
    })


    it('Forget Password with un active email', function () {
        cy.server()
        cy.route('POST', '/api/v1/user/ForgotPassword').as('forgetPassword')
        forgetpassword.okButton().click()
        forgetpassword.signInButton().should('be.visible').click()
        forgetpassword.forgetPasswordButton().should('be.visible').click()
        cy.fixture('forgetDetailsCaseLog').then((user) => {
            forgetpassword.forgetEmail().clear().type(user.unActiveEmail)
            forgetpassword.resetButton().should('be.visible').click()
        })
        cy.wait('@forgetPassword').its('status').should('eq', 200)
    })


})












