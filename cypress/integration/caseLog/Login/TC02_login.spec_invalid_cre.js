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

            cy.fixture('changePasswordDetailsCaseLog').then((user) => {
                profile.profileicon().click()
                profile.editicon().click()
                profile.changepasswordbutton().click()
                changePassword.oldPasswordInput().type(user.worngoldpassword)
                changePassword.newPasswordInput().type(user.newPassword)
                changePassword.newPasswordInput().type(user.confirmPassword)
                changePassword.changePasswordButton().should('be.visible').click()
                cy.contains(user.WorngOldPasswordMessage).should('be.visible')

                changePassword.oldPasswordInput().clear()
                changePassword.oldPasswordInput().type(user.oldpassword)
                changePassword.newPasswordInput().clear()
                changePassword.newPasswordInput().type(user.newPassword)
                changePassword.newPasswordInput().clear()
                changePassword.newPasswordInput().type(user.notMatchPassword)
                changePassword.changePasswordButton().should('be.visible').click()
                cy.contains(user.NOTMatchedConfirmPassword).should('be.visible')
            })
            cy.wait('@changepassword').its('status').should('eq', 200)
        })
    })
})
