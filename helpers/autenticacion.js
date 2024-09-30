const moment = require('moment');
const jwt = require('jwt-simple');

// Clave secreta para encriptar el token
const SECRET = 'asdfhklsJASCKBILM2345../asdav';


// Función para generar un token
function generarToken(usuario) {

    // Crear el payload del token que es la información que se va a encriptar
    const payload = {
        sub: usuario.id,
        name: usuario.nombre,
        email: usuario.email,
        rol: usuario.rol,
        iat: moment.unix(), // Fecha de creación del token
        exp: moment().add(5, 'minutes').unix() // Fecha de expiración del token
    }

    // Devolver el token encriptado
    return jwt.encode(payload, SECRET);
}


// Función para validar el token
function validarToken(req, res, next) {

    // Manejar el error si no se envía el token
    try {

        /*
        Verificar si se envía el token en los headers y extraerlo de la cabecera
        se utiliza el split para separar el token de la palabra Bearer
        */
        const token =
            req.headers.authorization.split(' ')[1];

        // Decodificar el token para obtener el payload
        const payload = jwt.decode(token, SECRET);

        // Guardar el id del usuario en el header
        req.header.UserId = payload.sub;

        // Guardar el rol del usuario en el header
        req.header.UserRol = payload.rol;

        next(); // Continuar con la petición

    } catch (error) {
        // Manejar el error si el token no es válido
        res.status(403)
            .send({ message: 'No se pudo iniciar sesión' });
    }
}


// Función para validar los permisos
function validarPermiso(rolesPermitidos) {
    // Devolver una función que se ejecutará en la ruta
    return (req, res, next) => {

        // Verificar si el rol del usuario está en los roles permitidos
        if (rolesPermitidos.includes(req.header.UserRol)) {

            // Continuar con la petición
            next();

        } else {
            // Manejar el error si el usuario no tiene permiso para realizar la acción
            res.status(403)
                .send({ message: 'No tienes permiso para realizar esta acción' });
        }
    }
}

// Exportar las funciones
module.exports = {
    generarToken,
    validarToken,
    validarPermiso
}