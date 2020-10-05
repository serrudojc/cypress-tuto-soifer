/// <reference types="Cypress" />

describe("Probando asserts", () => {
  var a = 1;

  it("igualdad", () => {
    expect(1 == 1).to.equal(true);
  });

  it("vemos q no sea una igualdad", () => {
    expect(1 == 2).to.equal(false);
  });

  it("Vemos q una resta funcione", () => {
    expect(1 - 1).to.equal(0);
  });

  it("Vemos q una resta NO funcione", () => {
    expect(1 - 1).to.not.equal(2);
  });

  it("Tiene q ser verdadero", () => {
    expect(2 == 2).to.be.true;
  });

  it("Tiene q ser falso", () => {
    expect(2 == 1).to.be.false;
  });

  it("La variable existe", () => {
    expect(a).to.exist;
  });

  it("Es menor a 10", () => {
    expect(a).to.be.lessThan(10);
  });

  it("Es mayor a 10", () => {
    expect(25).to.be.greaterThan(10);
  });
});
