describe('A flashcard has tree buttons to repeat or finish a card', () => {
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

  it('has three status buttons', async () => {
    cy.get('.button-group').within(() => {
      cy.get('#red').contains('Repeat, please');
      cy.get('#yellow').contains('Needs more practice');
      cy.get('#green').contains('I got this!');
    });
  });

  describe("Flashcard status is updated to green when clicking on 'green' button", async () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: 'PUT',
        url: 'http://localhost:3000/api/flashcards/1',
        response: 'fixture:successful_update_flashcard_status.json',
        status: 200,
        headers: {
          'id': 1
        }
      });
      cy.visit('http://localhost:3001');
    });

    it('gets success message if status was updates', () => {
      cy.get('#green').click();
      cy.wait(3000)
      cy.contains('Successfully added status')
    })
  });
});
  