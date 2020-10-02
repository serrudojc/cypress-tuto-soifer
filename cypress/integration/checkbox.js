describe("Checkboxes", () => {
  beforeEach(() => {
    cy.visit("http://automationpractice.com/index.php?id_category=3&controller=category");
  });

  it("Large Tops search", () => {
    cy.get("#layered_category_4").check();
    cy.get("#layered_id_attribute_group_3").check();

    //pruebas

    cy.get("#layered_id_attribute_group_3").uncheck();
  });
});
