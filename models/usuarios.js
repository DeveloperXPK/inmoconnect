const mongoose = require('mongoose'); // Importamos mongoose para la base de datos

const Schema = mongoose.Schema; // Creamos un esquema para la base de datos

const UsuarioSchema = Schema({
    nombre: String,
    apellido: String,
    email: String,
    password: String,
    rol: String
});

module.exports = mongoose.model('Usuarios', UsuarioSchema); // Exportamos el modelo de usuarios
