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
    });

    cy.visit('http://localhost:3001');
  });

  it('Chooses to see flashcards with status red', () => {
  
    cy.user_login('julie@dash.com', 'password');

    cy.get('#my-flashcards-button').click();

    // cy.get('#my-flashcards').within(() => {
    //   cy.get('#category_JavaScript').contains('JavaScript');
    //   cy.get('#question_3').contains('How can you include an external javascript file?');
    //   cy.get('#answer_3').contains("/script src='myfile.js'/");
    // });
  }); 
});