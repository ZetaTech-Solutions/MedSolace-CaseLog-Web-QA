import Experience from '../../../../pageObjects/experince'
import Login from '../../../../pageObjects/loginCaseLog'
import Profile from '../../../../pageObjects/profile'

describe('Edit Experience', function () {
    const login = new Login()
    const experience = new Experience()
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
            cy.fixture('experiancesDetailsCaseLog').then((user) => {
                experience.ExperienceTab().click()
                experience.EditIcon.click()
                
                experience.InstitutionInput().clear()
                experience.InstitutionInput().type(user.institutionInput)
                experience.SpecialityInput().clear()
                experience.SpecialityInput().type(user.specialityInput)
                experience.AddressInput().clear()
                experience.AddressInput().type(user.addressInput)
                experience.StartDateInput().clear()
                experience.StartDateInput().type(user.startDateInput)
                experience.IcurrentlyworkinthisroleCheckBox().click()
                
                experience.SaveButton()
            })
        })
    })
})
