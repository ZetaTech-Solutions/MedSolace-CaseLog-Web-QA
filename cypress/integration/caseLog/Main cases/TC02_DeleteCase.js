import Login from '../../pageObjects/loginCaseLog'
import Case from '../../pageObjects/addCase'

describe('View case', function () {
    const login = new Login()
    const selectcase = new Case()
   
    it('Profile Information', function () {
        cy.fixture('WebsiteUrl').then((url)=>{
            cy.server()
            cy.route('POST', '/api/v1/user/Login').as('login')
            cy.visit(url.WebsiteUrl)
            cy.fixture('userLoginDetailsCaseLog').then((user) => {
                cy.contains("Welcome back!").should('be.visible')
                login.email().type(user.email)
                login.password().type(user.password)
                login.signInButton().click()
            })
            selectcase.SelectAnyCase().click()
            selectcase.DeleteButton().click()
            selectcase.ConfirmDeleteCase().click()
        })
    })
})
