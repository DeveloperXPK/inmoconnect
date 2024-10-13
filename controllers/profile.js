const Usuarios = require('../models/usuarios'); // Importamos el modelo de usuarios

// Funcion que muestra la pagina de perfil
function profilePage(req, res) {
    res.status(200).send("<h1>Welcome to your profile page!</h1>");
}

// Funcion que muestra los datos del usuario
function profileUser(req, res) {
    const idUsuario = req.params._id; // Obtenemos el id del usuario

    Usuarios.findById(idUsuario) // Buscamos el usuario en la base de datos
        .then(
            (usuarioEncontrado) => {
                res.status(200)
                    .send({
                        message: "Usuario encontrado",
                        usuario: usuarioEncontrado // Enviamos los datos del usuario
                    });
            },
            err => {
                res.status(404)
                    .send({ message: "Usuario no encontrado" })
            }
        )
}

// Exportamos las funciones
module.exports = {
    profilePage,
    profileUser
}