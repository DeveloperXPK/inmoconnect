const express = require('express');

//Controladores
const homepageController = require('../controllers/homepage');
const profilePageController = require('../controllers/profile');
const users = require('../controllers/users');

const routes = express.Router();

// Homepage
routes.get('/', homepageController.homepage);

// Profile page
routes.get('/profile', profilePageController.profilePage)

// Users
routes.get('/register', users.register);
routes.get('/login', users.login);

module.exports = routes;