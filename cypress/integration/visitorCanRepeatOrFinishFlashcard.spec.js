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

  describe("Flashcard status is updated when clicking on 'red' button", async () => {
    beforeEach(() => {
      cy.server();
      cy.request({
        method: 'PUT',
        url: 'http://localhost:3000api/flashcards',
        response: 'fixture:flashcards.json',
        status: 200,
        headers: {
          'id': 1
        }
      });
      cy.visit('http://localhost:3001');
    });

    it('updates flashcard status successfully by returning a new flashcard', () => {
      cy.get('.button').find('#red').contains('Repeat, please').click(() => {
        expect('.flashcard').to.not.equal('#id_1')
      })
    });
  });


  // This commented out test actually give a false green

  // describe("Flashcard status is updated when clicking on 'red' button", async () => {
  //   it('updates flashcard status successfully by returning a new flashcard', () => {
  //     beforeEach(() => {
  //       cy.server();
  //       cy.request({
  //         method: 'PUT',
  //         url: 'http://localhost:3000api/flashcards/"+"#{flashcard.id}',
  //         response: 'fixture:flashcards.json',
  //         status: 200,
  //         headers: {
  //           'id': 1
  //         }
  //       });
  //       cy.visit('http://localhost:3001');
  //       cy.get('.button').find('#red').contains('Repeat, please').click(() => {
  //         expect('.flashcard').to.not.equal('#id_1')
  //       })
  //     });
  //   });
  // });
})
