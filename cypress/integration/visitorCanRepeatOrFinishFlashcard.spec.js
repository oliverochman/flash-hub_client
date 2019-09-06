describe('Visitor can choose to repeat or finish flashcard', () => {
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
  
  // it('', () =>{
      
  // });
  
})