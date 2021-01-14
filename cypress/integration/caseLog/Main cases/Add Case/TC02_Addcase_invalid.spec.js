import Login from '../../../pageObjects/loginCaseLog'
import Case from '../../../pageObjects/Case'
describe('Cases', function () {
    const imagePath = 'OIP.jfif';
    const login = new Login()
    const AddCase= new Case()

        it('Add new case with invalid input', function () {
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
                    AddCase.AddCasebutton().click()
                    AddCase.SaveButton().click()
                    cy.fixture('caseDetailsCaseLog').then((newCase) => {
                        cy.contains(newCase.thisreq)
                        cy.contains(newCase.thisreq)
                        cy.contains(newCase.thisreq)
                        cy.contains(newCase.thisreq)
                        cy.contains(newCase.thisreq)
                        cy.contains(newCase.thisreq)
                        cy.contains(newCase.thisreq)
                        cy.contains(newCase.thisreq)
                    })
                })
            })
        })
})
