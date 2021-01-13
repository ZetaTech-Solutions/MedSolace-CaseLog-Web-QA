import Login from '../../pageObjects/loginCaseLog'

describe('Login', function(){
    const login = new Login()

    it('Invalid input', function(){
        cy.fixture('WebsiteUrl').then((url)=>{
            cy.server()
            cy.visit(url.WebsiteUrl)
        
            cy.fixture('userLoginDetailsCaseLog').then((user)=>{
                cy.contains("Welcome back!").should('be.visible')
                login.signInButton().click()
                cy.contains(user.Emailisrequired)
                cy.contains(user.passwordisrequired)
            })
        })
    })

    it('Invalid email', function(){
        cy.fixture('WebsiteUrl').then((url)=>{
            cy.server()
            cy.visit(url.WebsiteUrl)
        
            cy.fixture('userLoginDetailsCaseLog').then((user)=>{
                cy.contains("Welcome back!").should('be.visible')
                login.email().type(user.invalid_email)
                login.password().type(user.password)
                login.signInButton().click()
                cy.contains(user.invalid_email_message)
            })
        })
    })

    it('Invalid password', function(){
        cy.fixture('WebsiteUrl').then((url)=>{
            cy.server()
            cy.route('POST', '/api/v1/login').as('login')
            cy.visit(url.WebsiteUrl)
        
            cy.fixture('userLoginDetailsCaseLog').then((user)=>{
                cy.contains("Welcome back!").should('be.visible')
                login.email().type(user.email)
                login.password().type(user.invalid_password)
                login.signInButton().click()
                cy.contains(user.falied_login_message)
            }) 
        })
    })
})
