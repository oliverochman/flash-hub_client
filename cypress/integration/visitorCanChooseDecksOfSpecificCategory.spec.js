describe('Visitor can choose decks of a specific category', () => {
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

  it('Displays option buttons for different categories', async () => {
    cy.get('#category-buttons').within(() => {
      cy.get('#ruby').contains('Ruby');
      cy.get('#javascript').contains('JavaScript');
      cy.get('#commands').contains('Git Commands');
    });
  });

  // it('Displays option buttons for different categories', () => {
  //   cy.get('#category').within(
  //     cy.get('#ruby').click(
  //   )
  // });
})