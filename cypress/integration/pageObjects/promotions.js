class promotions {

    homePage() {

        return cy.get('div.ng-star-inserted > [data-testid=home_link]')

    }


    aboutUsPage() {

        return cy.get('div.ng-star-inserted > [data-testid=about_link]')

    }

    contactUsPage() {

        return cy.get('div.ng-star-inserted > [data-testid=contact_us_link]')

    }

    darkMood() {

        return cy.get('[data-testid="switch_theme_button"]')

    }

    facebookLink() {

        return cy.get('[data-testid="facebook_link"]')

    }

    linkedInLink() {

        return cy.get('[data-testid="linkedin_link"]')

    }

}
export default promotions
