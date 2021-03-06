import Education from '../../../../pageObjects/education'
import Login from '../../../../pageObjects/loginCaseLog'
import Profile from '../../../../pageObjects/profile'

describe('Edit Education', function () {
    const login = new Login()
    const education = new Education()
    const profile = new Profile()
   
    it('Profile Information', function () {
        cy.fixture('WebsiteUrl').then((url)=>{
            cy.server()
            cy.route('POST', '/api/v1/user/Login').as('login')
            cy.visit(url.WebsiteUrl)
            cy.fixture('userLoginDetailsCaseLog').then((user) => {
                cy.contains("Welcome back!").should('be.visible')
                login.email().type(user.email)
                login.password().type(user.password)
                login.signInButton().click()
            })

            profile.profileicon().click()
            cy.url().should('include', 'profile')
            cy.fixture('educationDetailsCaseLog').then((user) => {
                education.EducationTab().click()
                education.EditIcon().click()
                
                education.InstitutionInput().clear();
                education.InstitutionInput().type(user.institutionInput)   
                education.SpecialityInput().clear();
                education.SpecialityInput().type(user.specialityInput)
                education.AddressInput().clear()
                education.AddressInput().type(user.addressInput)
                education.StartDateInput().clear()
                education.StartDateInput().type(user.startDateInput)
                
                education.SaveButton()
            })
        })
    })
})
