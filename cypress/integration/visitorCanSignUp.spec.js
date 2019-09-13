describe('Visitor can signup', () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/decks',
      response: 'fixture:flashcards.json',
      status: 200
    });
  });

  it('Successfully signs up', () => {
    cy.successful_signup('julie@dash.com', 'password', 'password');
    cy.get('#submit-signup-form').click();
  });

  it('Attempts to fill in unmatching passwords', () => {
    cy.unsuccessful_signup('julie@dash.com', 'password', 'wrong_password');
    cy.get('#submit-signup-form').click();
    cy.get('#flash').should('contain','Invalid credentials to sign up. Please try again.');
  });
});