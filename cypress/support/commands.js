Cypress.Commands.add('user_successful_login', (email, password) => {
  cy.route({
    method: 'POST',
    url: 'http://localhost:3000/api/auth/sign_in',
    response: 'fixture:successful_user_login.json',
    status: 200
  });
  cy.visit('http://localhost:3001');
  cy.get('#login-button').click();
  cy.get('#login-form').within(() => {
    cy.get('#email').type(email);
    cy.get('#password').type(password);
  });
  cy.get('#submit-login-form').click();
});

Cypress.Commands.add('user_unsuccessful_login', (email, password) => {
  cy.route({
    method: 'POST',
    url: 'http://localhost:3000/api/auth/sign_in',
    response: 'fixture:unsuccessful_user_login.json',
    status: 422
  });
  cy.visit('http://localhost:3001');
  cy.get('#login-button').click();
  cy.get('#login-form').within(() => {
    cy.get('#email').type(email);
    cy.get('#password').type(password);
  });
  cy.get('#submit-login-form').click();
});

Cypress.Commands.add('successful_signup', (email, password, password_confirmation) => {
  cy.route({
    method: 'POST',
    url: 'http://localhost:3000/api/auth',
    response: 'fixture:successful_signup.json',
    status: 200
  });
  cy.visit("http://localhost:3001");
  cy.get('#signup-button').click();
  cy.get('#signup-form').within(() => {
    cy.get('input[id="email"]').type(email);
    cy.get('input[id="password"]').type(password);
    cy.get('input[id="password_confirmation"]').type(password_confirmation);
  });
});

Cypress.Commands.add('unsuccessful_signup', (email, password) => {
  cy.route({
    method: 'POST',
    url: 'http://localhost:3000/api/auth',
    response: 'fixture:unsuccessful_signup.json',
    status: 404
  });
  cy.visit("http://localhost:3001");
  cy.get('#signup-button').click();
  cy.get('#signup-form').within(() => {
    cy.get('input[id="email"]').type(email);
    cy.get('input[id="password"]').type(password);
  });
});