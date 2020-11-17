import Login from '../pageObjectsCaseLog/loginCaseLog'

describe('Login invalid', function () {
    const login = new Login()
// Log in invalid inputs
    it('Sign in with invalid data', function () {

        cy.visit('http://s2cript.azurewebsites.net/')
        login.signInButton().should('be.visible').click()
        cy.fixture('userLoginDetailsCaseLog').then((user) => {
            cy.contains("Welcome back!").should('be.visible')
            login.email().type(user.invalidEmail)
            login.password().click()
            login.signInButton().eq(1).should('be.visible').click()
            cy.contains('Please enter a valid email').should('be.visible')
            cy.contains('This feild is required').should('be.visible')
        })

        // invalid email + valid password //

        cy.fixture('userLoginDetailsCaseLog').then((user) => {
            login.email().clear().type(user.unUsedEmail)
            login.password().clear().type(user.password)
            login.signInButton().eq(1).should('be.visible').click()
            cy.contains('The user name or password you entered is incorrect! Please try again.').should('be.visible')


        })

        // valid email + invalid password
        cy.fixture('userLoginDetailsCaseLog').then((user) => {
            login.email().clear().type(user.email)
            login.password().clear().type(user.invalidPassword)
            login.signInButton().eq(1).should('be.visible').click()
            cy.contains('The user name or password you entered is incorrect! Please try again.').should('be.visible')
        })


        // invalid email + invalid password
        cy.fixture('userLoginDetailsCaseLog').then((user) => {
            login.email().clear().type(user.unUsedEmail)
            login.password().clear().type(user.invalidPassword)
            login.signInButton().eq(1).should('be.visible').click()
            cy.contains('The user name or password you entered is incorrect! Please try again.').should('be.visible')
        })


        // mobile email + password
        cy.fixture('userLoginDetailsCaseLog').then((user) => {
            login.email().clear().type(user.mobileEmail)
            login.password().clear().type(user.mobilePassword)
            login.signInButton().eq(1).should('be.visible').click()
            cy.contains('The user name or password you entered is incorrect! Please try again.').should('be.visible')
        })



        // unActive user distributer
        cy.fixture('userLoginDetailsCaseLog').then((user) => {
            login.email().clear().type(user.unActiveDistributer)
            login.password().clear().type(user.unActiveDistPassword)
            login.signInButton().eq(1).should('be.visible').click()
            cy.contains('The user name or password you entered is incorrect! Please try again.').should('be.visible')
        })


        // unActive user manufacturer
        cy.fixture('userLoginDetailsCaseLog').then((user) => {
            login.signInButton().eq(1).should('be.visible').click()
            login.email().clear().type(user.unActiveManufacturer)
            login.password().clear().type(user.unActiveManuPassword)
            login.signInButton().eq(1).should('be.visible').click()
            cy.contains('The user name or password you entered is incorrect! Please try again.').should('be.visible')
        })


        // unActive user representative
        cy.fixture('userLoginDetailsCaseLog').then((user) => {
            login.signInButton().eq(1).should('be.visible').click()
            login.email().clear().type(user.unActiveRepresentative)
            login.password().clear().type(user.mobilePassword)
            login.signInButton().eq(1).should('be.visible').click()
            cy.contains('The user name or password you entered is incorrect! Please try again.').should('be.visible')
        })

    })

})





