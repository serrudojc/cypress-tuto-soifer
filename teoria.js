/*
Video 1

Instalacion de Cypress
npm install --save-dev cypress



Averiguar luego si se instala en cada proyecto o si luego se puede llamar con algun comando
O si todo se hace desde aca (las pruebas de diferentes proyectos)

Averiguar el tema de ignore files, que ignorar, que no, compartir pruebas



desde la ubicacion del proyecto
.\node_modules\.bin\cypress open

*/

//---------------------------------------------------------------
/*
Video 2

en cypress/integration/
agrego nuestros test

Siempre que quiera hacer Un GRUPO de casos de prueba lo hago con describe

describe('nombre de CP')

*/
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

//---------------------------------------------------------------

/*
Video 3: Se va probar busquedas
busquedas.js

1º se crea grupo de pruebas un describe. Primer parametro pq agrupamos, segundo paramtro
 una funcion contenedor de las pruebas
2º la funcion contiene varios it, que tiene como 1er parametro el nobre de la prueba, el segundo
parametro la funcion
3º 
cy.visit    a donde quiero ir
cy.get     es el findElement obtengo elemento HTML
type        el texto a buscar
click       hacemos click
contains    el elemento tiene que contener esto

*/

//---------------------------------------------------------------

/*
Video 4: Buscando elementos con get
searchElementWithGet.js

Distintas formas de encontrar un elemento

*/

//---------------------------------------------------------------

/*
Video 5: Encadenando comandos
concatenarComandos.js

*/

//---------------------------------------------------------------

/*
Video 7: Before and After
beforeAndAfter.js

before(function(){
    code precondicion
})

after(function(){
    code postcondicion
})

*/

//---------------------------------------------------------------

/*
Video 8: beforeEach and afterEach
beforeEachAndAfterEach.js

Cuando ejecuto la suite que contiene el describe(), lo primero que se va ejecutar
va ser el before()

luego antes de entrar en el primer caso de prueba va ejecutar 
beforeEach(), luego hace las pruebas. Para terminar, va ejecutar afterEach()

Luego hace lo mismo con las otras pruebas

Por ultimo, va ejecutar el after, cuando no haya mas casos de prueba


*/

//----------------------------------------------------------------

/*
Video 9: Checkboxes
checkbox.js
*/

//----------------------------------------------------------------

/*
Video 10: Select
select.js
*/

//----------------------------------------------------------------

/*
Video 11: Primero de la lista
primerElememto.js
Tengo varios elementos iguales, pero quiero el primero
Elementos con igual locator

usar first()
*/

//----------------------------------------------------------------

/*
Video 12: Seleccionand cualquier elemento
cualquierElememto.js

podemos ver si es un array y tomar el indice 

.eq()

*/
