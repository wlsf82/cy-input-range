Cypress._.times(11, index => {
  it(`selects ${index} out of 10`, () => {
    cy.visit('./index.html')
    cy.get('#points')
      .invoke('val', index)
      .should('have.value', index)
      .trigger('change')

    cy.contains('#range-input-value', index)
    cy.wait(500) // This is just to slow the tests a bit for demo purposes.
  })
})
