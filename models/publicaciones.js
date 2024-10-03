const mongoose = require('mongoose'); // Importamos mongoose para la base de datos

const Schema = mongoose.Schema; // Creamos un esquema para la base de datos

const PublicacionSchema = Schema({
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        enum: ['venta', 'alquiler'], // Tipo de publicacion (venta o alquiler)
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    direccion: {
        calle: String,
        numero: String,
        ciudad: String,
        codigoPostal: String
    },
    caracteristicas: {
        habitaciones: Number,
        banos: Number,
        superficie: Number
    },
    imagenes: [String],
    propietario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuarios',
        required: true
    },
    fechaPublicacion: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

module.exports = mongoose.model('Publicaciones', PublicacionSchema);
