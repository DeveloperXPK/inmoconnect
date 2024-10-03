const express = require('express'); // Importamos express para crear la aplicacion
const bodyParser = require('body-parser'); // Importamos body-parser para parsear los datos de las solicitudes
const routes = require('./routes/routes') // Importamos las rutas

const app = express(); // Creamos la aplicacion

app.use(bodyParser.urlencoded({ extended: false })); // Parseamos los datos de las solicitudes
app.use(bodyParser.json());
app.use(routes)

module.exports = app; // Exportamos la aplicacion