describe('Opens coolbet.ee and logs in', function()  {

    // Cypress.io starts new session every IT.
    // Therefore for this testing practise will use
    // it block as a main test init  and context for testing.

    // For actual testing practises, avoid this approach and write all tests
    // separate from eachother and start new sessions evey time.
    // adding beforeEach with a custom login method.

    /**
     * This SPEC Logs in to the coolbet site and checks if the landing view contains all 
     * the correct elements
     * Then We change the password and try to log in with old credentials
     * After getting error message that email or password is wrong
     * we log in and change the password back to default value.
     */


    it('tests coolbet.ee website' , function() {
        context('Opens Browser on coolbets site', function()  {
            // Navigates to website
            cy.visit('https://coolbet.ee');
    
            cy.url().should('eq', 'https://www.coolbet.com/et/tere-tulemast');
            cy.get('.welcome-header').should('be.visible');
            // Expect navigation toolbar to contain following options
            cy.get('.header-container').
                should('be.visible')
                .find('.header-products-nav')
                .should('contain', 'Sport')
                .should('contain', 'Kasiino')
                .should('contain', 'Pokker')
                .should('contain', 'Kampaaniad')
                .should('contain', 'Blogi');

            cy.get('.bear').should('be.visible');

            cy.get('.header-user-controls')
                .should('be.visible')
                .should('contain', 'Ava konto')
                .should('contain', 'Logi sisse')
        });

        context('Tries to log in with right credentials', function () {
            cy.get('[data-test=button-login]').click();

            cy.get('.login-form').should('be.visible')
            .should('contain', 'Tere tulemast tagasi')
            .find('.login-button');

            cy.login('reemet.paabo@gmail.com', 'Huumor123');

            cy.submit();

        });
        context('Check if logged in and view contains correct elements', function() {
            cy.get('.account-button').should('contain', 'Reemet');
            
            cy.expectMenuToContain('.header-products-nav', ['Sport', 'Kasiino', 'Pokker', 'Kampaaniad', 'Blogi']);

            cy.expectBalanceToBe('.account-balance', "0");
        });
        context('Open Settings, expect view to contain password change, change password', function() {
            cy.openSettings('Minu Konto');
            cy.get('h2').should('contain', 'Salasõna muutmine');

            cy.expectInputsOfName(['currentPassword', 'newPassword', 'newPasswordConfirm']);
            cy.changePassword('Huumor123', 'Huumor321', 'Huumor321')
            cy.clickButton('Muuda salasõna');
            cy.get('div[role=alert]').should('contain', 'Õnnestus!');
            // Log out

            cy.logOut();
            // wait for relogging to prevent 401
            cy.wait(5000);

        });
        


        // Try logging in with wrong credentials after logging out.
       context('Login with correct credentials', function () {
            cy.get('[data-test=button-login]').click();

            cy.get('.login-form').should('be.visible')
                .should('contain', 'Tere tulemast tagasi')
                .find('.login-button');
            cy.login('reemet.paabo@gmail.com', 'Huumor123');

            cy.submit();
    
            cy.get('.login-form').should('not.contain', 'Vale e-mail või salasõna');
            cy.clearLogin();
    
        
        });
        context('Login with correct credentials after password change', function () {
           
            cy.login('reemet.paabo@gmail.com', 'Huumor321');
            // wait for relogging to prevent 401
            cy.wait(5000);
            cy.submit();
            
            cy.get('.login-form').should('not.contain', 'Vale e-mail või salasõna');
    
        
        });
        context('Reset password to default', function() {
            cy.openSettings('Minu Konto');
            cy.get('h2').should('contain', 'Salasõna muutmine');

            cy.expectInputsOfName(['currentPassword', 'newPassword', 'newPasswordConfirm']);
            cy.changePassword('Huumor321', 'Huumor123', 'Huumor123')
            cy.clickButton('Muuda salasõna');
            cy.get('div[role=alert]').should('contain', 'Õnnestus!');
            // Log out

            cy.logOut();
        });
    });
    
});



