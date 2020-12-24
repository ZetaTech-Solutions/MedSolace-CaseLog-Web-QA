import Education from '../../../../pageObjects/education'
import Login from '../../../../pageObjects/loginCaseLog'
import Profile from '../../../../pageObjects/profile'

describe('Add Education', function () {
    const login = new Login()
    const educationn = new Education()
    const profile = new Profile()
   
    it('Profile Information', function () {
        cy.fixture('WebsiteUrl').then((url)=>{
            cy.server()
            cy.route('POST', '/api/v1/user/Login').as('login')
            cy.visit(url.WebsiteUrl)
            cy.fixture('educationDetailsCaseLog').then((user) => {
                cy.contains("Welcome back!").should('be.visible')
                login.email().type(user.email)
                login.password().type(user.password)
                login.signInButton().click()
            })

            profile.profileicon().click()
            cy.url().should('include', 'profile')
            cy.fixture('currentPositionDetailsCaseLog').then((user) => {
                educationn.EducationTab().click()
                educationn.Addicon().click()
                
                educationn.InstitutionInput().type(user.institutionInput)   
                educationn.SpecialityInput().type(user.specialityInput)
                educationn.AddressInput().type(user.addressInput)
                educationn.StartDateInput().type(user.startDateInput)
                educationn.IcurrentlyworkinthisroleCheckBox().click()
                
                educationn.SaveButton()
            })
        })
    })
})
