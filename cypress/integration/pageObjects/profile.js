class profile {

    profileicon(){

    }

    clickImage() {
        return cy.get('.profile-image')
    }

    addImage() {
        return cy.get('[data-testid="add_profile_image_button"]')
    }

    saveImage(){  
        return cy.get('.mat-button-wrapper').eq(2).contains("Save") 
    }
    
    firstNameInput() {
        return cy.get('[data-testid="profile_first_name"]')
    }

    lastNameInput() {
        return cy.get('[data-testid="profile_last_name"]')
    }

    categoryInput() {
          return cy.get('[data-testid="profile_title"]')
    }

    npiInput() {
        return cy.get('[data-testid="profile_title"]')
    }

    phoneNumberInput() {
        return cy.get('[data-testid="profile_phone"]')
    }
   

    emailInput() {
        return cy.get('[data-testid="profile_email"]')
    }

    saveButton() {
        return cy.get('[data-testid="profile_save_button"]')
    }

}
export default profile
