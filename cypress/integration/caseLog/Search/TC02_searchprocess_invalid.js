import Login from '../../pageObjects/loginCaseLog'
import Search from '../../pageObjects/Search'

describe('search Filte invalid', function () {
    const login = new Login()
    const search = new Search()
    it('patientInfo', function(){
        cy.fixture('WebsiteUrl').then((url)=>{
            cy.server()
            cy.route('POST', '/api/v1/login').as('login')
            cy.route('GET','api/v1/users/169/procedures?page=1&page_size=25&filter=ALL&search_by=INFO&value=').as('search')
            cy.visit(url.WebsiteUrl)
        
            cy.fixture('userLoginDetailsCaseLog').then((user)=>{
                login.email().type(user.email)
                login.password().type(user.password)
                login.eyepassword().click()
                login.signInButton().click()
                cy.wait('@login').its('status').should('eq', 200)
            })
            cy.url().should('include', 'dashboard') 
        })

        cy.fixture('searchDetailsCaseLog').then((user) => {
            search.searchinput().type(user.patientInfoInputInvalid)
            search.searchbutton().click()
            search.searchFilterAll().click()
            search.searchFilterToday().click()
            search.searchFilterOnwWeek().click()
            search.searchFilteroneMonth().click()
        })
    })

    it('Institution', function(){
        cy.fixture('WebsiteUrl').then((url)=>{
            cy.server()
            cy.route('POST', '/api/v1/login').as('login')
            cy.route('GET','api/v1/users/169/procedures?page=1&page_size=25&filter=ALL&search_by=INFO&value=').as('search')
            cy.visit(url.WebsiteUrl)
        
            cy.fixture('userLoginDetailsCaseLog').then((user)=>{
                login.email().type(user.email)
                login.password().type(user.password)
                login.eyepassword().click()
                login.signInButton().click()
                cy.wait('@login').its('status').should('eq', 200)
            })
            cy.url().should('include', 'dashboard') 
        })

        cy.fixture('searchDetailsCaseLog').then((user) => {
             search.selectpatientInfobutton().click()
             search.searchinput().type(user.institutionInputInvalid)
             search.searchFilterAll().click()
             search.searchFilterToday().click()
             search.searchFilterOnwWeek().click()
             search.searchFilteroneMonth().click()
        })
    })

    it('cpt', function(){
        cy.fixture('WebsiteUrl').then((url)=>{
            cy.server()
            cy.route('POST', '/api/v1/login').as('login')
            cy.route('GET','/api/v1/users/169/procedures?page=2&page_size=25&filter=OLD&search_by=CPT&value=Cholera').as('search')
            cy.visit(url.WebsiteUrl)
        
            cy.fixture('userLoginDetailsCaseLog').then((user)=>{
                login.email().type(user.email)
                login.password().type(user.password)
                login.eyepassword().click()
                login.signInButton().click()
                cy.wait('@login').its('status').should('eq', 200)
            })
            cy.url().should('include', 'dashboard') 
        })

        cy.fixture('searchDetailsCaseLog').then((user) => {
            search.selectcptbutton().click()
            search.searchinput().type(user.cptInputInvaid)
            search.searchFilterAll().click()
            search.searchFilterToday().click()
            search.searchFilterOnwWeek().click()
            search.searchFilteroneMonth().click()
        })
    })
 })
