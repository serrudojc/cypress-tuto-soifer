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
03_busquedas.js

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
04_searchElementWithGet.js

Distintas formas de encontrar un elemento

*/

//---------------------------------------------------------------

/*
Video 5: Encadenando comandos
05_concatenarComandos.js

*/

//---------------------------------------------------------------

/*
Video 7: Before and After
07_beforeAndAfter.js

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
08_beforeEachAndAfterEach.js

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
09_checkbox.js
*/

//----------------------------------------------------------------

/*
Video 10: Select
010_select.js
*/

//----------------------------------------------------------------

/*
Video 11: Primero de la lista
011_primerElememto.js
Tengo varios elementos iguales, pero quiero el primero
Elementos con igual locator

usar first()
*/

//----------------------------------------------------------------

/*
Video 12: Seleccionando cualquier elemento
012_cualquierElememto.js

podemos ver si es un array y tomar el indice 

.eq() nos busca el indice con el q queremos interactuar

*/

//----------------------------------------------------------------

/*
Video 13: Asserts
013_asserts.js


*/

//----------------------------------------------------------------

/*
Video 14: Agregando valor a los asserts
014_valorAsserts.js

agrego segundo argumento a expect con una explicacion del fallo

*/

//----------------------------------------------------------------

/*
Video 15: headless

NO SIEMPRE tenemos un entorno gráfico.
Integracion continua, CI, CD
mas rapido

Ir a la consola y tipear node_modules\.bin\cypress run

harcelo cuando no estamos trabajando
*/

//-----------------------------------------------------------------

/*
Video 16: Page Objects
016_pageObjects.js
Cypress recomienda no usar page objects

Page Object. Mientras ejecuto mis pruebas, la interaccion con la web y la busqueda 
de elementos, se hace dentro de la prueba. Se puede repetir funcionaldades.
Pueden haber cambios, puede cambiar el locator y tengo q modificar todo.
Entones se puede hacer separar en otras clases las paginas de nuestro sistema, y en esa clase por cada 
pagina vamos a poner los elementos y sus interacciones, logrando:
No repetir codigo
Cualquier cambio lo hago en un solo lugar
modularidad
Le quito a la prueba la responsabilidad de busqueda, se la doy al Page Object


En /support creo una nueva carpeta /pages
Creamos un index.js
Aca creamos la clase indexPage ponemos al final Page para saber q es un page object
creamos un constructor y dentro creamos los elementos q tengo en la pagina q estan
en los casos de prueba

Creamos metodos que son las interacciones

exportamos de index.js y luego importamos en 016_pageObjects.js

Los asserts no van en page object, pero para probar lo hacemos
Creamos un nuevo archivo en /pages , pq estamos buscando una nueva pagina, donde estan los
articulos, la llamamos articles.js

ahora la prueba tiene la responsabilidad de llamar a los page object a q ejecuten cosas.
Los page object tienen la responsabilidad de tener los elementos e interactuar con ellos.

*/

//-----------------------------------------------------------------

/*
Video 17: Intro custom commands
017_introCustomCommands.js

Cypress no recomienda page objects
Podemos crear nuestros propios comandos
Si necesito una funcion recurrente, puedo crear crear en cypress una funcios.

Los podemos escribir en /support/commands.js

Supongamos que queremos un formato especial para ciertos logs
*/
Cypress.Commands.add("logSpecFormat", (textToLog) => {
  cy.log("====" + textToLog + "====");
});

//--------------------------------------------------------------------

/*

*/
