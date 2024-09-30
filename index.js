const mongoose = require('mongoose');
const application = require('./application');

const desiredPORT = 3000 ?? process.env.PORT

// pc: mongodb://127.0.0.1:27017/bd

mongoose.connect('mongodb://127.0.0.1:27017/inmoconnect', { useNewUrlParser: true })
    .then(
        () => {
            console.log(`Connect to database successfully`),
                application.listen(desiredPORT, () => {
                    console.log(`Server running on port http://localhost:${desiredPORT}`)
                })
        },
        err => {
            console.log(`Error connecting to database: ${err}`)
        }
    )


