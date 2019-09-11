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

  it('Successfully logs in', () => {
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/api/auth/sign_in',
      response: 'fixture:successful_user_login.json',
      status: 200
    });
    cy.user_login('johndoe@email.com', 'password');
  });

  it('Attempts to log in with invalid login credentials', () => {
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/api/auth/sign_in',
      response: 'fixture:unsuccessful_user_login.json',
      status: 400
    });
    cy.user_login('johndoe@email.com', 'wrong_password');
    cy.contains('Ooops! Invalid login credentials, please try again.');
  });
});