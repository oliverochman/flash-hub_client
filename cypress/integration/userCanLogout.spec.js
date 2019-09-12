describe('User can Log Out', () => {
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
    cy.user_login('julie@dash.com', 'password');
    cy.wait(2000)
  });

  it('User can successfully log out', () => {
    cy.route({
      method:'DELETE',
      url: 'http://localhost:3000/api/auth',
      response: 'fixture:successful_user_logout.json',
    })

    cy.get("#logout-button").should("exist");
    cy.get("#logout-button").click();
    cy.get("#flash").should("contain",  "You have successfully logged out.")
    cy.get("#login-button").should("exist");
  });
  
});