/// <reference types="Cypress" />

/* -------------------------------------------------------------------------------
- Caso 1
Visitar la tienda de Movistar (https://tienda.movistar.com.ar).
Hacer una busqueda del equipo A10S.
Luego ingresar en el equipo y verificar que indique que se puede pagar hasta en 12 cuotas.

- Caso 2
Idem caso uno pero para el equipo K40S

- Caso 3
Realizar un caso que falle en la verificación de las cuotas para un equipo distinto
a los 2 anteriores.

- Agregar 2 casos más que crean conveniente plantear y que sean diferentes a los 3 anteriores.

- Caso 6
Filtrar Samsung
ordenar x menor precio y seleccionar el 3er equipo según queden ordenados. 
Validar si tiene 32GB de memoria.

- Rehacer casos anteriores agregando Page Objects donde sea posible.
-----------------------------------------------------------------------------------
*/

import searchPhonePage from "../support/pages/searchPhone";
import filterPage from "../support/pages/filters";

describe("Bateria de casos para Escuelita Cypress 2020", () => {
  beforeEach(() => {
    cy.visit("https://tienda.movistar.com.ar");
  });

  it("Ver que el equipo A20S se pueda pagar en 12 cuotas", () => {
    searchPhonePage.search("A20S");
    searchPhonePage.installments("Hasta 12 cuotas");
  });

  it("Ver que el equipo K40S se pueda pagar en 12 cuotas", () => {
    searchPhonePage.search("K40S");
    searchPhonePage.installments("Hasta 12 cuotas");
  });

  it("Ver que el equipo A01 se pueda pagar en 12 cuotas", () => {
    searchPhonePage.search("A01");
    searchPhonePage.installments("hasta 12 cuotas"); //case sensitive
  });

  it("Que se visualice el ordenamiento de mayor a menor", () => {
    filterPage.sortFilter("Precio - mayor a menor");
  });

  it("El botón de condiciones legales del A01 debe tener la url correspondiente ", () => {
    searchPhonePage.search("A01");
    cy.get("#open-modal-installments").click();
    cy.get("#modal-installments > .modal-dialog > .modal-content > .modal-body > .link-info").should("have.attr", "href", "https://www.movistar.com.ar/legales/promociones/condiciones-financiacion");
  });

  it("ver si tercer equipo Samsung ordenado por menor precio tiene 32GB", () => {
    filterPage.modelfilter("Samsung");
    filterPage.sortFilter("Precio - menor a mayor");
    cy.get(".item.last").eq(2).click();
    cy.get("#movistar-pdp-technical-specifications-desktop").contains("Memoria interna").contains("32GB");
    cy.get("#movistar-pdp-show-attributes-table").click();
    cy.get("div").contains("Memoria Interna").next().contains("32GB");
  });
});
