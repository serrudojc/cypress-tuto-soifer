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
  });

  it("Ver que el equipo K40S se pueda pagar en 12 cuotas", () => {
    cy.get(".waves-effect.dnavigation__search-button.js-desktop-search-button").click();
    cy.get("#myInput").type("K40S").type("{enter}");
    cy.get(".button").click();
    cy.get('.price-installments > [display="inline"]').contains("Hasta 12 cuotas");
  });

  //es este caso, el texto sólo dice ""
  it("Ver que el equipo A01 se pueda pagar en 12 cuotas", () => {
    cy.get(".waves-effect.dnavigation__search-button.js-desktop-search-button").click();
    cy.get("#myInput").type("A01").type("{enter}");
    cy.get(".button").click();
    cy.get('.price-installments > [display="inline"]').contains("hasta 12 cuotas"); //case sensitive
  });

  it("Que se visualice el ordenamiento de mayor a menor", () => {
    cy.get("#btn-sort>.visible-desk");
  });
});
