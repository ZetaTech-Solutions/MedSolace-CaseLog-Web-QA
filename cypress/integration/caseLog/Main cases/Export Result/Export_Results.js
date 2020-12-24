import Login from '../../pageObjects/loginCaseLog'
import search from '../../../pageObjects/search'
import Profile from '../../../pageObjects/profile'

describe('ُExport Result', function () {
    const login = new Login()
    const search = new search()
    const profile = new profile()
    it('search Filter', function () {
        cy.fixture('WebsiteUrl').then((url)=>{
            cy.fixture('userLoginDetailsCaseLog').then((user) => {
                cy.visit(url.WebsiteUrl)
                login.email().type(user.email)
                login.password().type(user.password)
                login.signInButton().eq(1).should('be.visible').click()
                cy.wait('@login').its('status').should('eq', 200)
            })

            cy.fixture('searchDetailsCaseLog').then((user) => {
                //patientInfo
                search.searchinput().type(user.patientInfoInput)
                search.searchbutton().click()
                search.contains(user.patientInfoInput).should('be.visible').click()
                search.exportbutton()

                profile.profileicon().click()
                cy.url().should('include', 'profile')
                profile.exportedProceduresTab().click()
                cy.contains("")
            })
        })
    })
})
