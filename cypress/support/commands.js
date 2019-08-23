// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("login", ( email, password ) => { 

    cy.get('input[type=email]').type(email);
    cy.get('input[type=password]').type(password);

    
 });
 Cypress.Commands.add("submit", () => {
    cy.get('button[type=submit]').click()
 });
 Cypress.Commands.add("clearLogin", ( email, password ) => { 

    cy.get('input[type=email]').clear();
    cy.get('input[type=password]').clear();

 });


 Cypress.Commands.add('clickLink', (text) => {
    cy.get('a').contains(text).click()
 });

 Cypress.Commands.add('expectMenuToContain', (element, array) => {

    if(array.length) {
        array.forEach(el => {
            cy.get(element).contains(el);
        });
    }
 });
 Cypress.Commands.add('expectInputsOfName', (names) => {
     if(names.length) {
         names.forEach(name => {
             cy.get(`input[name=${name}]`).should('exist');
         })
     }
 });
 Cypress.Commands.add('changePassword', (current, newpass, repeat) => {
    cy.get('input[name=currentPassword]').type(current);
    cy.get('input[name=newPassword]').type(newpass);
    cy.get('input[name=newPasswordConfirm]').type(repeat);

 });
Cypress.Commands.add('expectBalanceToBe', (element, expectedBalance) => {
    cy.get(element).contains(expectedBalance);
});
 Cypress.Commands.add('openSettings', (element) => {
    cy.get('.account-button').get('.account-button-dropdown-container').contains(element).click( { force: true });
 });
Cypress.Commands.add('navigateTo', (element) => {
    cy.get('.header-products-nav').contains(element).click();
});
 Cypress.Commands.add('clickButton', (buttonText) => {
     cy.get('button').contains(buttonText).click()
 });

 Cypress.Commands.add('logOut', () => {
    cy.get('.account-button-dropdown-container').contains('Logi välja').click( { force: true });
 });


 Cypress.Commands.add('enterRandomImage', () => {
    const MAX_NUMBER = 4;
    const ImageArray = [
        'https://cdn.pixabay.com/photo/2019/07/20/11/59/butterfly-4350670__340.jpg',
        'https://cdn.pixabay.com/photo/2019/07/21/18/15/rocks-4353305__340.jpg',
        'https://cdn.pixabay.com/photo/2019/07/19/09/30/buzzard-4348336__340.jpg',
        'https://cdn.pixabay.com/photo/2019/07/20/22/31/landscape-4351663__340.jpg',
        'https://cdn.pixabay.com/photo/2019/07/20/11/59/cosmea-4350669__340.jpg'
    ];
    let randomImage = ImageArray[Math.floor(Math.random() * Math.floor(MAX_NUMBER))];

    cy.get('')
                .clear().type(randomImage);

 })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
