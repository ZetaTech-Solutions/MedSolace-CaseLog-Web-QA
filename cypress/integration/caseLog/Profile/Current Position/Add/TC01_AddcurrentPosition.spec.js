import CurrentPostion from '../../../../pageObjects/currentPostion'
import Login from '../../../../pageObjects/loginCaseLog'
import Profile from '../../../../pageObjects/profile'

describe('Edit current position', function () {
    const login = new Login()
    const currentPostion = new CurrentPostion()
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
            cy.fixture('currentPositionDetailsCaseLog').then((user) => {
                currentPostion.CurrentPostionTab().click()
                currentPostion.Addicon().click()
                
                currentPostion.InstitutionInput().type(user.institutionInput)   
                currentPostion.SpecialityInput().type(user.specialityInput)
                currentPostion.AddressInput().type(user.addressInput)
                currentPostion.StartDateInput().type(user.startDateInput)
                currentPostion.IcurrentlyworkinthisroleCheckBox().click()
                
                currentPostion.SaveButton()
           })     
        })
   })
})
