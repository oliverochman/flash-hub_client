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

  it('has three status buttons', () => {
    cy.get('.button').contains('#red')
    cy.get('.button').contains('#yellow')
    cy.get('.button').contains('#green')
  });
  
  it('', () =>{
      
  });
  
})