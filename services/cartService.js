const ShoppingCart = require("./ShoppingCart");
const gameService = require("./gameService");

// Store shopping carts in memory
const carts = new Map();

// Get or create a user's cart
function getCart(userId) {
    if (!carts.has(userId)) {
        carts.set(userId, new ShoppingCart(carts.size + 1, userId));
    }

    return carts.get(userId);
}

// Add a game to the cart
function addToCart(userId, gameId, quantity) {
    const game = gameService.getGameById(gameId);
    const amount = Number(quantity);

    if (!game) {
        throw new Error("Game not found.");
    }

    if (!Number.isInteger(amount) || amount < 1) {
        throw new Error("Invalid quantity.");
    }

    const cart = getCart(userId);

    const existingItem = cart.items.find(
        item => item.game.id === game.id
    );

    const currentQuantity = existingItem ? existingItem.quantity : 0;

    if (currentQuantity + amount > game.quantity) {
        throw new Error("Not enough games in stock.");
    }

    cart.addGame(game, amount);
    return cart;
}

// Update a game's quantity
function updateCart(userId, gameId, quantity) {
    const cart = getCart(userId);
    const game = gameService.getGameById(gameId);
    const amount = Number(quantity);

    if (!game) {
        throw new Error("Game not found.");
    }

    if (!Number.isInteger(amount) || amount < 1) {
        throw new Error("Quantity must be at least 1.");
    }

    if (amount > game.quantity) {
        throw new Error("Not enough games in stock.");
    }

    const item = cart.items.find(
        item => item.game.id === game.id
    );

    if (!item) {
        throw new Error("Game is not in your cart.");
    }

    cart.updateQuantity(gameId, amount);
    return cart;
}

// Remove a game from the cart
function removeFromCart(userId, gameId) {
    const cart = getCart(userId);
    cart.removeGame(gameId);
    return cart;
}

module.exports = {
    getCart,
    addToCart,
    updateCart,
    removeFromCart
};