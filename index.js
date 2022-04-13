import express from "express"
import pizzaController from "./src/constrollers/pizzaController.js"

const app = express(); //express: tipo de dato
const puerto = 2548; //dentro de la url, en que parte me quiero conectar

app.use(express.json()); //.json me sirve para indicar el tipo 
app.use("/pizza",pizzaController);

app.listen(puerto, () => 
{
    console.log(`This is a server on the point ${puerto}`); //Despues del $ se usa como en js
})


