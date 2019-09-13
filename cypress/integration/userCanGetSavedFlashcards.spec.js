describe('User can get saved flashcards', () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/decks',
      response: 'fixture:flashcards.json',
      status: 200
    });

    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/saved_flashcards/?status=red',
      response: 'fixture:saved_flashcards.json',
      status: 200
    });

    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/saved_flashcards/?status=yellow',
      response: 'fixture:yellow_saved_flashcards.json',
      status: 200
    });
    cy.user_successful_login('julie@dash.com', 'password');
  });

  it('Chooses to see flashcards with status red', () => {

    cy.get('#my-flashcards-button').click()
    cy.get('#saved_id_1').within(() => {
      cy.get('#category_red').contains('red collection');
      cy.get('#saved_question_1').contains('var s = String; typeof s will be what?');
      cy.get('#saved_answer_1').contains("function");
    })
    cy.get('#previous_card').click()
    cy.get('#saved_id_7').within(() => {
      cy.get('#category_red').contains('red collection');
      cy.get('#saved_question_7').contains('How could you get today’s day (e.g. “Monday”) from the date object?');
      cy.get('#saved_answer_7').contains("You need to make an array with Sunday at 0 index and Saturday at 7 index. Then use getDay() and find the day using your array.");
    })
  });

  it('Can switch to yellow collection', () => {
    cy.get('#my-flashcards-button').click()
    cy.get('#change_collection').click()
    cy.get('#saved_id_1').within(() => {
      cy.get('#category_yellow').contains('yellow collection');
      cy.get('#saved_question_1').contains('How do you access the function you are in (e.g. for a factorial)?');
      cy.get('#saved_answer_1').contains("function");
    })

    cy.get('#next_card').click()
    cy.get('#saved_id_2').within(() => {
      cy.get('#category_yellow').contains('yellow collection');
      cy.get('#saved_question_2').contains('What does a for ... in loop do and what does it look like?');
      cy.get('#saved_answer_2').contains('for (var prop in obj)');
    })

  });
});