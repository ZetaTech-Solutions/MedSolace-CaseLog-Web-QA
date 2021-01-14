import ForgetPassword from '../../pageObjects/ForgetCaseLog'

describe('Forget Password', function () {
    const forgetpassword = new ForgetPassword()
    it('Forget Password', function () {
        cy.server()
        cy.route('POST', '/api/v1/forget_password').as('forgetPassword')
        cy.fixture('WebsiteUrl').then((url)=>{
            cy.visit(url.WebsiteUrl)

            cy.fixture('forgetDetailsCaseLog').then((forgetPass) => {
                forgetpassword.ForgetPasswordButton().click()
                cy.url().should('include', 'forget-password')
                forgetpassword.Email().type(forgetPass.forgetEmail)
                forgetpassword.ResetButton().should('be.visible').click()
                cy.wait('@forgetPassword').its('status').should('eq', 200)
                cy.url().should('include', 'reset-password/'+forgetPass.forgetEmail)                
            })
        })
    })
})
