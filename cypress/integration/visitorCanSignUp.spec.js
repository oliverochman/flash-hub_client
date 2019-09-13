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
    cy.visitor_signup('julie@dash.com', 'password', 'password');
    cy.get('#submit-signup-form').click();
  });
});