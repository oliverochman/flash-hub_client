describe('Visitor can navigate the site', () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/decks',
      response: 'fixture:flashcards.json',
      status: 200
    });
    cy.visit('http://localhost:3001');
  });

  it('Contains a navigation bar', () => {
    cy.get('.navbar').should('be.visible')
    .contains('Categories')
    .contains('Login')
    .contains('Signup')
  });

  it('Displays categories upon clicking on "Categories"', () => {
    cy.get('#categories').click().should('contains')
  });
});