import Login from '../pageObjectsCaseLog/loginCaseLog'

describe('search Filter', function () {
    const login = new Login()
    it('search Filter', function () {
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
            cy.get('[data-testid=profile_button]').should('be.visible').click()
            cy.url().should('include', 'search')
        })

        cy.fixture('searchDetailsCaseLog').then((user) => {
            // search using patient info all
            cy("").type(user.patientInfoInput)
            cy("").should('be.visible').click()
            cy("").should('be.visible').click()
            cy("").should('be.visible').click()
            cy("").should('be.visible').click()
            cy.contains('This feild is required').should('be.visible')
            cy("").should('be.visible').click()
            cy("").should('be.visible').click()
            // search using Institution today
            cy("").type(user.institutionInput)
            cy("").should('be.visible').click()
            cy("").should('be.visible').click()
            cy("").should('be.visible').click()
            cy("").should('be.visible').click()
            cy.contains('This feild is required').should('be.visible')
            cy("").should('be.visible').click()
            cy("").should('be.visible').click()
            cy.contains('This feild is required').should('be.visible')
            // search using cpt One Week
            cy("").type(user.cptInput)
            cy("").should('be.visible').click()
            cy("").should('be.visible').click()
            cy("").should('be.visible').click()
            cy("").should('be.visible').click()
            cy.contains('This feild is required').should('be.visible')
            cy("").should('be.visible').click()
            cy("").should('be.visible').click()
            cy.contains('This feild is required').should('be.visible')
        })

    })
})
