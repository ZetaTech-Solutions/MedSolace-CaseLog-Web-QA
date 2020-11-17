import forgetPassword from '../pageObjectsCaseLog/forgetCaseLog'

describe('Forget Password', function () {
    const forgetpassword = new forgetPassword()
//  Forget Password 
    it('Forget Password', function () {
        cy.server()
        cy.route('POST', '/api/v1/user/ForgotPassword').as('forgetPassword')
        cy.visit('http://s2cript.azurewebsites.net/')

        cy.fixture('forgetDetailsCaseLog').then((user) => {
            forgetpassword.signInButton().should('be.visible').click()
            forgetpassword.forgetPasswordButton().should('be.visible').click()
            cy.contains("We need your registered e-mail address to send you a reset password link.").should('be.visible')
            forgetpassword.forgetEmail().type(user.forgetEmail)
            forgetpassword.resetButton().should('be.visible').click()
        })
        cy.wait('@forgetPassword').its('status').should('eq', 200)
    })
})
