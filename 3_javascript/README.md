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


// TO DO, operador ternario y bucles for anidados
// Ejercicio sugerido, usando un bucle for anidado (un bucle for dentro de otro), hagan una tabla de multiplicar del 10

/* Output

1 x 1 = 1
1 x 2 = 2
1 x 3 = 3

...

10 x 9 = 90
10 x 10 = 100

*/
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