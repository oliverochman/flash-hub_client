describe('Visitor can choose to repeat the deck or get a new deck', () => {
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

  describe('Visitor can choose to get a new deck of cards after finishing a deck', () => {
    it('successfully', () => {
      for(let n = 0; n < 10; n ++){
        cy.get('#green').click()
      }

      cy.get('#get-new-deck').click()
    })
  });

  describe('Visitor can choose to repeat the same deck after finishing it', () => {
    it('successfully', () => {
      for(let n = 0; n < 10; n ++){
        cy.get('#green').click()
      }

      cy.get('#repeat-deck').click()
    })
  })
});