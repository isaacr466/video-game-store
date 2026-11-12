
const gameService = require("../services/gameService");

// Homepage
const showHome = (req, res) => {
    res.render("home");
};

// Games page
const showGames = (req, res) => {
    const games = gameService.getAllGames();
    res.render("games", { games });
};

// About page
const showAbout = (req, res) => {
    res.render("about");
};

module.exports = { showHome, showGames, showAbout };
