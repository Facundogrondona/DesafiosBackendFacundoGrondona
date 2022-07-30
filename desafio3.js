const Contenedor = require('./metodos.js');
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});

server.on("error", (error) => console.log(`Error en servidor ${error}`));

let productos = new Contenedor("productos");

app.get("/", (req, res) => {
    res.send({
        Ingrese: "/productos o /productoRandom"
    });
});

app.get('/productos', (req, res)=> {
    (async () => {
        await productos.getAll().then((response) => {
            res.send(response);
        });
    })();
});

app.get('/productoRandom', (req, res)=> {
    (async () => {
        await productos.getAll().then((response) => {
            let random = Math.floor(Math.random() * response.length);
            res.send(response[random]);
        });
    })();
});