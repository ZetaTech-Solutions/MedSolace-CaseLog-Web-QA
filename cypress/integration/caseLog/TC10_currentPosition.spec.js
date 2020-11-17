import Login from '../pageObjectsCaseLog/loginCaseLog'

describe('Current Position', function () {
    const login = new Login()
    it('Current Position', function () {
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

        // Add new current position
        cy.fixture('currentPositionDetailsCaseLog').then((user) => {
            cy("").type(user.institutionInput)
            cy("").type(user.categoryInput)
            cy("").type(user.specialityInput)
            cy("").type(user.addressInput)
            cy("").type(user.startDateInput)
            cy("").type(user.phoneNumberInput)
            cy("").should('be.visible').click()
            cy("").should('be.visible').click()
            cy.get('.alert-container > .mat-focus-indicator').should('be.visible').click()
            cy("").should('be.visible').click()
            // Edit current position
            cy("").clear().type(user.institutionInput1)
            cy("").clear().type(user.categoryInput1)
            cy("").clear().type(user.specialityInput1)
            cy("").clear().type(user.addressInput1)
            cy("").clear().type(user.startDateInput1)
            cy("").clear().type(user.phoneNumberInput1)
            cy("").should('be.visible').click()
            cy("").should('be.visible').click()
            cy.get('.alert-container > .mat-focus-indicator').should('be.visible').click()
            cy("").should('be.visible').click()
            // Delete current position
            cy("").should('be.visible').click()
            cy("").should('be.visible').click()
            cy.get('.alert-container > .mat-focus-indicator').should('be.visible').click()
            cy("").should('be.visible').click()
        })
        
    })
})
