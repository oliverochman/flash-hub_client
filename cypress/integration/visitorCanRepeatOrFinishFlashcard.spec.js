describe('A flashcard has tree buttons to repeat or finish a card', () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/flashcards',
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

  describe("Returns to initial flashcard when visitor completes all flashcards", async () => {
    it('successfully', () => {
      for(let n = 0; n < 9; n ++){
        cy.get('#green').click()
      }
      cy.get('#green').click();
      cy.get('#question_1').contains('How can you include an external javascript file?');
      cy.get('#answer_1').contains("/script src='myfile.js'/");
    })
  });
});