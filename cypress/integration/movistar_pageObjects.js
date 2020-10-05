/// <reference types="Cypress" />

/*
Caso 1
Visitar la tienda de Movistar (https://tienda.movistar.com.ar).
Hacer una busqueda del equipo A10S.
Luego ingresar en el equipo y verificar que indique que se puede pagar hasta en 12 cuotas.

Caso 2
Idem caso uno pero para el equipo K40S

Caso 3
Realizar un caso que falle en la verificación de las cuotas para un equipo distinto a 
los 2 anteriores.

Agregar 2 casos más que crean conveniente plantear y que sean diferentes a los 3 anteriores.
*/

describe("Bateria de casos para Escuelita Cypress 2020", () => {
  beforeEach(() => {
    cy.visit("https://tienda.movistar.com.ar");
  });

  it("Ver que el equipo A20S se pueda pagar en 12 cuotas", () => {
    cy.get(".waves-effect.dnavigation__search-button.js-desktop-search-button").click();
    cy.get("#myInput").type("A10S").type("{enter}");
    cy.get(".button").click();
    cy.get('.price-installments > [display="inline"]').contains("Hasta 12 cuotas sin interés");
    cy.get(".details > ul > :nth-child(2)").contains("Hasta 12 cuotas sin interés");
  });

  it("Ver que el equipo K40S se pueda pagar en 12 cuotas", () => {
    cy.get(".waves-effect.dnavigation__search-button.js-desktop-search-button").click();
    cy.get("#myInput").type("K40S").type("{enter}");
    cy.get(".button").click();
    cy.get('.price-installments > [display="inline"]').contains("Hasta 12 cuotas");
    cy.get(".details > ul > :nth-child(2)").contains("Hasta 12 cuotas sin interés");
  });

  it("Ver que el equipo A01 se pueda pagar en 12 cuotas", () => {
    cy.get(".waves-effect.dnavigation__search-button.js-desktop-search-button").click();
    cy.get("#myInput").type("A01").type("{enter}");
    cy.get(".button").click();
    cy.get('.price-installments > [display="inline"]').contains("hasta 12 cuotas"); //case sensitive
    cy.get(".details > ul > :nth-child(2)").contains("Hasta 12 cuotas sin interés");
  });

  it("Que se visualice el ordenamiento de mayor a menor", () => {
    cy.get("#btn-sort").click();
    cy.get("#filter-search-bar>.toolbar>.sorter>.btn-group>.dropdown-menu>:nth-child(2)>a>span").click();
  });

  it("El botón de condiciones legales del A01 debe tener la url correspondiente ", () => {
    cy.get(".waves-effect.dnavigation__search-button.js-desktop-search-button").click();
    cy.get("#myInput").type("A01").type("{enter}");
    cy.get(".button").click();
    cy.get("#open-modal-installments").click();
    cy.get("#modal-installments > .modal-dialog > .modal-content > .modal-body > .link-info").should("have.attr", "href", "https://www.movistar.com.ar/legales/promociones/condiciones-financiacion");
  });
});
