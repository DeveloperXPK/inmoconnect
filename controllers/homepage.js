function homepage(req, res) {
    res.status(200).send("<h1>Welcome to InmoConnect!</h1>"); // Enviamos un mensaje de bienvenida
}

module.exports = {
    homepage
}