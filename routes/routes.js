const express = require('express');

//Controladores
const homepageController = require('../controllers/homepage');
const profilePageController = require('../controllers/profile');
const users = require('../controllers/autenticacion');

const routes = express.Router();

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