const showHome = (req, res) => {
    res.render("home");
};

const showGames = (req, res) => {
    res.render("games");
};

const showAbout = (req, res) => {
    res.render("about");
};

module.exports = { showHome, showGames, showAbout };