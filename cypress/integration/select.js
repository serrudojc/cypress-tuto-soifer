describe("Select", () => {
  beforeEach(() => {
    cy.visit("http://automationpractice.com/index.php?id_category=3&controller=category");
  });

  it("Ordenar por precio mas alto", () => {
    cy.get("#selectProductSort").select("Price: Highest first");
  });
});
