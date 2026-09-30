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