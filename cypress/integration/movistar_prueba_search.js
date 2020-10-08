/// <reference types="Cypress" />

import searchPhonePage from "../support/pages/searchPhone";
import filterPage from "../support/pages/filters";

describe("Casos de prueba para probar el buscador", () => {
  beforeEach(() => {
    cy.visit("https://tienda.movistar.com.ar");
  });

  //Ojo, estoy capturando solo la primer pagina de resultados. Ver como iterar en el resto de paginas, si las tiene.

  const phone = ["Moto G8", "moto g8", "MOTO G8", "nokia", "one fusion"];

  for (let i = 0; i < phone.length; i++) {
    it(`Buscar ${phone[i]}`, () => {
      searchPhonePage.searchAll(phone[i]);
      cy.screenshot(`${phone[i]}`);
    });
  }
});
