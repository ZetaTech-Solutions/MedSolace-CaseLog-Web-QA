import Login from '../../pageObjects/loginCaseLog'

describe('Login', function(){
    const login = new Login()
    it('Sign in', function(){
        cy.fixture('WebsiteUrl').then((url)=>{
            cy.server()
            cy.route('POST', '/api/v1/login').as('login')
            cy.visit(url.WebsiteUrl)
        
        cy.fixture('userLoginDetailsCaseLog').then((user)=>{
            cy.contains("Welcome back!").should('be.visible')
            login.email().type(user.email)
            login.password().type(user.password)
            login.eyepassword().click()
            login.signInButton().click()
            cy.wait('@login').its('status').should('eq', 200)
        })
        cy.url().should('include', 'dashboard') 
        })
    })
})
