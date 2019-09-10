describe('Visitor can choose decks of a specific category', () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/decks',
      response: 'fixture:flashcards_second_page.json',
      status: 200
    });

    cy.route({
      method: 'PUT',
      url: 'http://localhost:3000/api/flashcards/**',
      response: 'fixture:successful_update_flashcard_status.json',
      status: 200
    });

    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/decks',
      response: 'fixture:flashcards.json',
      status: 200
    });
    cy.visit('http://localhost:3001');
  });

  describe('Categories', () => {
    it('can be chosen by clicking category buttons', () => {
      cy.get('#category-buttons').within(() => {
        cy.get('#ruby').contains('Ruby');
        cy.get('#javascript').contains('JavaScript');
        cy.get('#commands').contains('Git Commands');
      });
    });
  });

  // describe("Visitor can get decks of 'Ruby' category only", () => {
  //   it('successfully', () => {
  //     cy.get('#ruby').click();

  //     for(let n = 0; n < 10; n ++){
  //       cy.get('#green').click()
  //       cy.wait(500)
  //     }

  //     cy.get('#get-new-deck').click();
  //     cy.get('#question_1').contains('What do you call a method with exclamation point? 2 answers.');
  //     cy.get('#answer_1').contains('Bang version of the method or unsafe method');
  //   })
  // });

  describe("Visitor can get decks of 'Ruby' category first and then change to JavaScript", () => {
    it('successfully', () => {
      cy.get('#ruby').click();

      for(let n = 0; n < 10; n ++){
        cy.get('#red').click()
        cy.wait(500)
      }

      cy.get('#javascript').click();
      cy.get('#get-new-deck').click();
      cy.get('#question_1').contains('How can you include an external javascript file?');
      cy.get('#answer_1').contains("/script src='myfile.js'/");
    })
  });
})