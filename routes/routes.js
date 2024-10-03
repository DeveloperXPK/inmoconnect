const express = require('express'); // Importamos express para crear las rutas
const routes = express.Router(); // Creamos un router para las rutas

//Controladores
const homepageController = require('../controllers/homepage'); // Importamos el controlador de la pagina de inicio
const profilePageController = require('../controllers/profile'); // Importamos el controlador de la pagina de perfil
const token = require('../helpers/autenticacion'); // Importamos el token para la autenticacion
const autenticacion = require('../controllers/autenticacion'); // Importamos el controlador de autenticacion


// Homepage
routes.get('/', homepageController.homepage); // Ruta para la pagina de inicio

// Profile page
routes.get('/profile/:_id',
    token.validarToken,
    profilePageController.profileUser
); // Ruta para la pagina de perfil

// Users
routes.get('/register', autenticacion.registrarUsuario); // Ruta para registrar un nuevo usuario
routes.get('/login', autenticacion.iniciarSesion); // Ruta para iniciar sesion

module.exports = routes; // Exportamos las rutas
