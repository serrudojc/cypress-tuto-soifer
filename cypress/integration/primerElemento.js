describe("Elegir entre elemenos iguales, el primero", () => {
  beforeEach(() => {
    cy.visit("http://automationpractice.com/index.php");
  });

  it("Ir a la sección Women", () => {
    //tengo multiples elementos, esto no funcionaria
    //cy.get("[class=sf-with-ul]").click();

    //1ra forma: poner first()
    cy.get("[class=sf-with-ul]").first().click();
  });
});
