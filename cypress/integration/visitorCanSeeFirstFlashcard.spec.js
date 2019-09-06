describe('Visitor can see first flashcard on the homepage', () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/flashcards',
      response: 'fixture:flashcards.json',
      status: 200
    });
    cy.visit('http://localhost:3001');
  });

  it('Correct content of flashcard is visible', () => {
    cy.get('#id_1').within(() => {
      cy.get('#question_1').contains('How can you include an external javascript file?');
      cy.get('#answer_1').contains("/script src='myfile.js'/");
    });
  });
});