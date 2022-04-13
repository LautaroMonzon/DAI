import express from "express";
import { Server } from "http";

const index = express(); //express: tipo de dato
const puerto = 2548; //dentro de la url, en que parte me quiero conectar

index.use(express.json()); //.json me sirve para indicar el tipo 

index.listen(puerto, () => 
{
    console.log("hola");
})

