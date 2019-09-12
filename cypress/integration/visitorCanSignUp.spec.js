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
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/api/auth',
      response: 'fixture:successful_signup.json',
      status: 200
    });
    cy.visitor_signup('julie@dash.com', 'password', 'password');
    // cy.get('#submit-signup-form').click();
  });
});