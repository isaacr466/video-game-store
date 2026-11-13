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
    try {
        const { name, email } = req.body;
        const user = userService.registerUser(name, email);

        res.send(`
            <h1>Registration Successful!</h1>
            <p>Welcome, ${escapeHtml(user.name)}!</p>
            <p>Your account ID is ${user.id}.</p>
            <a href="/games">Browse Games</a>
        `);
    } catch (error) {
        res.status(400).render("register", {
            error: error.message
        });
    }
};

function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);
}

module.exports = {
    showHome,
    showGames,
    showAbout,
    showRegister,
    registerUser
};