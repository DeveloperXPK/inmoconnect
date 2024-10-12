const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const publicacionSchema = Schema({
  titulo: String,
  precio: Number,
  descripcion: String,
  imagenes: String
})

module.exports = mongoose.model('Publicaciones', publicacionSchema);

