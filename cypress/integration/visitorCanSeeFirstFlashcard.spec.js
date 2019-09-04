describe('Visitor can see and flip first flashcard on the homepage', () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/flash_cards',
      response: 'fixture:flashcard.json',
      status: 200
    });
    cy.visit('http://localhost:3001');
  })

  it('First flash card is displayed', async () => {
    cy.get('#flashcard_1');
  });

//   let flashcard = [
//     ['#1', '#question_1', '#answer_1']
//   ]

//   flashcard.forEach(flashcard => {
//     cy.get(flashcard[0]).within(() => {
//       cy.get(flashcard[1])
//     })
//   })
// 
})