/*
context('Tries to login with false password', function() {
    // Open Login page
    cy.get('.nav-link').contains('Sign in').click();

    cy.url().should('include', '/login');

    cy.get('.text-xs-center.ng-binding').should('be.visible');
    // testreel
    // Testreel123
    // testreel@testreel.com

    // Inputs should be present
    cy.get('input[type=email]').should('exist')
    cy.get('input[type=password]').should('exist')

    cy.login('testreel@testreel.com', 'wrongPassword');

    // Have to user contain.text here,because the text 
    // on the site contains /n line breakers.
    
    cy.get('.error-messages')
        .should('be.visible')
        .should('contain.text', 'email or password is invalid')
});

context('Tries to login with false email', function() {

    cy.get('.nav-link').contains('Sign in').click();

    cy.url().should('include', '/login');

    cy.get('.text-xs-center.ng-binding').should('be.visible');
    // testreel
    // Testreel123
    // testreel@testreel.com
    cy.get('input[type=email]').should('exist').clear()
    cy.get('input[type=password]').should('exist').clear()

    cy.login('testreel1@testreel.com', 'wrongPassword');

    // Have to user contain.text here,because the text 
    // on the site contains /n line breakers.
    
    cy.get('.error-messages')
        .should('be.visible')
        .should('contain.text', 'email or password is invalid')
});

context('Testing new Account link to be functional', function() {
    // Open new account creation page
    cy.clickLink('Need an account?');

    cy.url().should('include', '/register');
    // Expect the page header to be Sign Up and form to be there
    cy.get('h1').contains('Sign up');
    cy.get('form').should('exist');
});

context('Tries to create account with allready existing credentials', function() {
    
    cy.get('input[type=email]').type('testreel@testreel.com');
    cy.get('input[placeholder=Username]').type('testreel');
    cy.get('input[type=password]').type('Testreel123');

    cy.get('button[type=submit]').click();
    // Expect errors
    cy.get('.error-messages')
    .should('be.visible')
    .should('contain.text', 'email has already been taken')
    .should('contain.text', 'username has already been taken')
});

context('Logins with existing account', function() {
    
    cy.get('a').contains('Sign in').click();
    cy.url().should('include', '/login');
    cy.get('.text-xs-center.ng-binding').should('be.visible');

    cy.login('testreel@testreel.com', 'Testreel123');

});

context('Expects to be logged in and menu to be present', function() {
    cy.wait(500);
    cy.get('div .container').should('exist');
    // loop through all elements containg class nav-item and expect the following
    cy.expectMenuToContain(
        '.nav-item', 
        ['Home', 'New Article', 'Settings', 'testreel']);
});

context('Opens Settings', function() {
    // Alternative way to navigate to link.
    cy.navigateTo('Settings');

    cy.get('h1').contains('Your Settings');

    expect('form').to.exist;

});

context('Fill in settings form with SQL injection', function() {
    // SELECT user_id, username, password_hash FROM users WHERE username = 'john'
    cy.get(':nth-child(1) > .form-control')
        .clear().type("SELECT user_id, username, password_hash FROM users WHERE username = 'testreel'")

    cy.get('textarea')
        .clear().type('\'window.location.reload()\'');

    cy.get('button').contains('Update Settings').click();
});


context('Change Password', function() {
    // Switching between New Article and Settings View
    // to get the page loaded again.
    cy.navigateTo('New Article');
    cy.navigateTo('Settings');

    cy.get('input[type=password]').type('newpassword');
    // Update settings
    cy.clickButton('Update Settings');
    cy.wait(200);

});

context('Relog with new Password', function() {
    // logs out
    cy.logOut();

    cy.url().should('eq', 'http://angularjs.realworld.io/#/');

    cy.navigateTo('Sign in');
    cy.login('testreel@testreel.com', 'newpassword');
    cy.get('div .article-preview').should('exist');

});

context('reset password to default', function () {
    cy.navigateTo('New Article');
    cy.navigateTo('Settings');
    cy.get('input[type=password]').type('Testreel123');

    cy.clickButton('Update Settings');
    cy.wait(200);
});


context('set a profile image', function() {
    
    cy.navigateTo('New Article');
    cy.navigateTo('Settings');

    cy.enterRandomImage();

    cy.clickButton('Update Settings');

});

context('LogOut and End', function() {
    cy.logOut();
})
}); 
}); */