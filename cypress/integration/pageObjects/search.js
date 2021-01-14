class Search{
 
    searchinput(){
        return cy.get('.MuiInputBase-input')
    }

    searchFilterAll(){
        return cy.get('.MuiPaper-root > .MuiButtonBase-root')
    }

    searchFilterToday(){
        return cy.get('.MuiList-root > :nth-child(2)')
    }

    searchFilterOnwWeek(){
        return cy.get('.MuiList-root > :nth-child(3)')
    }

    searchFilteroneMonth(){
        return cy.get('.MuiList-root > :nth-child(4)')
    }

    selectpatientInfobutton(){
        return cy.get('.MuiButtonGroup-root > .MuiButton-contained')
    }

    selectinstitutionbutton(){
        return cy.get('.MuiButtonGroup-root > :nth-child(2)')
    }

    selectcptbutton(){
        return cy.get('.MuiButtonGroup-root > :nth-child(3)')
    }

    searchbutton(){
        return cy.get(':nth-child(1) > .jss12 > .MuiBox-root > .MuiButtonBase-root')
    }

    exportbutton(){
        return cy.get(':nth-child(2) > .jss12 > .MuiBox-root > .MuiButtonBase-root')
    }
}
export default Search