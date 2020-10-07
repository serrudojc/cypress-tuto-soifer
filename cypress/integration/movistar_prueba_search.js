/// <reference types="Cypress" />

import searchPhonePage from "../support/pages/searchPhone";
import filterPage from "../support/pages/filters";

describe("Casos de prueba para probar el buscador", () => {
  beforeEach(() => {
    cy.visit("https://tienda.movistar.com.ar");
  });

  //Ojo, estoy capturando solo la primer pagina de resultados. Ver como iterar en el resto de paginas, si las tiene.

  it("Buscar Moto G8", () => {
    searchPhonePage.searchAll("Moto G8");
    cy.screenshot("Moto G8");
  });

  it("Buscar moto g8", () => {
    searchPhonePage.searchAll("moto g8");
    cy.screenshot("moto g8");
  });

  it("Buscar MOTO G8", () => {
    searchPhonePage.searchAll("MOTO G8");
    cy.screenshot("MOTO G8");
  });

  it("Buscar equipos nokia", () => {
    searchPhonePage.searchAll("nokia");
    cy.screenshot("nokia");
  });

  it("Buscar one fusion", () => {
    searchPhonePage.searchAll("one fusion");
    cy.screenshot("one prime");
  });
});
