function profilePage(req, res) {
    res.status(200).send("<h1>Welcome to your profile page!</h1>");
}

module.exports = {
    profilePage
}