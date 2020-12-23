import Login from '../pageObjectsCaseLog/loginCaseLog'

describe('Cases', function () {
    const login = new Login()
    it('cases', function () {
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
        cy.get('[data-testid=search_button]').should('be.visible').click()
        cy.url().should('include', 'search')

        // Add new case
        cy.fixture('caseDetailsCaseLog').then((user) => {
            cy("").type(user.patientNameInput)
            cy("").type(user.genderInput)
            cy("").type(user.dateOfBirthInput)
            cy("").type(user.medicalRecordNumberInput)
            cy("").type(user.insuranceInput)
            cy("").should('be.visible').click()
            cy("").type(user.diagnosisInput)
            cy("").should('be.visible').click()
            cy("").should('be.visible').click()
            cy("").should('be.visible').click()
            cy("").should('be.visible').click()
            cy("").should('be.visible').click()
            cy("").type(user.cptInput)
            cy("").should('be.visible').click()
            cy("").should('be.visible').click()
            cy("").should('be.visible').click()
            cy("").should('be.visible').click()
            cy("").type(user.dateOfSurgeryInput)
            cy("").type(user.institutionInput)
            cy("").type(user.procedureTypeInput)
            cy("").type(user.roleInput)
            cy("").type(user.findingsInput)
            cy("").type(user.complicationsInput)
            cy("").type(user.complicationsInput)
            cy("").type(user.outcomeInput)
            cy("").should('be.visible').click()
            cy("").should('be.visible').click()
            cy("").should('be.visible').click()
            cy("").should('be.visible').click()
            cy("").type(user.noteInput)
            cy("").click()
            cy("").attachFile(image)
            cy("").click()
            cy.wait(3000)
            cy("").should('be.visible').click()
            cy.get('.alert-container > .mat-focus-indicator').should('be.visible').click()
            cy("").should('be.visible').click()

            
        })

    })
})
