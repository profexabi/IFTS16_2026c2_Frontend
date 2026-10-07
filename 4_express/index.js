// Instale express, ahora para poder usarlo tengo que importarlo
import express from "express";
const app = express(); // Creo una instancia de la aplicacion de express para poder usar sus metodos

// Defino un endpoint, que es basicamente una URL que devolvera respuestas (HTML, JSON, texto plano, etc)
app.get("/", (req, res) => {
    res.send("Hola mundo desde Express.js");
});

// Defino un endpoint para devolver productos
app.get("/api/products", (req, res) => {
    // Inicio la conexion a la BBDD para traer SELECT * FROM products
    
    // Devuelvo la informacion de mi BBDD en formato JSON
    res.status(200).json({
        payload: "informacion"
    })
})

// Voy a inicializar mi servidor y hacer que este atendiendo un puerto
app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
});

