function homepage(req, res) {
    res.status(200).send("<h1>Welcome to InmoConnect!</h1>");
}

module.exports = {
    homepage
}