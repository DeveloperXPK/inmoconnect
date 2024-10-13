const express = require('express'); // Importamos express para crear las rutas
const routes = express.Router(); // Creamos un router para las rutas

//Controladores
const homepageController = require('../controllers/homepage');
const profilePageController = require('../controllers/profile');
const autenticacionController = require('../controllers/autenticacion');
const publicacionesController = require('../controllers/publicaciones');
const token = require('../helpers/autenticacion');


// Homepage
routes.get('/', homepageController.homepage); // Ruta para la pagina de inicio

// Profile page
routes.get('/profile/:_id',
    token.validarToken,
    profilePageController.profileUser
); // Ruta para la pagina de perfil

// Publicaciones
routes.post('/publicaciones', 
    token.validarToken,
    token.validarPermiso(['admin', 'user']),
    publicacionesController.crearPublicacion
);
routes.put('/publicaciones/:_id', 
    token.validarToken,
    token.validarPermiso(['admin', 'user']),
    publicacionesController.editarPublicacion
);
routes.get('/publicaciones/:_id',
    token.validarToken,
    token.validarPermiso(['admin', 'user']),
    publicacionesController.obtenerPublicacion
);
routes.delete('/publicaciones/:_id', 
    token.validarToken,
    token.validarPermiso(['admin', 'user']),
    publicacionesController.eliminarPublicacion
);

routes.get('/publicaciones',
    token.validarToken,
    token.validarPermiso(['admin']),
    publicacionesController.consultarPublicaciones
);

// Users
routes.get('/register', autenticacionController.registrarUsuario);
routes.get('/login', autenticacionController.iniciarSesion);

module.exports = routes; // Exportamos las rutas
