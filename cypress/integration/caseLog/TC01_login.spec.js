import Login from '../pageObjectsCaseLog/loginCaseLog'

describe('Login', function(){
    const login = new Login()
// Log in  to case log
    it('Sign in', function(){
        cy.server()
        cy.route('POST', '/api/v1/user/Login').as('login')
        cy.route('PUT', '/api/v1/user/logout').as('logout')
        cy.visit('http://s2cript.azurewebsites.net/')
        
    cy.fixture('userLoginDetailsCaseLog').then((user)=>{
        login.signInButton().should('be.visible').click()
        cy.contains("Welcome back!").should('be.visible')
        login.email().type(user.email)
        login.password().type(user.password)
        login.signInButton().eq(1).should('be.visible').click()
        cy.url().should('include', 'dashboard')  
    })
    cy.wait('@login').its('status').should('eq', 200)
    cy.get('.mat-menu-trigger').should('be.visible').click()
    login.logOutButton().should('be.visible').click()
    cy.get('button').contains("Yes").click()
    cy.url().should('include', 'home-script')
    cy.wait('@logout').its('status').should('eq', 200)
    
})
})




