describe("Search test cases", () => {
  it("Search with results", () => {
    cy.visit("http://automationpractice.com/index.php"); // voy a la pagina
    cy.get("#search_query_top").type("dress"); //obtengo el input y tipeo
    cy.get("#searchbox > .btn").click(); //obtengo el botón y hago click
    cy.get(".lighter").contains('"dress"'); //obtengo el texto y veo si lo contiene
  });
});
