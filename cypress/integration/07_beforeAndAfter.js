describe("Search test cases", () => {
  before(() => {
    //ejecuto todo aquello que se ejecuta antes de todas las pruebas
    cy.log("Ejecuto precondiciones a todas las pruebas");
  });

  it("Search dresses", () => {
    cy.visit("http://automationpractice.com/index.php");
    cy.get("#search_query_top").type("dress");
    cy.get("#searchbox > .btn").click();
    cy.get(".lighter").contains('"dress"');
  });
  it("Search with results", () => {
    cy.visit("http://automationpractice.com/index.php");
    cy.get("#search_query_top").type("hat");
    cy.get("#searchbox > .btn").click();
    cy.get(".lighter").contains('"hat"');
  });

  after(() => {
    //ejecuto todo aquello que se ejecuta luego de todas las pruebas
    cy.log("Ejecuto postcondiciones de las pruebas");
  });
});
