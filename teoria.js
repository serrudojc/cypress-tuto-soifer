/*

//comentarios de un curso de Platzi

Comandos para controlar el browser

cy.visit(): para cargar una URL
cy.reload(): para recargar la URL actual
cy.go('back'): para ir hacia atrás o adelante en la navegación
Comandos para selección de elementos

cy.get('.selector'): para seleccionar según un selector html / css
cy.contains('text): para seleccionar de acuerdo al contenido
cy.contains('.selector', 'texto'): para seleccionar según el selector y el contenido
Comandos para interactuar con los elementos

cy.get('.selector').click(): para hacer click sobre un elemento
cy.get('.selector').dblclick(): para hacer dblclick sobre un elemento
cy.get('input').type(): para escribir un texto
cy.get('input').clear(): para limpiar un texto
cy.get('checkbox').check(): para marcar check
cy.get('checkbox').uncheck(): para quitar el check
cy.get('select').select('item'): para seleccionar un item en una lista desplegable
Cypress permite la encadenación de muchos de estos y otros comandos.


Cypress incluye los Hooks de acuerdo a las definiciones y casos de uso definidos por el framework de pruebas Mocha, del cual los adopta.

Los Hooks son funciones o métodos que se ejecutan en determinados momentos del flujo de ejecución de los tests.

Los que usaremos en nuestro proyecto son:

before(): es una función que se ejecuta una vez antes de la ejecución de todos los tests del mismo grupo.
beforeEach(): es una función que se ejecuta antes de cada test individual.
afterEach(): es una función que se ejecuta después de cada test individual.
after(): es una función que se ejecuta una vez, al finalizar la ejecución de todos los tests del mismo grupo.
Opcionalmente, se puede incluir el método .skip(), encadenado a alguna de las definiciones de test de la siguiente manera: it.skip( ... ), para indicar a Cypress que este test se omitirá durante la ejecución.

Comparte con tus compañeros en la sección de discusiones de la clase, en qué otras situaciones consideras que serían útiles los Hooks de Cypress.


Variables, Fixtures y Alias......................
Debido a que Cypress es asíncrono, la forma de definir y usar variables en el código de los tests es diferente a como se hace regularmente en JavaScript.

Los fixtures son estructuras u objetos JSON definidos en archivos individuales que se pueden reutilizar en cualquier momento de la secuencia de ejecución de los tests. Para poder hacer referencia a ellos posteriormente es necesario asignarles un alias.

La forma de incorporar un fixture en cada uno de los tests, sería incorporándolo en el Hook beforeEach() de la manera siguiente:

cy.fixture(<archivo.json>).as(<alias>)

y para poder hacer uso de éste, se le debe asignar un alias:

cy.get('@alias').then( ( var ) => {
  // ---- en este ámbito ya se puede usar como una variable más
  ...
  cy.get('input').type( var )
  ...
})

Al usar el símbolo “”@"" en el selector, se hace referencia a una variable (fixture) y no a un elemento de la interfaz.

NOTA: Ten en cuenta que las funciones de Cypress no regresan un valor en sí mismas, ya que internamente funcionan de manera asíncrona.


Ejecución de scripts.........................

En esta clase incorporaremos a nuestro testing un script de NodeJS que eliminará de la base de datos de Firebase los registros de usuario creados en cada ejecución, para evitar que falle el test por error de usuario duplicado. Tendremos que correr este script mediante una instrucción shell antes de la ejecución de cada testing de Cypress.

Para que el script funcione correctamente será necesario instalar firebase-admin con npm i firebase-admin -D y colocar en el archivo firebase-admin-keys.json las credenciales de acceso al proyecto proporcionadas por Firebase en la sección Cuentas de Servicio.

Finalmente creamos un nuevo script en el archivo de configuraciones de webpack llamado test:clean con la siguiente línea de comandos: cd build && node clean-test-db.js y lo ejecutamos desde el Hook before() en el archivo de definiciones de nuestros tests utillizando la función cy.exec('npm run test:clean'). También se pueden ejecutar comandos de tipo shell o scripts externos, con la función cy.task(...) de Cypress.

Con exec ejecutamos el script del package.json
Vamos al test, armamos un before() y en el callback usamos
cy.exec("npm run test:clean")   //en el ejemplo, este comando lo q hacia era borrar una DB los usuarios creados

Comandos personalizados ....................

En esta clase aprenderemos a crear comandos personalizados con Cypress. La idea es que cada conjunto o suite de tests sea independiente entre sí; sin embargo, hay ocasiones en que varios tests o grupos de tests requieren ejecutar instrucciones comunes. Los comandos personalizados son una manera muy conveniente de agrupar varias instrucciones para reutilizarlas o compartirlas entre diferentes lugares de nuestro flujo de testing en una o varias suites.

La definición de los comandos personalizados se hace en el archivo comands.js en la carpeta /support de la siguiente manera:

Cypress.Commands.add( 'miComandoPersonalizado', ( <params> ) => {
  // --- instrucciones comunes agrupadas como comando personalizado
  ...
} )

Luego para hacer uso del comando personalizado, se debe invocar como cualquier método propio de Cypress: cy.miComandoPersonalizado( <params> ).
*/
//ejemplo:
beforeEach(()=>{
  cy.fixture("user.json").as("userData");
  cy.visit("/login");
})

