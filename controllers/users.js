function register(req, res) {
    res.status(200).send("<h1>Welcome to the registration page!</h1>");
}

function login(req, res) {
    res.status(200).send("<h1>Welcome to the login page!</h1>");
}

module.exports = {
    register,
    login
}