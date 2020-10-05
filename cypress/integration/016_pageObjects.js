/// <reference types="Cypress" />

import indexPage from "../support/pages/index";
import articlesPage from "../support/pages/articles";

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
    indexPage.search("dress");
    //cy.get("#search_query_top").type("dress");
    //cy.get("#searchbox > .btn").click();
    articlesPage.verifyArticle("dress");
    //cy.get(".lighter").contains('"dress"');
  });

  it("Search hats", () => {
    indexPage.search("hat");
    //cy.get("#search_query_top").type("hat");
    //cy.get("#searchbox > .btn").click();
    articlesPage.verifyArticle("hat");
    //cy.get(".lighter").contains('"hat"');
  });
});
