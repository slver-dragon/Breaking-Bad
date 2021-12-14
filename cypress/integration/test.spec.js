describe("Breaking Bad app e2e test", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });

  it("Click serfing", () => {
    cy.get('a').contains('Каталог').click();
    cy.get('[href="/person/2"]').click();
    cy.get('a').contains('Назад в Каталог').click();
    cy.get('#PutListFormat').click();
    cy.get('input').type('Walter');
    cy.get('#Search').click();
    cy.get('#Clear').click();
    cy.get('[href="/"]').click();
  });

  it("Change count element & number page", () => {
    cy.get('a').contains('Каталог').click();
    cy.get('span#CountElement:nth-child(2)').click();
    cy.get('span#CurrentPage:nth-child(3)').click();
    cy.get('span#MultiDotLast').click();
    cy.get('span#MultiDotFirst').click();
    cy.get('span:nth-child(7)').click();
    cy.get('span#StartPage:nth-child(2)').click();
  });
});
