import mongoose from "mongoose";

const Schema = mongoose.Schema;

const publicacionSchema = Schema({
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Publicacion', publicacionSchema);
