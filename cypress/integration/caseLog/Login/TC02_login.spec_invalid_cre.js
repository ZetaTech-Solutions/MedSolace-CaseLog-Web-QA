import Login from '../../pageObjects/loginCaseLog'

describe('Login', function(){
    const login = new Login()
    it('Sign in', function(){
        cy.fixture('WebsiteUrl').then((url)=>{
            cy.server()
            cy.route('POST', '/api/v1/user/Login').as('login')
            cy.visit(url.WebsiteUrl)
        
        cy.fixture('userLoginDetailsCaseLog').then((user)=>{
            cy.contains("Welcome back!").should('be.visible')
            login.email().type(user.invalid_email)
            cy.contains(user.invalid_email_message)
            login.email().type(user.email)
            login.password().type(user.wrong_password)
            login.eyepassword().click()
            login.password().contains(user.wrong_password)
            login.signInButton().click()
            cy.contains(user.falied_login_message)
        })

        cy.wait('@login').its('status').should('eq', 400)
        })
    })
})
