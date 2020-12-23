import forgetPassword from '../../pageObjects/forgetCaseLog'


describe('Forget Password', function () {
    const forgetpassword = new forgetPassword()
    it('Forget Password', function () {
        cy.server()
        cy.route('POST', '/api/v1/user/ForgotPassword').as('forgetPassword')
        cy.fixture('WebsiteUrl').then((url)=>{
            cy.visit(url.WebsiteUrl)

            cy.fixture('forgetDetailsCaseLog').then((user) => {
                forgetpassword.forgetPasswordButton().click()
                cy.url().should('include', 'reset-password')
                forgetpassword.Email().type(user.forgetEmail)
                forgetpassword.resetButton().should('be.visible').click()
            })
            cy.wait('@forgetPassword').its('status').should('eq', 200)
        })
    })
})