it("ejemplo", ()=>{
  cy.get("@userData").then((userData)=>{
    cy.createUser(userData);  // commands propio.
  })
})



Cypress.Commands.add('registerUser', (userData) => {
    cy.contains('Crear una cuenta').click()
    cy.get('#name').type(userData.name)
    cy.get('#title').type(userData.company)
    cy.get('#email2').type(userData.email)
    cy.get('#password2').type(userData.password)
    cy.contains('.button','Registrarse').click()
    cy.wait(3000)
    cy.contains('a','Dashboard').should('be.visible')
})

Cypress.Commands.add('registerUser', ({ name, company, email, password }) => {
    cy.contains('Crear una cuenta').click()
    cy.get('#name').type(name)
    cy.get('#title').type(company)
    cy.get('#email2').type(email)
    cy.get('#password2').type(password)
    cy.contains('.button','Registrarse').click()
    cy.wait(3000)
    cy.contains('a','Dashboard').should('be.visible')
})

/*

Variables de entorno y configuración .........................

resumen:
Ocupamos el archivo cypress.json, y agregamos un apartado "env" : {" variable":"contenido de la variable"}

{
  "baseUrl" : "http://localhost:9000",
  "env" : {
    "postContent" : "Este es un post de prueba"
  }
}

Después de encontrar el selector / elemento se puedo pasar un argumento predefinido desde las variables de entorno en cypress.json usando Cypress.env('variable')
*/

