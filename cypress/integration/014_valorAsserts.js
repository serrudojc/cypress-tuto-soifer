/// <reference types="Cypress" />

describe("Probando asserts", () => {
  var a = 1;

  it("igualdad", () => {
    expect(1 == 2, "Ambos terminos deben ser iguales").to.equal(true);
  });

  it("vemos q no sea una igualdad", () => {
    expect(1 == 2).to.equal(false);
  });

  it("Vemos q una resta funcione", () => {
    expect(1 - 5, "Aqui se espera un cero").to.equal(0);
  });
});
