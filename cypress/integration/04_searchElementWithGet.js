describe("Formas de encontrar elementos", () => {
  it("Busquedas", () => {
    cy.visit("http://automationpractice.com/index.php");

    //busqueda por clase (reemplazar espacios por puntos. Acordarse que clases empiezan con .)
    cy.get(".search_query.form-control.ac_input");

    //Busqueda por id
    cy.get("#search_query_top").type("busco por id");

    //Busqueda por cualquier propiedad
    cy.get('[name="search_query"]').type("busco por propiedad name");

    //borro lo que estaba escrito en el elemento
    cy.get('[placeholder="Search"]').clear();
  });
});
