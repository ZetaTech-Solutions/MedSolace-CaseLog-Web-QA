import Login from '../../../../pageObjects/loginCaseLog'
import Profile from '../../../../pageObjects/profile'

describe('Add Experience', function () {
    const login = new Login()
    const profile = new Profile()
   
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

            profile.profileicon().click()
            cy.url().should('include', 'profile')
            profile.logouticon().click()
            profile.confirmLogOut().click()
            cy.url().should(url.WebsiteUrl)
        })
    })
})
