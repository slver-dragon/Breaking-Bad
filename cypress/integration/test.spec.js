describe("Breaking Bad app e2e test", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });

  it("Click serfing", () => {
    cy.get(".style_catalog__2Tf0B").click();
    cy.get('[href="/person/2"]').click();
    cy.get(".style_backToCatalog__14kGk > .style_button__3ugsu").click();
    cy.get('#PutListFormat > .style_button__3ugsu > img').click();
    cy.get('input').type('Walter');
    cy.get('#Search > .style_button__3ugsu').click();
    cy.get('#Clear > .style_button__3ugsu > img').click();
    cy.get('[href="/"] > .style_button__3ugsu > img').click();
  });

  it("Change count element & number page", () => {
    cy.get(".style_catalog__2Tf0B").click();
    cy.get(
      ".style_elementPerPage__rEa7a > :nth-child(4) > .style_button__3ugsu > span"
    ).click();
    cy.get(
      ".style_pages__1ArFM > :nth-child(3) > .style_button__3ugsu > span"
    ).click();
    cy.get(':nth-child(7) > .style_button__3ugsu > img').click();
    cy.get('.style_pages__1ArFM > :nth-child(5) > .style_button__3ugsu > img').click();

  });

  // it("New task delete", () => {
  //   cy.get('div').contains('NewTask').siblings('div').click();
  // });
});
