import Login from '../pageObjects/loginScript'
import ChangePassword from '../../pageObjects/changePassword'

describe('Invalid change password', function () {
    const login = new Login()
    const changePassword= new ChangePassword()

    it('Invalid change password', function () {
        cy.server()
        cy.route('POST', '/api/v1/user/Login').as('login')
        cy.visit('http://s2cript.azurewebsites.net/')

        cy.fixture('userLoginDetailsCaseLog').then((user) => {
            login.signInButton().should('be.visible').click()
            login.email().type(user.email)
            login.password().type(user.password)
            login.signInButton().eq(1).should('be.visible').click()
            cy.url().should('include', 'dashboard')})
            cy.get('.mat-menu-trigger').should('be.visible').click()
            cy.get('[data-testid=profile_button]').should('be.visible').click()
            cy.url().should('include', 'profile')
        cy.wait('@login').its('status').should('eq', 200)
        //////

        cy.route('PUT', '/api/v1/user/UpdateUserPassword').as('changepassword')

        cy.fixture('changePasswordDetailsCaseLog').then((user) => {
            changePassword.changePasswordInput().click()
            cy.contains('Change Password').should('be.visible')
            changePassword.oldPasswordInput().type(user.notMatchPassword)
            changePassword.newPasswordInput().type(user.newPassword)
            changePassword.newPasswordInput().type(user.confirmPassword)
            changePassword.changePasswordButton().should('be.visible').click()
            cy.contains('Old password doesn’t match the current password').should('be.visible')
            changePassword.okButton().click()

        })
        cy.wait('@changepassword').its('status').should('eq', 200)// Should be 605 
    })
}) 
