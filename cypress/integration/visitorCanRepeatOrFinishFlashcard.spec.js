describe('A flashcard has tree buttons to repeat or finish a card', () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/decks',
      response: 'fixture:flashcards.json',
      status: 200
    });
    cy.route({
      method: 'PUT',
      url: 'http://localhost:3000/api/flashcards/**',
      response: 'fixture:successful_update_flashcard_status.json',
      status: 200
    });
    cy.visit('http://localhost:3001');
  });

  describe("Flashcard", async () => {
    it('has three status buttons', async () => {
      cy.get('.button-group').within(() => {
        cy.get('#red').contains('Repeat, please');
        cy.get('#yellow').contains('Needs more practice');
        cy.get('#green').contains('I got this!');
      });
    });
  });

  describe("Flashcard status is updated to green when clicking on 'green' button", async () => {
    it('gets next flashcard when giving a flashcard new status', () => {
      cy.get('#green').click();
      cy.get('#question_2').contains('How can you determine if something is NaN?');
      cy.get('#answer_2').contains('use isNaN() function.');
    })
  });
});