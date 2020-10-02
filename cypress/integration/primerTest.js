describe("Titulo", function () {
  var a = 1 + 1;
  var b = 2;
  //funcion que contiene todos los casos de prueba a crear
  it("Descripcion de CP, tiene que quedar claro", function () {
    //en esta funcion ponemos la prueba en si misma
    expect(a == b).to.equal(true);
  });
  it("Vamos a probar una resta", () => {
    expect(a - b).to.equal(0);
  });
});
