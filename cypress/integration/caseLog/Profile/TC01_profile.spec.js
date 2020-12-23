import profile from '../pageObjectsCaseLog/profile'
import Login from '../pageObjectsCaseLog/loginCaseLog'

describe('Profile', function () {
    const profileInfo = new profile()
    const login = new Login()
    const image = 'imageTest.png'
   
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

            cy.profileicon().should('be.visible').click()
            cy.url().should('include', 'profile')
            cy.fixture('profileDetailsCaseLog').then((user) => {
                profileInfo.clickImage().click()    
           })     
        })
   })
})
