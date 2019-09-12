Cypress.Commands.add('user_login', (email, password) => {
  cy.visit('http://localhost:3001');
  cy.get('#login-button').click();
  cy.get('#login-form').within(() => {
    cy.get('#email').type(email);
    cy.get('#password').type(password);
  });
  cy.get('#submit-login-form').click();
});

Cypress.Commands.add('visitor_signup', (email, password, password_confirmation) => {
  cy.visit("http://localhost:3001");
  cy.get('#signup-button').click();
  cy.get('#signup-form').within(() => {
    cy.get('input[id="email"]').type(email);
    cy.get('input[id="password"]').type(password);
    cy.get('input[id="password_confirmation"]').type(password_confirmation);
  });
  cy.get('#submit-signup-form').click();
});