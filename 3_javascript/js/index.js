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


// TO DO, continuar desde scopeFunction