describe("Visitor can see and flip first flashcard on the homepage", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/flashcard",
      response: "fixture:flashcard.json"
    });
    cy.visit("http://localhost:3001");
  });

  it("First flash card is displayed", async () => {
    cy.get("#flashcard_1");
  });
})