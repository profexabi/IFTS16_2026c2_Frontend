## *Como ejecuta las instrucciones JavaScript internamente?*
**JavaScript internamente “lee” el código antes de ejecutarlo**, realizando un proceso en dos fases:

**1. Fase de compilación** (o creación del contexto)
Antes de ejecutar línea por línea, el motor de JavaScript analiza todo el código. En esta etapa:

- Registra variables y funciones.
- Determina el alcance (scope).
- Prepara el entorno de ejecución.


**2. Fase de ejecución**
Recién después ejecuta el código en orden.



---
## Prox clase
- Continuar JavaScript V desde Objetos globales

## DAR PRONTO JAVASCRIPT VIII PARA PODER HACER TPO2

## FECHAS
- **PRESENCIAL / Presentacion grupal de TPO1 18/11**
- **PRESENCIAL / Presentacion grupal de TPO2 25/11**


## JavaScript IV / Introduccion a Arrays, metodos de strings y arrays

En JavaScript, los arrays y objetos son estructuras de datos fundamentales. 
- Los arrays se utilizan para almacenar una lista ordenada de elementos
- Los objetos son ideales para almacenar datos con propiedades clave-valor

Cuando usar cada uno?
- **Usaremos arrays**: Cuando necesitemos almacenar una lista de elementos (idealmente comunes, como una lista de nombres)

- **Usaremos objetos**: Cuando tengamos datos estructurados que pueden agruparse en propiedades clave-valor (como los atributos de una persona o las especificaciones de un producto)

#### EXTRA
Otras estructuras de datos utiles

