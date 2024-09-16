const mongoose = require('mongoose');
const application = require('./application');

const desiredPORT = 3000 ?? process.env.PORT

mongoose.connect('mongodb://localhost:27017/inmoconnect', { useNewUrlParser: true })
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


