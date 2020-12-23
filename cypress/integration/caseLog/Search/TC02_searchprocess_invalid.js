import Login from '../../pageObjects/loginCaseLog'


describe('search Filter', function () {
    const login = new Login()
        it('search Filter', function () {
            cy.fixture('WebsiteUrl').then((url)=>{
            cy.fixture('userLoginDetailsCaseLog').then((user) => {
                cy.visit(url.WebsiteUrl)
                login.email().type(user.email)
                login.password().type(user.password)
                login.signInButton().eq(1).should('be.visible').click()
                cy.wait('@login').its('status').should('eq', 200)

                cy.wait(100)
                cy.url().should('include', 'dashboard')
                cy.get('[data-testid=profile_button]').should('be.visible').click()
                cy.url().should('include', 'search')
            })

            cy.fixture('searchDetailsCaseLog').then((user) => {
                //patientInfo
                cy.searchinput().type(user.patientInfoInputInvalid)
                cy.searchbutton().click()
                cy.contains(user.patientInfoInputInvalid).should('be.invisible').click()
                cy.searchFilterAll()
                cy.searchFilterToday()
                cy.searchFilterOnwWeek()
                cy.searchFilteroneMonth()

                //Institution
                cy.searchinput().clear()
                cy.selectpatientInfobutton()
                cy.searchinput().type(user.institutionInputInvalid)
                cy.contains(user.institutionInputInvalid).should('be.invisible').click()
                cy.searchFilterAll()
                cy.searchFilterToday()
                cy.searchFilterOnwWeek()
                cy.searchFilteroneMonth()
            
                //cpt
                cy.searchinput().clear()
                cy.selectcptbutton()
                cy.searchinput().type(user.cptInputInvaid)
                cy.contains(user.cptInputInvaid).should('be.invisible').click()
                cy.searchFilterAll()
                cy.searchFilterToday()
                cy.searchFilterOnwWeek()
                cy.searchFilteroneMonth()
            })
        })
    })
})