describe("Pruebas de posts", ()=>{
  before(()=>{
    cy.exec("npm run test:clean") //desde terminal, limpio la base de datos
    cy.fixture("user.json").as("userData");
    cy.visit("/login");

    cy.get("@userData").then((userData) =>{
      cy.createUser(userData) //commando propio
      cy.visit("/dashboard");
      cy.wait(3000);
    })
  })

  it("Crea un post", ()=>{
    cy.get("@userData").then((userData)=>{
      //consigo la info que usamos para probar
      cy.get("textarea").type(Cypress.env("postContent")); //usamos la variable de entorno antes definida en la configuracion
      cy.contains("button", "Crear").as("botonCrear");
      cy.get("@botonCrear").should("be.enabled"); //testeo que el boton esté activado
      cy.get("@botonCrear").click()               //hago click para postear

      //ahora veo que se haya craado el post
      cy.contains(".col2 h5", "userData.name").should("be.visible");
      cy.contains("p", Cypress.env("postContent")).should("be.visible");
    })
  })
})
/*

Screenshots................................
Con la función cy.screenshot( , { } ) es posible tomar un captura o screenshot de la pantalla o interfaz de nuestra aplicación en cualquier momento durante la ejecución del testing.

Esta funcionalidad permite algunas opciones de configuración muy útiles como: blackout para ocultar elementos o información que no deba ser expuesta en la captura, clip para recortar y capturar sólo una región de la interfaz, capture: ‘fullPage’ para hacer una captura de toda la página y no solo lo visible en el viewport del navegador, entre otras.

Los archivos de las imágenes capturadas (con formato png) son guardados en subcarpetas identificadas con el nombre de la suite de tests en ejecución, dentro del directorio /screenshots creado automáticamente por Cypress.

Es recomendable excluir los screenshots del repositorio github agregando la carpeta correspondiente al archivo .gitignore.

Stubs, Spies y Clocks............................

En esta clase veremos algunos conceptos y funcionalidades que están relacionados propiamente con End-to-end Testing, pero que están disponibles en Cypress y pudieran sernos de utilidad en alguna ocasión.

Stubs: proporciona una manera programática de simular, sustituir o tomar control del comportamiento esperado de funciones o eventos que suceden en la interfaz de nuestra aplicación.
Spies: permiten intervenir en los llamados a funciones para determinar si fueron llamadas durante la ejecución del testing y qué parámetros recibieron en esa llamda.
Clocks: proporciona una forma de alterar programáticamente la hora y fecha del entorno durante la ejecución del testing.
NOTA; No se recomienda el uso de estas funcionalidades cuando se realiza End-to-end testing, particularmente con Firebase, ya que pudieran generar comportamientos inesperados y no deseados como resultado de las pruebas. Estas funcionalidades son más útiles para pruebas de otro tipo.


Depuración de los tests....................................
Cyrpress provee dos herramientas para hacer depuración durante la ejecución de los tests:

debugger que detiene la ejecución del código y permite el acceso a la consola de inspección tanto en el código de los tests como de la aplicación que estamos probando.
.debug() que es una función encadenable a cualquier otra función de Cypress, y que al igual que debugger, permite la depuración del código durante la ejecución de un flujo de pruebas.


Es importante mencionar que antes de correr el test se debe de tener abierto chrome developer tools.


Headless testing..........................
Cuando estamos realizando End-to-end testing en un ambiente real de producción, por lo general no tenemos acceso a la interfaz gráfica del servidor. En estos casos se hace necesario entonces tener la posibilidad de ejecutar todo el flujo de pruebas como lo hemos definido, pero sin la simulación visual de lo que sucede en el navegador durante todo el proceso. Para esto, Cypress dispone de la funcionalidad Headless testing.

El cambio necesario para realizar un Headless testing es básicamente la sustitución del argumento open por run, en la ejecución del script de Cypress en las configuraciones del archivo package.json, quedando los scripts de la siguiente manera:

""cypress:run"": ""cypress run --project ./test"",
...
""test"": ""npm run build:test && run-p --race test:server cypress:run"",
Al ejecutar npm run test ya no se ejecutará en el test runner de Cypress sino en un navegador interno sin interfaz gráfica; sin embargo, Cypress registrará toda la ejecución en un video que guardará en la carpeta /videos en el sistema de archivos del servidor además de mostrar todas las salidas del proceso en la terminal de línea de comandos.

Al igual que como sucede con los screenshots la recomendación es que la carpeta /videos se excluya del repositorio Git a través del .gitignore para evitar un uso innecesario de recursos adicionales del servidor.


Configuramos cypress para modo headless.
agreamos un script en package.json
"scripts": {
  "cypress:run": "cypress run --project ./test",
  "test": "npm run build:test && run-p --race test:server" //ejemplo
}

vamos a una consola.
npm run test


Testing condicional..............................
El Testing condicional es aquel en el que las pruebas están sujetas a valores o condiciones de la interfaz que no son inmutables, textos o contenidos de elementos del DOM, fecha y hora, entre otros. Es una práctica que se debe evitar en la mayoría de los casos, ya que puede conducir a resultados inconsistentes tambén conocidos como flaky tests en los que, para configuraciones y estados constantes, se obtienen resultados distintos e impredecibles.

Lo recomendable, en el caso de que se requiera obligatoriamente definir diferentes rutas de pruebas basadas en condiciones del entorno, es apoyarse en datos como cookies, variables de sesión, datos almacenados en el LocalStorage, entre otros.



//----------------------------------------------------------------

Video 1

Instalacion de Cypress
npm init
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
