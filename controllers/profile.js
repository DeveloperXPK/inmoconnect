const Usuarios = require('../models/usuarios');

function profilePage(req, res) {
    res.status(200).send("<h1>Welcome to your profile page!</h1>");
}

function profileUser(req, res) {
    const idUsuario = req.params._id;

    Usuarios.findById(idUsuario)
    .then(
        (usuarioEncontrado) => {
            res.status(200)
            .json(usuarioEncontrado)
        },
        err => {
            res.status(404)
            .send({message: "Usuario no encontrado"})
        }
    )
}

module.exports = {
    profilePage,
    profileUser
}