describe('A flashcard has a category assigned', () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/decks',
      response: 'fixture:flashcards.json',
      status: 200
    });
    cy.visit('http://localhost:3001');
  });

  it('has a category', () => {
    cy.get('#id_1').within(
      cy.get()
    )
  });
})