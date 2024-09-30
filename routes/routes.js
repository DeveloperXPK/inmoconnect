const express = require('express');
const routes = express.Router();

//Controladores
const homepageController = require('../controllers/homepage');
const profilePageController = require('../controllers/profile');
const token = require('../helpers/autenticacion');
const autenticacion = require('../controllers/autenticacion');


// Homepage
routes.get('/', homepageController.homepage);

// Profile page
routes.get('/profile/:_id',
    token.validarToken,
    profilePageController.profileUser
);

// Users
routes.get('/register', autenticacion.registrarUsuario);
routes.get('/login', autenticacion.iniciarSesion);

module.exports = routes;