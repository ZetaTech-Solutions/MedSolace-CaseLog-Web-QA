import profile from '../pageObjectsCaseLog/profile'
import Login from '../pageObjectsCaseLog/loginCaseLog'


describe('Profile', function () {
    const profileInfo = new profile()
    const login = new Login()
    const image = 'imageTest.png'
   
    it('Profile Information', function () {
      cy.server()
      cy.route('POST', '/api/v1/user/Login').as('login')
      cy.route('PUT', '/api/v1/user/UpdateUser').as('updateuser')
        cy.visit('http://s2cript.azurewebsites.net/')

        cy.fixture('userLoginDetailsCaseLog').then((user) => {
            login.signInButton().should('be.visible').click()
            login.email().type(user.email)
            login.password().type(user.password)
            login.signInButton().eq(1).should('be.visible').click()
            cy.wait('@login').its('status').should('eq', 200)
            cy.wait(1000)
            cy.url().should('include', 'dashboard')})
            cy.get('[data-testid=profile_button]').should('be.visible').click()
            cy.url().should('include', 'profile')
        cy.fixture('profileDetailsCaseLog').then((user) => {
     
            profileInfo.clickImage().click()
            profileInfo.addImage().attachFile(image)
            profileInfo.saveImage().click()
            cy.wait(3000)
            profileInfo.firstNameInput().clear().type(user.firstNameInput)
            profileInfo.categoryInput().type(user.category)
            profileInfo.lastNameInput().clear().type(user.lastNameInput)
            profileInfo.npiInput().clear().type(user.npi)
            profileInfo.emailInput().clear().type(user.email)
            profileInfo.phoneNumberInput().clear().type(user.phoneNumberInput)
            profileInfo.saveButton().should('be.visible').click()
            cy.get('.alert-container > .mat-focus-indicator').should('be.visible').click()

        })
        cy.wait('@updateuser').its('status').should('eq', 200)
    })
})