- [Map](https://www.w3schools.com/js/js_maps.asp): Coleccion de pares clave-valor donde las claves pueden ser de cualquier tipo, incluso objetos o funciones
```js
const mapa = new Map();
mapa.set(123, "ID");
mapa.set(true, "activo");
```

- [Set](https://www.w3schools.com/js/js_sets.asp): Un `Set` es una coleccion de valores unicos, no permite valores duplicados
```js
const conjunto = new Set([1, 2, 2, 3]);
conjunto.add(4);
console.log(conjunto); // Set(4) {1, 2, 3, 4}
```

**JavaScript "envuelve" en objetos los tipos de datos primitivos como strings o numeros, es decir los trata como objetos otorgandoles metodos (Object Wrappers)**

```js
/*=====================
    Arrays en JS
=======================

Un array es una lista ordenada de elementos, donde cada uno tiene una posicion o indice.

Los arrays en JS son muy flexibles: pueden contener cualquier tipo de datos (numeros, cadenas, booleanos, otros arrays, objetos, funciones, etc) y los elementos no tienen que ser del mismo tipo
*/

let frutas = ["manzana", "banana", "naranja"];
console.log(frutas[0]); // manzana
console.log(frutas[2]); // naranja


/*=====================
    Objetos en JS
=======================

Un objeto es una coleccion de pares clave-valor. 

Las claves son strings que identifican a cada valor, lo cual permite un acceso rapido y estructurado a los datos. Los objetos son utiles cuando deseas representar la entidad con multiples propiedades
*/

// Creacion literal de objeto
let persona = {
    nombre: "Santiago",
    edad: 21,
    ciudad: "Quilmes"
}

// Podemos acceder a las propiedades de un objeto mediante dos notaciones: notacion de punto y notacion de corchete

// Notacion de punto
console.log(persona.nombre); // Santiago

// Notacion de corchete
console.log(persona["ciudad"]); // Quilmes

// Agregando una propiedad
persona.pais = "El tricampeon, papa";

// Eliminar propiedad
delete persona.edad;

console.log(persona)

// Metodos de objetos: funciones almacenadas en una propiedad
let perro = {
    nombre: "Firulais",
    ladrar: function() {
        console.log("Guau!");
    }
}

perro.ladrar(); // Guau!




/*===============================
    Metodos de Strings en JS
===============================*/

// 1. length: Devuelve la longitud del string
console.log("Hola".length); // 4

// 2. chartAt(index): Devuelve el caracter en la posicion especificada
console.log("Hola".charAt(1)); // o

// 3. concat(str1, str2): Concatena strings
console.log("Hola".concat(" ", "mundo")); // Hola mundo

// 4. includes(substring): Devuelve true si el substring esta en el string
console.log("JavaScript".includes("Script")); // true (ojota, es case-sensitive)

// 5. startsWith(substring) o endsWith(substring): Devuelve true si el string comienza o termina con el substring
console.log("Hola mundo".startsWith("Hola")); // true

// 6. indexOf(substring): Devuelve el indice de la primera aparicion del substring
// lastIndexOf(substring): Devuelve el indice de la ultima aparicion del substring
console.log("banana".indexOf("a")); // 1

// 7. replace(searchValue, newValue): Reemplaza una parte del string
console.log("Hola mundo".replace("mundo", "Div 334")); // Hola Div 334

// 8. replaceAll(searchValue, newValue): Reemplaza TODAS las apariciones
console.log("1, 2, 3, 4, 5".replaceAll(", ", ";")); // 1;2;3;4;5

// 9. toLowerCase(): Convierte a minusculas
console.log("HOLA".toLowerCase()); // hola

// 10. toUpperCase(): Convierte a mayusculas
console.log("holi".toUpperCase()); // HOLI

// 11. trim(): Elimina el espacioen blanco al comienzo Y al final
// trimStart() y trimEnd(): Eliminan espacios al comienzo O al final
console.log("   Hola    ".trim()); // Hola

// 12. slice(start, end): Extrae parte del string
console.log("JavaScript".slice(0, 4)); // Java
console.log("JavaScript".slice(-6)); // Script

// 13. substring(start, end): Similar a slice, pero NO acepta negativos
console.log("JavaScript".substring(4, 10)); // Script

// 14. split(separator): Divide el string en un array
console.log("rojo,verde,azul".split(",")); // ['rojo', 'verde', 'azul']
console.log("Hola".split("")); // ['H', 'o', 'l', 'a']


// 15. repeat(count): Repite el string
console.log("Ji".repeat(3)); // JiJiJi

// 16. match(regex): Devuelve coincidencias con una expresion regular
console.log("abc123".match(/\d+/g)); // ['123']




/*===============================
    Metodos de Arrays en JS
===============================*/

// 1. length: Devuelve la longitud del array
console.log([1, 2, 3].length); // 3

// 2. push(element): AGREGA un elemento AL FINAL de array
let arr = [1, 2, 3];
arr.push(4);
console.log(arr); // [1, 2, 3, 4]

// 3. pop(): ELIMINA el ULTIMO elemento y lo devuelve
console.log(arr.pop()); // 4
console.log(arr); // [1, 2, 3]

// 4. unshift(element): AGREGA un elemento al INICIO del array
arr.unshift(0);
console.log(arr); // [0, 1, 2, 3]

// 5. shift(): ELIMINA el PRIMER elemento y lo devuelve
console.log(arr.shift()); // 0
console.log(arr); // [1, 2, 3]

// 6. concat(array): Concatena arrays
console.log([1, 2, 3].concat([4, 5, 6])); // [1, 2, 3, 4, 5, 6]

// 7. join(separator): Une los elementos en un string
console.log([1, 2, 3].join('-')); // "1-2-3"


// 8. slice(start, end): Extrae una copia parcial del array
console.log([1, 2, 3, 4].slice(1, 3)); // [2, 3]

// 9. splice(start, deleteCount, ...items): Modifica el array in situ, puede borrar y agrega
let arrayDos = [1, 2, 3, 4, 5, 6];
arrayDos.splice(1, 2, "dos", "tres")
console.log(arrayDos); // [1, 'dos', 'tres', 4, 5, 6]

// 10. indexOf(element): Devuelve la primera posicion del elemento o -1
console.log([1, 2, 3].indexOf(2)); // 1

// 11. lastIndexOf(element): Devuelve la ULTIMA posicion del elemento
console.log([1, 2, 3, 2].lastIndexOf(2)); // 3

// 12. includes(element): Devuelve true si el elemento existe
console.log([1, 2, 3].includes(2)); // true
```


---



## JavaScript III / Scope (Ambito o Alcance), Hoisting, funciones y tupos de funciones

```js
/*======================
    Scope
========================

Scope, alcance o ambito es un termino que se refiere al contexto en el cual las variables y funciones son accesibles y pueden ser referenciadas.



/////////////////
// Global Scope
    - Las variables declaradas fuera de cualquier funcion o bloque tienen alcance global y son accesibles desde cualquier parte del codigo

    - Incluye a var, let y const

    // El alcance de funcion se refiere a todo lo que esta dentro de la funcion
    function() {
    
    }

    // El alcance de bloque se refiere a cualquier {}
    if {
    }



/////////////////
// Function Scope o Local Scope
    - Las variables declaradas DENTRO de una funcinon solo son accesibles DENTRO de esa funcion
    - Se dice que tienen alcance local o alcance de funcion
    - Solamente afecta a las variables var



/////////////////
// Block Scope
    - A partir de ES6 (2015), el estandar moderno de JavaScript, las variables let y const tienen alcance de bloque
    - Solo son accesibles dentro del bloque en el que se declararon
    - Que es un bloque? -> { } (pueden ser de un if, de un for, etc)

*/

///////////////////
// Alcance global
let soyGlobal = "Soy una variable global";

function mostrarGlobal() {
    console.log(soyGlobal);    
}

mostrarGlobal(); // Soy una variable global
console.log(soyGlobal); // Soy una variable global


///////////////////
// Alcance de funcion
function mostrarLocal() {
    var localVar = "Soy una var local";
    console.log(localVar);
}

mostrarLocal();
// console.log(localVar); // Uncaught ReferenceError: localVar is not defined


///////////////////
// Alance de bloque
if (true) {
    let bloqueLet = "Soy una let de bloque";
    console.log(bloqueLet);
}

// console.log(bloqueLet); // Uncaught ReferenceError: bloqueLet is not defined


// Function Scope vs Block Scope

// Aca hay un alcance de funcion
function scopeFunction() {

    // Aca hay un alcance de bloque
    if (true) {
        var funcionVar = "Soy de funcion"
    }
    // Fin del alcance de bloque

    console.log(funcionVar); // Esta var SI es accesible, porque las llaves del if no encierran su alcance
}
// Fin del alcance de funcion

scopeFunction();


// Alcance de bloque
function scopeBloque() {
    if (true) {
        var variable = "Soy una var"; // Scope de funcion, puede salir de estas {}
        let letBloque = "Soy una let de bloque"; // Scope de bloque, NO pueden salir de las {}
        const constBloque = "Soy una const tambien de bloque"; // Scope de bloque, NO pueden salir de las {}
    }

    console.log(variable);
    // console.log(letBloque); // Uncaught ReferenceError: letBloque is not defined
    // console.log(constBloque); // Uncaught ReferenceError: constBloque is not defined
}

scopeBloque();


/*======================
    Hoisting
========================

Las declaraciones de variables y funciones en JavaScript se "mueven hacia arriba" de su contexto de ejecucion o "scope".

Solo las declaraciones son elevadas, no las inicializaciones

    - var: Se elevan y se inicializan con undefined
    - let y const: Se elevan pero NO se inicializan, lo que lleva a un error si se accede antes de la declaracion
*/

console.log(elevadaVar); // undefined
var elevadaVar = "Soy una var elevada";
console.log(elevadaVar); // Soy una var elevada

// console.log(elevadaLet); // Uncaught ReferenceError: Cannot access 'elevadaLet' before initialization
let elevadaLet = "Soy una let elevada";
console.log(elevadaLet); // Soy una let elevada



/*======================
    var vs let y const
========================

- var:      tiene ambito de funcion, permite la redeclaracion y la reasignacion
- let:      tiene ambito de bloque, no permite la redeclaracion pero si la reasignacion
- const:    tiene ambito de bloque, no permite la redeclaracion ni la reasignacion
*/

var algo = "coso";
var algo = "cosito"; // Redeclaracion, vuelvo a declarar una variable ya declarada previamente
console.log(algo); // cosito

let x = 10;
// let x = 30; // NO esta permita la redeclaracion
x = 20; // Reasignacion, es decir, asignar un nuevo valor
console.log(x);

const y = 20;
// y = 30; // No permite reasignacion const. Uncaught TypeError: Assignment to constant variable.
console.log(y);

// Ojo porque const no me da problema a la hora de cambiar el valor de objetos y arrays, porque son tipos de datos que son mutables. Por eso una const array u objeto puede mutar, pero no reasignar valor. Porque al reasignar, CAMBIA su posicion en memoria

// Los parametros son los nombres de las variables que definimos en la declaracion de la funcion
// Los argumentos son los valores que pasamos a la funcion cuando la llamamos

function saludito (nombre) { // nombre es un parametro
    console.log(`Holis ${nombre}, como dice que le va?`); // Lo usamos a lo largo de la funcion
}

saludito("Ignacio"); // "Ignacio" es el argumento

function sumaSimple(a, b) {
    return a + b;
}

console.log(sumaSimple(5, 6)); // 11



/*======================
    Funciones en JS
======================*/
/*//////////////////
// 1. Funcion declarada (Named function o basic function)

Es la declaracion basica de JavaScript, usa la keyword function

Se recomienda para funciones con nombre o cuando se necesite hoisting.
Las funciones declaradas con la keyword function se puede elevar a la parte superior de su ambito, es decir, del scope que las contiene.

Esto permite llamar a la funcion antes de ser declarada
*/

saludar(); // Holis

function saludar() {
    console.log("Holis")
}


/*//////////////////
// Funcion anonima (Anonymous function)

Son funciones que se definen sin un nombre identificador, comportandose como expresiones que se asignan a variables o se pasan como argumentos a otras funciones.

A diferencia de las funciones declaradas, estas NO se elevan (hoisting) y generalmente se usan para tareas como callbacks

    - Sintaxis clasica: Se usa la palabra clave function sin nombre
    const sumar = function(a, b) {
        return a + b
    }

    - Arrow functions: Una sintaxis mas concisa que tambien genera funciones anonimas
    const sumar = (a, b) => a + b; // Hace exactamente lo mismo que la funcion de arriba pero en una linea


Cuando usar funciones anonimas?
    - Callbacks: Funciones dentro de otras funciones
    - IIFE: Ejecucion inmediata de una funcion
    - Eventos
*/


/*//////////////////
// 2. Funcion expresada (Function expression)

Es la funcion que esta adentro de una variable.

Son utiles para funciones anonimas, para cuando se quiere controlar donde va a estar disponible la funcion o para cuando va a ser usada como argumento para otra funcion (callback)*/

const despedida = function() {
    console.log("Chau, nos vemos");
}

despedida();


/*//////////////////
// 4. Funcion flecha (Arrow function)

Especialmente util para escribir funciones de una linea*/

const sumar = (a, b) => a + b;
console.log(sumar(4, 5)); // 9



/*//////////////////
// 5. Funcion de metodos (Method function)

Son las funcioens definidas dentro de un objeto o clase
*/

const persona = {
    nombre: "Maria",
    saludar() {
        console.log(`Hola! Me llamo ${this.nombre}`);
    }
}

persona.saludar(); // Hola! Me llamo Maria


/*//////////////////
// 6. Funcion de constructor (Constructor function)

Se usan para crear objetos, se invocan usando el keyword new
*/

function Usuario(nombre, id) {
    this.nombre = nombre;
    this.id = id;
}

const luciano = new Usuario("Luciano", 1234);
console.log(luciano.nombre);


/*//////////////////
// 7. Expresion de funcion ejecutada inmediatamente (IIFE / Immediately Invoked Function Expression)

Las IIFE son funciones que se ejecutan inmediatamente despues de haberse definido
*/

(function() {
    console.log("Esta es una IIFE, al toque de definirla, la invoco")
})(); // Esta es una IIFE, al toque de definirla, la invoco


/*//////////////////
// 8. Funcion de orden superior (High Order Function / HOF)

Las HOF nos permiten usar otras funciones como parametros o devolver funciones como resultados, o ambos!

Ejemplos son map(), filter(), find(), reduce(), forEach(), etc
*/

/*//////////////////
// 9. Funcion asincronica (Async function)

Las funciones asincronicas se declaran con la keyword async y devuelve un objeto Promise que representa el valor futuro de una operacion exitosa o erronea

Se usa el operador await para detener la ejecucion del codigo de una funcion asincronica
*/

async function obtenerUsuarios() {

    // Dentro de try escribimos el codigo que queremos ejecutar y que puede llegar a fallar
    try {
        let url = "https://jsonplaceholder.typicode.com/users";
        // El codigo se detendra esperando que await resuelva exitosa o erroneamente esta conexion HTTP con la url
        let response = await fetch(url); // Podria fallar la conexion HTTP (error real de red)

        // Aca parseamos el JSON que recibimos en el cuerpo de la respuesta HTTP
        let data = await response.json(); // Esta funcion .json() recibe texto plano JSON y lo transforma en un array de objetos manipulable

        // Data es un array de objetos que muestro en la consola en forma de tabla
        console.table(data);

        // Ahora ya puedo realizar todas las operaciones con este array de objetos que se me proporciono dentro de la url de arriba

        // Puedo iterar tambien este array de objetos y mostrar cada email por consola
        data.forEach(user => {
            console.log(user.email);
        })

    } catch (error) {
        console.log(error); 
    }


}

// obtenerUsuarios();


/*==============================
    Tipos de funciones flecha
==============================*/

// 1. Sin parametros: Si la funcion no lleva parametros, se pueden usar parentesis vacias
const saludoFlecha = () => console.log("Holis! Como va?");
saludoFlecha(); // Holis! Como va?


// 2. Un solo parametro: Las parentesis son opcionales
const cuadrado = x => x * x; // Aca el return esta implicito! Cuando es single line
console.log(cuadrado(4)); // 16


// 3. Mas de un parametro: Las parentesis son obligatorias
const sumaFlecha = (a, b) => a + b;
console.log(sumaFlecha(2, 3)); // 5


// 4. Mas de una instruccion en la funcion: Si el cuerpo de la funcion tiene mas de una instruccion, necesitamos usar {} y la palabra return si queremos devolver un valor

const saludarPersona = nombre => {
    const saludo = `Hola ${nombre}! Como estas?`;

    return saludo;
}

console.log(saludarPersona("Pablo")); // Hola Pablo! Como estas?


// 5. HOF y callbacks: Las funciones de flecha son especialmente populares cuando se usan como callbacks (se pasan dentro de otras funciones)
const numeros = [1, 2, 3, 4, 5];

// map tiene dentro una arrow function de una sola linea
const duplicar = numeros.map(num => num * 2); 
console.log(duplicar); // [2, 4, 6, 8, 10]

// map, ahora tiene una funcion declarada dentro
const numerosCuadrados = numeros.map(function(num) {
    return num * num
});
console.log(numerosCuadrados); // [1, 4, 9, 16, 25]

```

---

## JavaScript II / Control de flujo, estructuras de control condicionales y bucles

El control de flujo determina como se ejecutan las instrucciones de un programa.

Al diseñar un programa, es importante establecer que partes del codigo se ejecutan y bajo que condiciones. En JS lo logramos mediante estructuras de control que permiten ejecutar sentencias de codigo basadas en decisiones, repeticiones o condiciones especificas. 

### Estructuras de control de flujo en JavaScript

#### 1. Condicionales

- [Condicionales if, else is, else](https://www.w3schools.com/js/js_if_else.asp)
- Operadores logicos: &&, ||, !
- Operadores ternarios

#### 2. Bucles I
- for
- [while y do...while](https://www.w3schools.com/js/js_loop_while.asp)

#### 3. Control de flujo avanzado
- break
- continue
- [Switch](https://www.w3schools.com/js/js_switch.asp)

```js
/*======================
    Operadores logicos
========================

- AND   &&      Ambas condiciones deben ser verdaderas
- OR    ||      Al menos una condicion debe ser verdadera
- NOT   !       Niega el valor de una condicion, es el operador de negacion logica basica
*/

// Ventanas flotantes para mostrar mensajes o pedir input
// alert("Mensaje en una ventana flotante");
// confirm("Te gusta JavaScript");

// let edad = prompt("Escribi tu edad");
// console.log(typeof edad); // Devuelve string por defecto
/*
let edad = parseInt(prompt("Escribi tu edad"));
console.log(typeof edad);

let tieneLicencia = confirm("Tenes licencia?");

// Para comprobar si puede manejar
if (edad >= 18 && tieneLicencia) {
    console.log("Puede manejar");
}

// Para comprobar si NO puede manejar
if (edad < 18 || !tieneLicencia) {
    console.log("No podes manejar")
}
*/

// El operador ! invierte el valor booleano de una expresion

// Ejemplo de toggle con el operador !
let estado = true;

function alternarEstado() {
    estado = !estado; // REASIGNACION del valor de estado
    console.log("Nuevo estado: ", estado);
}

alternarEstado();
alternarEstado();
alternarEstado();
alternarEstado();
alternarEstado();


// Operador ternario: Es una forma mas compacta de escribir una condicion if...else
let edad = 34;
let mensaje = (edad >= 18) ? "Sos mayor de edad" : "Sos menor de edad";


/*===================
    Bucles
=====================

Pensemos en 3 condiciones que siempre deben cumplirse

    1. Inicializacion
    2. Condicion
    3. Incremento

==================
    for 
==================
    
Se usa cuando conocemos de antemano el numero de iteraciones

    for (inicializacion; condicion; incremento) {
        // Codigo a ejecutar en cada iteracion
    }

    - El bucle mas rapido en memoria, se puede cortar con break y continue
    - Puede resultar algo dificil de leer
*/
// Bucle for
for (let i = 0; i < 5; i++) {
    console.log("Iteracion: ", i);
    // Aca termina la primer iteracion y se incrementa, ahora 0 vale 1
    // i = 2
    // i = 3
    // ...
    // Continuara hasta que i sea 5 y la condicion de false
}

// Aca continuara la ejecucion de javascript cuando haya salido de ese loop


/*================
    while
==================    
Ejecuta el bloque de codigo mientras la condicion sea verdadera

    while (condicion) {
        // Codigo a ejecutar mientras la condicion sea verdadera
    }
*/

let i = 0;

while (i < 5) {
    console.log("Iteracion while: ", i);
    i++;
}


/*================
    do ... while
==================    
Similar al while, pero la condicion se evalua despues de ejecutar el bloque de codigo, por lo que el codigo se ejecuta al menos una vez

    do {
        // Codigo a ejecutar 
    } while (condicion);
*/

let j = 0;
do {
    console.log("Iteracion do...while: ", j);
    j++;
} while (j < 5);


// break: Palabra clave con la que salimos de un bucle o estructura de control
// continue: Palabra clave con la que salteamos una iteracion del bucle

for (let i  = 0; i < 10; i++) {
    if (i === 5) break; // Sale del bucle cuando i es 5
    console.log("Iteracion con break: ", i);
}

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Salta las iteraciones donde i es par
    }

    console.log("Numero impar: ", i);
}


// switch es otra estructura de control que permite evaluar una expresion y ejecutar el codigo correspondiente al caso que coincide

let diaSemana = 3;

// Nos evita tener que anidar muchos else if (...), else if(...)
switch(diaSemana) {
    case 1:
        console.log("Lunes");
        break;

    case 2:
        console.log("Martes");
        break;

    case 3:
        console.log("Miercoles");
        break;

    case 4:
        console.log("Jueves");
        break;

    case 5:
        console.log("Viernes");
        break;

    default:
        console.log("Es fin de semana");
}


// Ejercicio sugerido, usando un bucle for anidado (un bucle for dentro de otro), hagan una tabla de multiplicar del 10

/* Output

1 x 1 = 1
1 x 2 = 2
1 x 3 = 3

...

10 x 9 = 90
10 x 10 = 100
*/

// Ejercicio sugerido para el switch, hacear una calculadora que pida valor 1, operador, valor 2 y devuelva el resultado
```


---


# JavaScript I / Conceptos elementales, sintaxis basica, variables, tipos de datos y operadores

### [Que es JavaScript?](https://es.wikipedia.org/wiki/JavaScript)
### [JavaScript W3Schools](https://www.w3schools.com/js/default.asp)

JavaScript es un lenguaje de programacion que se utiliza para crear paginas web interactivas. Mientras HTML y CSS se encargan solamente de la estructura y estilo de una pagina, JS puede hacer que las paginas respondan a las acciones del usuario y a cambios que ocurran en el documento, realizar calcuos, alterar elementos de forma dinamica, realizar operaciones personalizadas, etc

Es un lenguaje de programacion que se usa para procesar informacion y manipular documentos. Al igual que cualquier otro lenguaje de programacion, JavaScript provee instrucciones que se ejecutan de forma secuencial para indicarle al sistema lo que queremos que haga.
Cuando el navegador encuentra este tipo de codigo en nuestro docuimento, ejecuta las instrucciones al momento y cualquier cambio realizado en el documento se muestra en pantalla.

Es un lenguaje muy muy popular porque puede ejecutarse en cualquier navegador web sin tener que instalar nada, ademas lo usamos tanto en el frontend (lo que ve el usuario, como las paginas web) y en el backend (la parte del servidor que provee informacion), esto ultimo gracias a Node.js

```js
// Mensaje por consola
console.log("Hola mundo");

/* La consola es una herramienta fundamental de depuracion

Podemos acceder a ella con F12 en el navegador y ver mensajes de registro y errores, asi como hacer pruebas interactivas de codigo*/

// Las variables almacenan datos que pueden ser reutilizados y modificados

// var: Declaracion historica, no recomendada y con muchas limitaciones
var nombre = "Rodrigo";

// let: Declaracion moderna: Tiene alcance global y de bloque, permite reasignar valores
let edad = 25;

// const: Declaracion moderna: Tiene alcance global y bloque, no permite reasignar valores
const pi = 3.1416;

/*==============================
    Tipos de datos primitivos
================================

    - Numeros: Valores numericos
    - Strings: (o cadenas) Texto encerrado entre comillas simples o dobles
    - Booleanos: true o false
    - null: Valor intencionalmente vacio
    - undefined: Una variable que fue declarada pero no tiene valor
*/

let numero = 22;
let cadena = "Hola";
let verdadero = true;
let vacio = null;
let indefinido;

console.log(numero); // 2
console.log(cadena); // Hola
console.log(verdadero); // true
console.log(vacio); // null
console.log(indefinido); // undefined


/*===================================
     Operadores de comparacion
=====================================

    ==      Igualdad simple (compara valores y parsea si es necesario)
    ===     Igualdad estricta (compara valor y tipo)
*/
let x = 5;
let y = "5";

console.log(x == y); // true, porque compara valores y parsea si es necesario
console.log(x === y); // false, porque compara valor y tipo


// Operador de tipo: Permite verificar el tipo de un valor
console.log(typeof 42); // number
console.log(typeof "Hola"); // string
```