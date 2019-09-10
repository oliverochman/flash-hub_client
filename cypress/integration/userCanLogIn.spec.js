describe('User can login', () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/decks',
      response: 'fixture:flashcards.json',
      status: 200
    });
  });

  it('Successful login', () => {
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/api/auth/sign_in',
      response: 'fixture:successful_user_login.json'
    });
    cy.user_login('johndoe@email.com', 'password');
  });
});