import Login from '../pageObjectsCaseLog/loginCaseLog'

describe('Exported Procedure', function () {
    const login = new Login()
    it('Exported Procedure', function () {
        cy.server()
        cy.route('POST', '/api/v1/user/Login').as('login')
   
        cy.visit('http://')

        cy.fixture('userLoginDetailsCaseLog').then((user) => {
            login.signInButton().should('be.visible').click()
            login.email().type(user.email)
            login.password().type(user.password)
            login.signInButton().eq(1).should('be.visible').click()
            cy.wait('@login').its('status').should('eq', 200)
            cy.wait(1000)
            cy.url().should('include', 'dashboard')
        })
        cy.get('[data-testid=profile_button]').should('be.visible').click()
        cy.url().should('include', 'profile')

            // Download file
            cy("").should('be.visible').click()
            cy("").should('be.visible').click()
            
        })
        
    })
