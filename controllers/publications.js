const Publicacion = require('../models/publicaciones');

function publish(req, res) {
  const {
    titulo,
    descripcion,
    tipo,
    precio,
    direccion,
    caracteristicas,
    imagenes,
    propietario,
    fechaPublicacion
  } = req.body; // Desestructuracion de los datos de la publicacion

  // Creamos una nueva publicacion
  const publicacion = new Publicacion();
  publicacion.titulo = titulo;
  publicacion.descripcion = descripcion;
  publicacion.tipo = tipo;
  publicacion.precio = precio;
  publicacion.direccion = direccion;
  publicacion.caracteristicas = caracteristicas;
  publicacion.imagenes = imagenes;
  publicacion.propietario = propietario;
  publicacion.fechaPublicacion = fechaPublicacion;

  Publicacion.save() // Guardamos la publicacion en la base de datos
    .then(
      (publicacionGuardada) => {
        res.status(200)
          .send({
            message: "Publicacion creada correctamente", // Enviamos un mensaje de confirmacion
            publicacion: publicacionGuardada // Enviamos los datos de la publicacion
          })
      },
      // Si ocurre un error, enviamos un mensaje de error
      err => {
        res.status(500)
          .send({
            message: "Error al crear la publicacion"
          })
      }
    )
}

// Exportamos la funcion
module.exports = {
  publish
}