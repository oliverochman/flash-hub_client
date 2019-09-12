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
      method: 'POST',
      url: 'http://localhost:3000/api/auth/sign_in',
      response: 'fixture:successful_user_login.json',
      status: 200
    })
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/saved_flashcards',
      response: 'fixture:saved_flashcards.json',
      status: 200
    });
    cy.visit('http://localhost:3001');
    cy.user_login('julie@dash.com', 'password');
  });

  it('Chooses to see flashcards with status red', () => {

    cy.get('#my-flashcards-button').click()
    cy.get('#my-flashcards').within(() => {
      cy.get('#category_JavaScript').contains('JavaScript');
      cy.get('#saved_question_1').contains('How can you include an external javascript file?');
      cy.get('#saved_answer_1').contains("/script src='myfile.js'/");
    })
  });
});