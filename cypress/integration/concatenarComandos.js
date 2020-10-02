describe("Escribir en busqueda varios strins", () => {
  it("Escribir y limpiar, ejemplo concatenacion", () => {
    cy.visit("http://automationpractice.com/index.php");

    cy.get("#search_query_top").clear().type("vamos a concatenar").clear().type("metodos concatenados");
  });
});
