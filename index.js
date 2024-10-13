const mongoose = require('mongoose'); // Importamos mongoose para la base de datos
const application = require('./application'); // Importamos la aplicacion

const desiredPORT = 3000 ?? process.env.PORT

// pc: mongodb://127.0.0.1:27017/bd

mongoose.connect('mongodb://127.0.0.1:27017/inmoconnect', { useNewUrlParser: true }) // Conectamos a la base de datos
    .then(
        () => {
            console.log(`Connect to database successfully`),
                application.listen(desiredPORT, () => {
                    console.log(`Server running on port http://localhost:${desiredPORT}`) // Escuchamos en el puerto deseado
                })
        },
        err => {
            console.log(`Error connecting to database: ${err}`) // Si ocurre un error, enviamos un mensaje de error
        }
    )


