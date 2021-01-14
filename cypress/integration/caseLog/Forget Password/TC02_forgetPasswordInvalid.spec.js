import forgetPassword from '../../pageObjects/forgetCaseLog'

describe('Forget Password invalid', function () {
    const forgetpassword = new forgetPassword()

    it('Forget Password without enter email', function () {
        cy.fixture('WebsiteUrl').then((url)=>{
            cy.visit(url.WebsiteUrl)
            forgetpassword.ForgetPasswordButton().click()
            cy.url().should('include', 'forget-password')
            forgetpassword.ResetButton().should('be.visible').click()
            cy.fixture('forgetDetailsCaseLog').then((forgetPass)=>{
                cy.contains(forgetPass.thisFiledIsReq).should('be.visible')
            })
        })
    })

    it('Forget Password with invalid email', function () {
        cy.fixture('forgetDetailsCaseLog').then((forgetPass) => {
            forgetpassword.Email().type(forgetPass.invalidForgetEmail)
            forgetpassword.ResetButton().click()
            cy.contains(forgetPass.invalidEmail).should('be.visible')
        })
    })
})
