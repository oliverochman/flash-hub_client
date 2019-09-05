describe('Visitor can see first flashcard on the homepage', () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/flash_cards',
      response: 'fixture:flashcards.json',
      status: 200
    });
    cy.visit('http://localhost:3001');
  })

  it('First flashcard is visible', async () => {
    cy.get('#flashcard_1');
  });

  it('Correct content of first flashcard is visible', async () => {
    cy.get('#flashcard_1').within(() => {
      cy.get('#question').contains('How can you include an external javascript file?');
      cy.get('#answer').contains("/script src='myfile.js'/");
    });
  });
})
