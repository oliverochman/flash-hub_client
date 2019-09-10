Cypress.Commands.add('user_login', (email, password) => {
  cy.visit('http://localhost:3001');
  cy.get('#login-button').click();
  cy.get('#login-form').within(() => {
    cy.get('#email').type(email);
    cy.get('#password').type(password);
  });
  cy.get('#submit-login-form').click();
});