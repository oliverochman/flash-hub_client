describe('User can login', () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/auth/sign_in",
      response: "fixture:user-login.json"
    });
    cy.visit('http://localhost:3001');
  });

  it('Successful login', () => {
    cy.get('#login-button').click();
    cy.get('#login-form').within(() => {
      cy.get('#email').type(email);
      cy.get('#password').type(password);
    });
    cy.get('#submit-login-form').click();
  });
});