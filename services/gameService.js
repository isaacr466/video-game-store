const Game = require("./Game");

// Create video game objects
const games = [
    new Game(1, "Halo Infinite", "Xbox", 59.99,
        "A sci-fi action game.", 10),

    new Game(2, "Minecraft", "PC", 29.99,
        "Build and explore your own world.", 15),

    new Game(3, "Spider-Man 2", "PS5", 69.99,
        "Play as Spider-Man and protect the city.", 8),

    new Game(4, "Mario Kart 8 Deluxe", "Switch", 59.99,
        "Race against friends and family.", 12),

    new Game(5, "Elden Ring", "PC", 59.99,
        "Explore a fantasy world full of challenges.", 6)
];

// Return all games
function getAllGames() {
    return games;
}

// Find a game by ID
function getGameById(id) {
    return games.find(game => game.id === Number(id));
}

module.exports = { getAllGames, getGameById };