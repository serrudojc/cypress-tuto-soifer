describe("Elegir cualquier elemento", () => {
  beforeEach(() => {
    cy.visit("http://automationpractice.com/index.php");
  });

  it("Ir a la sección Women", () => {
    cy.get("[class=sf-with-ul]").eq(0).click();
  });

  it("Ir a la sección Dresses", () => {
    //Queremos ver que elemento tomar, como es un array tomamos el indice
    cy.get("[class=sf-with-ul]").eq(3).click();
  });
});
