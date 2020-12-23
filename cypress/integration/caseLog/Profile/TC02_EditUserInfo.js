import Login from '../../pageObjects/loginCaseLog'
import ChangePassword from '../../pageObjects/changePassword'
import profile from '../../pageObjects/profile'

describe('Change password', function () {
    const login = new Login()
    const profile = new profile()
    const changePassword= new ChangePassword()

    it('Change password', function () {
        cy.server()
        cy.route('POST', '/api/v1/user/Login').as('login')
        cy.fixture('WebsiteUrl').then((url)=>{
            cy.visit(url.WebsiteUrl)
            cy.fixture('userLoginDetailsCaseLog').then((user) => {
                login.signInButton().should('be.visible').click()
                login.email().type(user.email)
                login.password().type(user.password)
                login.signInButton().eq(1).should('be.visible').click()
                cy.url().should('include', 'dashboard')
            })

            cy.fixture('userSignUpDetailsCaseLog').then((user) => {
                profile.profileicon().click()
                profile.editicon().click()
                profile.addImage().click()
                profile.firstNameInput().clear()
                profile.firstNameInput().type(user.firstName)
                profile.lastNameInput().clear()
                profile.lastNameInput().type(user.lastName)
                profile.emailInput().clear()
                profile.emailInput().type(user.Email)
                profile.phonenumberInput().clear()
                profile.phonenumberInput().type(user.phonenumber)
                profile.saveButton().click()
            })
            cy.wait('@changepassword').its('status').should('eq', 200)
        })
    })
})
