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
            cy.route('POST', '/api/v1/user/addcase').as('addcase')
            cy.fixture('caseDetailsCaseLog').then((user) => {
                AddCase.AddCasebutton().click()
                AddCase.patientNameInput().type(user.patientNameInputInvalid)
                AddCase.genderInput().type(user.genderInputInvalid)
                AddCase.dateOfBirthInput().type(user.dateOfBirthInputInvalid)
                AddCase.medicalRecordNumberInput().type(user.medicalRecordNumberInputInvalid)
                AddCase.institutionInput().type(user.insuranceInputInvalid)

                AddCase.AddDiagnosis().should('be.visible').click()
                AddCase.AddDiagnosisSearchInput().type(user.diagnosisSearchInputInvalid)
                AddCase.AddDiagnosisSearchButton().click()
                AddCase.AddDiagnosisCheckBox().should('be.visible').click()
                AddCase.SaveDiagnosis().should('be.visible').click()
                
                AddCase.AddCPT().should('be.visible').click()
                AddCase.AddCPTSearchInput().type(user.cptSearchInputInvalid)
                AddCase.AddCPTSearchButton().click()
                AddCase.AddCPTCheckBox().should('be.visible').click()
                AddCase.SaveCPT().should('be.visible').click()

                AddCase.DateOfSurgeryInput().type(user.dateOfSurgeryInputInvalid)
                AddCase.InstitutionInput().type(user.institutionInputInvalid)
                AddCase.ProcedureTypeInput().type(user.procedureTypeInputInvalid)
                AddCase.RoleInput().type(user.roleInputInvalid)
                AddCase.FindingsInput().type(user.findingsInputInvalid)
                AddCase.ComplicationsInput().type(user.complicationsInputInvalid)
                AddCase.OutcomeInput().type(user.outcomeInputInvalid)
                AddCase.SelectFollowUp().should('be.visible')
                AddCase.SelectDay()
                AddCase.NoteInput().type(user.noteInputInvalid)
                AddCase.AddNote().click()
                AddCase.NoteInput2().type(user.noteInputInvalid)
                AddCase.AddImage().attachFile(image)
                AddCase.SaveButton().should('be.invisible')
            })
        })
    })
})