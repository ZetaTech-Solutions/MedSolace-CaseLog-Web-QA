import Education from '../../../../pageObjects/education'
import Login from '../../../../pageObjects/loginCaseLog'
import Profile from '../../../../pageObjects/profile'

describe('Add Education Invalid', function () {
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
                
                educationn.InstitutionInput().type(user.institutionInputInvalid)   
                educationn.SpecialityInput().type(user.specialityInputInvalid)
                educationn.AddressInput().type(user.addressInputInvalid)
                educationn.StartDateInput().type(user.startDateInputInvalid)
                educationn.IcurrentlyworkinthisroleCheckBox().click()
                
                educationn.contains(user.ErrorIndictors);
            })
        })
    })
})
