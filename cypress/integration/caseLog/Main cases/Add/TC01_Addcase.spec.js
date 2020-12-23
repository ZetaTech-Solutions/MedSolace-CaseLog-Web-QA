import Login from '../../../pageObjects/loginCaseLog'
import AddCase from '../../../pageObjects/addcase'
describe('Cases', function () {
    const login = new Login()
    it('cases', function () {
        cy.fixture('WebsiteUrl').then((url)=>{
        cy.server()
        cy.route('POST', '/api/v1/user/Login').as('login')
        cy.visit(url.WebsiteUrl)
        cy.fixture('userLoginDetailsCaseLog').then((user) => {
            login.signInButton().should('be.visible').click()
            login.email().type(user.email)
            login.password().type(user.password)
            login.signInButton().eq(1).should('be.visible').click()
            cy.wait('@login').its('status').should('eq', 200)
            cy.wait(1000)
            cy.url().should('include', 'dashboard')
        })

            // Add new case
            cy.fixture('caseDetailsCaseLog').then((user) => {
                AddCase.patientNameInput().type(user.patientNameInput)
                AddCase.genderInput().type(user.genderInput)
                AddCase.dateOfBirthInput().type(user.dateOfBirthInput)
                AddCase.medicalRecordNumberInput().type(user.medicalRecordNumberInput)
                AddCase.institutionInput().type(user.insuranceInput)

                AddCase.AddDiagnosis().should('be.visible').click()
                AddCase.AddDiagnosisSearchInput().type(user.diagnosisSearchInput)
                AddCase.AddDiagnosisSearchButton().click()
                AddCase.AddDiagnosisCheckBox().should('be.visible').click()
                AddCase.SaveDiagnosis().should('be.visible').click()
                
                AddCase.AddCPT().should('be.visible').click()
                AddCase.AddCPTSearchInput().type(user.cptSearchInput)
                AddCase.AddCPTSearchButton().click()
                AddCase.AddCPTCheckBox().should('be.visible').click()
                AddCase.SaveCPT().should('be.visible').click()

                AddCase.DateOfSurgeryInput().type(user.dateOfSurgeryInput)
                AddCase.InstitutionInput().type(user.institutionInput)
                AddCase.ProcedureTypeInput().type(user.procedureTypeInput)
                AddCase.RoleInput().type(user.roleInput)
                AddCase.FindingsInput().type(user.findingsInput)
                AddCase.ComplicationsInput().type(user.complicationsInput)
                AddCase.OutcomeInput().type(user.outcomeInput)
                AddCase.SelectFollowUp().should('be.visible')
                AddCase.SelectDay()
                AddCase.NoteInput().type(user.noteInput)
                AddCase.AddNote().click()
                AddCase.NoteInput2().type(user.noteInput)
                AddCase.AddImage().attachFile(image)
                AddCase.SaveButton().click()
            })
        })
    })
})
