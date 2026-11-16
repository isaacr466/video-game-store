const gameService = require("../services/gameService");
const userService = require("../services/userService");

const showHome = (req, res) => {
    res.render("home");
};

const showGames = (req, res) => {
    const games = gameService.getAllGames();
    res.render("games", { games });
};

const showAbout = (req, res) => {
    res.render("about");
};

const showRegister = (req, res) => {
    res.render("register", { error: null });
};

const registerUser = (req, res) => {
    let user;

    try {
        const { name, email } = req.body;
        user = userService.registerUser(name, email);
    } catch (error) {
        return res.status(400).render("register", {
            error: error.message
        });
    }

    req.session.userId = user.id;

    return res.render("registerSuccess", {
        name: user.name,
        userId: user.id
    });
};

module.exports = {
    showHome,
    showGames,
    showAbout,
    showRegister,
    registerUser
};