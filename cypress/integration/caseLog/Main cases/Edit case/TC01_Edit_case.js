import Login from '../../../pageObjects/loginCaseLog'
import EditCase from '../../../pageObjects/EditCase'

describe('Edit Case', function () {
    const login = new Login()
    const editCase = new EditCase()

    it('cases', function () {
        cy.fixture('WebsiteUrl').then((url)=>{
        cy.server()
        cy.route('POST', '/api/v1/user/Login').as('login')
        cy.visit(url.WebsiteUrl)
        cy.fixture('userLoginDetailsCaseLog').then((user)=>{
            cy.contains("Welcome back!").should('be.visible')
            login.email().type(user.email)
            login.password().type(user.password)
            login.eyepassword().click()
            login.signInButton().click()
        })
        cy.url().should('include', 'dashboard') 
            // Editcase
            cy.fixture('caseDetailsCaseLog').then((user) => {
                editCase.SelectAnyCase().click()
                editCase.EditButton().click()
                editCase.PatientFirstNameInput().clear()
                editCase.PatientFirstNameInput().type(user.patientNameInput)
                editCase.GenderInput().click()
                editCase.SelectGender().click()
                // editCase.DateofBirth().click()
                // editCase.SelectDateOfBirth().click()
                editCase.MedicalRecordNumberInput().clear()
                editCase.MedicalRecordNumberInput().type(user.medicalRecordNumberInput)
                editCase.InsuranceInput().clear()
                editCase.InsuranceInput().type(user.insuranceInput)

                editCase.AddDiagnosis().click()
                editCase.AddDiagnosisSearchInput().type(user.diagnosisSearchInput)
                editCase.AddDiagnosisSearchButton().click()
                editCase.AddDiagnosisCheckBox().click()
                editCase.SaveDiagnosis().click()
                
                editCase.AddCPT().click()
                editCase.AddCPTSearchInput().type(user.cptSearchInput)
                editCase.AddCPTSearchButton().click()
                editCase.AddCPTCheckBox().click()
                editCase.SaveCPT().click()

                // editCase.DateofSurgery().clear()
                // editCase.SelectDateOfSurgery().click()
                editCase.InstituionInput().click()
                editCase.SelectInstituion().click()
                editCase.ProcedureTypeInput().clear()
                editCase.ProcedureTypeInput().type(user.procedureTypeInput)
                editCase.RoleInput().click()
                editCase.SelectAnyRole().click()
                editCase.FindingsInput().clear()
                editCase.FindingsInput().type(user.findingsInput)
                editCase.ComplicationsInput().type(user.complicationsInput)
                editCase.OutcomeInput().type(user.outcomeInput)
                editCase.SelectFollowUp().click()
                editCase.SelectAnyFollowUp().click()
                editCase.NoteInput().type(user.noteInput)
                editCase.AddNote().click()
                //editCase.AddImage().attachFile(image)
                editCase.SaveButton().click()
            })
        })
    })
})
