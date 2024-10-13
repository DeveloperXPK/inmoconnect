const bcrypt = require('bcrypt'); // Bcrypt para encriptar la contraseña
const token = require('../helpers/autenticacion'); // Token para la autenticacion
const Usuario = require('../models/usuarios'); // Usuario para la base de datos

// Funcion para registrar un nuevo usuario con validacion de datos
function registrarUsuario(req, res) {
    const { nombre, apellido, email, password, rol } = req.body // Desestructuracion de los datos del usuario

    const salt = bcrypt.genSaltSync(10); // Generacion de un salt aleatorio que es un hash de la contraseña
    const passwordHash = bcrypt.hashSync(password, salt) // Encriptamos la contraseña

    const usuario = new Usuario(); // Creamos un nuevo usuario
    usuario.nombre = nombre;
    usuario.apellido = apellido;
    usuario.email = email;
    usuario.password = passwordHash; // Asignamos la contraseña encriptada
    usuario.rol = rol; // Asignamos el rol del usuario (admin, basci)

    usuario.save()
    .then(
        (usuarioGuardado) => {
            res.status(200)
            .send({usuario: usuarioGuardado});
        },
        err => {
            res.status(500)
            .send({message: "Error al intentar crear el usuario"});
        }
    )
    Usuario.save() // Guardamos el usuario en la base de datos
        .then(
            // Si el usuario se guarda correctamente, enviamos un mensaje de confirmacion
            (usuarioGuardado) => {
                res.status(200)
                    .send({ usuario: usuarioGuardado });
            },
            // Si ocurre un error, enviamos un mensaje de error
            err => {
                res.status(500)
                    .send({ message: "Error al intentar crear el usuario" });
            }
        )
}

// Funcion para iniciar sesion mediante email y contraseña con validacion de datos
function iniciarSesion(req, res) {
    const { email, password } = req.body; // Desestructuracion de los datos del usuario

    Usuario.findOne({ email: email }) // Buscamos el usuario en la base de datos
        .then(
            (usuarioEncontrado) => {
                if (!usuarioEncontrado) { // Si no se encuentra el usuario retorna un mensaje de error
                    res.status(404)
                        .send({ message: "El usuario no existe" })
                } else {
                    // Si el usuario existe, comparamos la contraseña
                    // Verificamos si la contrasena coincide con la almacenada despues de desencriptarla
                    if (bcrypt.compareSync(password, usuarioEncontrado.password)) {
                        res.status(200)
                            .send({
                                message: "Inicio de sesion con exito",
                                token: token.generarToken(usuarioEncontrado) // Generamos un token para el usuario
                            })
                    }
                }
            },
            // Si ocurre un error, enviamos un mensaje de error
            err => {
                res.status(500)
                    .send({ message: "Error al buscar usuario" })
            }
        )
}

// Exportamos las funciones
module.exports = {
    registrarUsuario,
    iniciarSesion
}