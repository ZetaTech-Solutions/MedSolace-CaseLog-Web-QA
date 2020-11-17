import Login from '../pageObjectsCaseLog/loginCaseLog'

describe('Education', function () {
    const login = new Login()
    it('Education', function () {
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

        // Add new education
        cy.fixture('educationDetailsCaseLog').then((user) => {
            cy("").type(user.institutionInput)
            cy("").should('be.visible').click()
            cy("").should('be.visible').click()
            cy("").type(user.startDateInput)
            cy("").should('be.visible').click()
            cy("").should('be.visible').click()
            cy.get('.alert-container > .mat-focus-indicator').should('be.visible').click()
            cy("").should('be.visible').click()
            // Edit education
            cy("").clear().type(user.institutionInput1)
            cy("").should('be.visible').click()
            cy("").should('be.visible').click()
            cy("").clear().type(user.startDateInput1)
            cy("").should('be.visible').click()
            cy("").should('be.visible').click()
            cy.get('.alert-container > .mat-focus-indicator').should('be.visible').click()
            // Delete education
            cy("").should('be.visible').click()
            cy("").should('be.visible').click()
            cy.get('.alert-container > .mat-focus-indicator').should('be.visible').click()
        })
        
    })
})
