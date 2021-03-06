class Case{
    
    SelectAnyCase(){
       return cy.get('.MuiGrid-container.MuiGrid-item > :nth-child(1) > .MuiBox-root > .MuiPaper-root') 
    }

    AddCasebutton(){
        return cy.get('.jss23 > :nth-child(2) > :nth-child(1) > .MuiButtonBase-root > .MuiButton-label')
    }

    PatientFirstNameInput(){
        return cy.get('.jss103 > .MuiPaper-root > .MuiBox-root > :nth-child(1) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
    }

    PatientLastNameInput(){
        return cy.get('.jss103 > .MuiPaper-root > .MuiBox-root > :nth-child(1) > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
    }
    
    GenderInput(){
        return cy.get('#mui-component-select-gender')
    }

    SelectGender(){
        return cy.get('[data-value="FEMALE"]')
    }

    DateofBirth(){
        return cy.get('.jss98 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
    }

    SelectDateOfBirth(){
        return cy.get(':nth-child(2) > :nth-child(5) > .MuiButtonBase-root > .MuiIconButton-label')
    }

    MedicalRecordNumberInput(){
        return cy.get('.jss103 > .MuiPaper-root > .MuiBox-root > :nth-child(2) > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
    }

    InsuranceInput(){
        return cy.get('.jss103 > .MuiPaper-root > .MuiBox-root > :nth-child(2) > :nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
    }

    DateofSurgery(){
        return cy.get('.jss61 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
    }

    SelectDateOfSurgery(){
        return cy.get(':nth-child(2) > :nth-child(4) > .MuiButtonBase-root')
    }

    InstituionInput(){
        return cy.get('#mui-component-select-hospital_id')
    }

    SelectInstituion(){
        return cy.get('[data-value="325"]')
    }

    ProcedureTypeInput(){
        return cy.get('.jss117 > .MuiPaper-root > .MuiBox-root > :nth-child(1) > :nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
    }

    RoleInput(){
        return cy.get('#mui-component-select-role')
    }

    SelectAnyRole(){
        return cy.get('[data-value="CO_SURGEON"]')
    }

    FindingsInput(){
        return cy.get('.jss117 > .MuiPaper-root > .MuiBox-root > :nth-child(2) > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
    }

    ComplicationsInput(){
        return cy.get('.jss117 > .MuiPaper-root > .MuiBox-root > :nth-child(2) > :nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
    }

    OutcomeInput(){
        return cy.get(':nth-child(3) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
    }

    SelectFollowUp(){
        return cy.get('#mui-component-select-follow_up_number')
    }

    SelectAnyFollowUp(){
        return cy.get('[data-value="4"]')
    }

    PeriodInput(){
        return cy.get('#mui-component-select-follow_up_period')
    }

    SelectDay(){
        return cy.get('[data-value="WEEK"]')
    }

    NoteInput(){
        return cy.get('.jss123 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
    }

    AddNote(){
        return cy.get('.jss124 > .MuiSvgIcon-root > path')
    }

    AddImage(){
        return cy.get('label > .MuiSvgIcon-root')
    }

    AddDiagnosis(){
        return cy.get('.jss111 > .MuiSvgIcon-root')
    }

    AddDiagnosisSearchInput(){
        return cy.get('.jss145 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
    }

    AddDiagnosisSearchButton(){
        return cy.get('.jss145 > .MuiButtonBase-root')
    }

    AddDiagnosisCheckBox(){
        return cy.get('.jss172').first()
    }

    SaveDiagnosis(){
        return cy.get('.jss146 > .MuiButton-contained')
    }

    CancelDiagnosis(){
        return cy.get('')
    }

    AddCPT(){
        return cy.get('.jss115 > .MuiSvgIcon-root > path')
    }

    AddCPTSearchInput(){
        return cy.get('.jss219 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
    }

    AddCPTSearchButton(){
        return cy.get('.jss219 > .MuiButtonBase-root')
    }

    AddCPTCheckBox(){
        return cy.get('[type="checkbox"]').first()
    }
    
    SaveCPT(){
        return cy.get('.jss220 > .MuiButton-contained')
    }

    CancelAddCPT(){
        return cy.get('')
    }

    SaveButton(){
        return cy.get('.MuiButton-contained')
    }

    DeleteButton(){
        return cy.get('')
    }

    ConfirmDeleteCase(){
        return cy.get('')
    }

    EditButton(){
        return cy.get('.jss54 > .MuiBox-root > :nth-child(2) > path')
    }
}
export default Case