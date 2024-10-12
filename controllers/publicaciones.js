const Publicaciones = require('../models/publicaciones');

function crearPublicacion(req, res) {

    const publicacionRecibida = req.body;
    const nuevaPublicacion = new Publicaciones();

    nuevaPublicacion.titulo = publicacionRecibida.titulo;
    nuevaPublicacion.precio = publicacionRecibida.precio;
    nuevaPublicacion.descripcion = publicacionRecibida.descripcion;
    nuevaPublicacion.imagenes = publicacionRecibida.imagenes;

    nuevaPublicacion.save()
    .then(
        (publicacionGuardada) => {
            res.status(200)
            .send({publicacionGuardada: publicacionGuardada})
        },
        err => {
            res.status(500)
            .send({message: "No se pudo crear publicacion"})
        }
    )
}

function editarPublicacion (req, res) {
    const idPublicacion = req.params._id
    const datosPublicacion = req.body

    const publicacionEditar = new Publicaciones()
    publicacionEditar._id = idPublicacion
    publicacionEditar.titulo = datosPublicacion.titulo
    publicacionEditar.precio = datosPublicacion.precio
    publicacionEditar.descripcion = datosPublicacion.descripcion
    publicacionEditar.imagenes = datosPublicacion.imagenes

    Publicaciones.findByIdAndUpdate(
        idPublicacion, 
        publicacionEditar, 
        {new: true} // {new: true} para que devuelva el curso actualizado
    ) 
    .then(
        (publicacionEditada) => {
            res.status(200)
            .send({publicacionEditada: publicacionEditada})
        },
        err => {
            res.status(500)
            .send({message: "No se pudo editar la publicacion"})
        }
    )
}

function obtenerPublicacion (req, res) {
    const idPublicacion = req.params._id

    Publicaciones.findById(idPublicacion)
    .then(
        (publicacionEncontrada) => {
            res.status(200)
            .send({publicacion: publicacionEncontrada})
        },
        err => {
            res.status(404)
            .send({message: "Publicacion no encontrada"})
        }
    )
}

function eliminarPublicacion (req, res) {
    const idPublicacion = req.params._id
    // Se podria crear un array de los cursos eliminados
    Publicaciones.findByIdAndDelete(idPublicacion)
    .then(
        (publicacionEliminada) => {
            res.status(200).send({publicacionEliminada: publicacionEliminada})
        },
        err => {
            res.status(500).send({message: 'No se pudo eliminar la publicacion'})
        }
    )
}

function consultarPublicaciones(req, res) {
    Publicaciones.find()
        .then(
            (publicaciones) => {
                res.status(200)
                    .send({ publicaciones: publicaciones });
            },
            err => {
                res.status(500)
                    .send({ message: 'Error al consultar las publicaciones' });
            }
        )
}


module.exports = {
    crearPublicacion,
    editarPublicacion,
    obtenerPublicacion,
    eliminarPublicacion,
    consultarPublicaciones
}
