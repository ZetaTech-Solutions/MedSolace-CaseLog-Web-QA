import Login from '../../../pageObjects/loginCaseLog'
import Case from '../../../pageObjects/Case'
describe('Cases', function () {
    const imagePath = 'OIP.jfif';
    const login = new Login()
    const AddCase= new Case()

    it('Add new case', function () {
        cy.fixture('WebsiteUrl').then((url)=>{
        cy.server()
        cy.route('POST', '/api/v1/login').as('login')
        cy.route('POST','/api/v1/users/*/procedures').as('addcase')
        cy.visit(url.WebsiteUrl)
        cy.fixture('userLoginDetailsCaseLog').then((user) => {
            login.email().type(user.email)
            login.password().type(user.password)
            login.signInButton().click()
            cy.wait('@login').its('status').should('eq', 200)
            cy.url().should('include', 'dashboard')
        })
            // Add new case
            cy.fixture('caseDetailsCaseLog').then((user) => {
                AddCase.AddCasebutton().click()
                AddCase.PatientFirstNameInput().type(user.patientNameInput)
                AddCase.PatientLastNameInput().type(user.patientNameInput)
                AddCase.GenderInput().click()
                AddCase.SelectGender().click()
                AddCase.MedicalRecordNumberInput().type(user.medicalRecordNumberInput)
                AddCase.InsuranceInput().type(user.insuranceInput)
                AddCase.InstituionInput().click()
                AddCase.SelectInstituion().click()

                AddCase.AddDiagnosis().click()
                AddCase.AddDiagnosisSearchInput().type(user.diagnosisSearchInput)
                AddCase.AddDiagnosisSearchButton().click()
                AddCase.AddDiagnosisCheckBox().click()
                AddCase.SaveDiagnosis().click()
                
                AddCase.AddCPT().click()
                AddCase.AddCPTSearchInput().type(user.cptSearchInput)
                AddCase.AddCPTSearchButton().click()
                AddCase.AddCPTCheckBox().click()
                AddCase.SaveCPT().click()

                AddCase.InstituionInput().click()
                AddCase.SelectInstituion().click()
                AddCase.ProcedureTypeInput().type(user.procedureTypeInput)
                AddCase.RoleInput().click()
                AddCase.SelectAnyRole().click()
                AddCase.FindingsInput().type(user.findingsInput)
                AddCase.ComplicationsInput().type(user.complicationsInput)
                AddCase.OutcomeInput().type(user.outcomeInput)
                AddCase.SelectFollowUp().click()
                AddCase.SelectAnyFollowUp().click()
                AddCase.PeriodInput().click()
                AddCase.SelectDay().click()
                AddCase.NoteInput().type(user.noteInput)
                AddCase.AddNote().click()
                AddCase.AddImage()
                AddCase.SaveButton().click()

                cy.wait('@addcase').its('status').should('eq', 200)
            })
        })
    })
})
