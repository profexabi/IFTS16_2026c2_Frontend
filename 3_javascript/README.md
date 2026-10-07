## JavaScript III / Scope (Ambito o Alcance), Hoisting, funciones y tupos de funciones

```js

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