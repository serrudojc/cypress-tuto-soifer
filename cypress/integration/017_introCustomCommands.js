/// <reference types="Cypress" />

describe("Search test cases", () => {
  before(() => {
    cy.log("Ejecuto precondiciones a todas las pruebas");
  });

  after(() => {
    cy.log("Ejecuto postcondiciones de las pruebas");
  });

  beforeEach(() => {
    cy.visit("http://automationpractice.com/index.php");
  });

  afterEach(() => {
    cy.log("Poniendo datos en su estado original");
  });

  it("Search dresses", () => {
    cy.get("#search_query_top").type("dress");
    cy.get("#searchbox > .btn").click();
    cy.log("Buscando para dress");
    cy.get(".lighter").contains('"dress"');
  });

  it("Search hats", () => {
    cy.get("#search_query_top").type("hat");
    cy.get("#searchbox > .btn").click();
    cy.logSpecFormat("Probando el log con comando propio: Buscando para hats");
    cy.get(".lighter").contains('"hat"');
  });
});
