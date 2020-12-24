import Education from '../../../../pageObjects/education'
import Login from '../../../../pageObjects/loginCaseLog'
import Profile from '../../../../pageObjects/profile'

describe('Add Education', function () {
    const login = new Login()
    const education = new Education()
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
                education.EducationTab().click()
                education.EditIcon().click()
                
                education.InstitutionInput().clear();
                education.InstitutionInput().type(user.institutionInputInvalid)   
                education.SpecialityInput().clear();
                education.SpecialityInput().type(user.specialityInputInvalid)
                education.AddressInput().clear()
                education.AddressInput().type(user.addressInputInvalid)
                education.StartDateInput().clear()
                education.StartDateInput().type(user.startDateInputInvalid)
                education .IcurrentlyworkinthisroleCheckBox().click()
                
                cy.contains(user.ErrorIndictors);
            })
        })
    })
})
