const Order = require("./Order");
const cartService = require("./cartService");
const gameService = require("./gameService");

const orders = [];
let nextOrderId = 1;

function placeOrder(userId) {
    const cart = cartService.getCart(userId);

    if (cart.items.length === 0) {
        throw new Error("Your cart is empty.");
    }

    // Check inventory before checkout
    for (const item of cart.items) {
        const game = gameService.getGameById(item.game.id);

        if (!game || game.quantity < item.quantity) {
            throw new Error("A game is out of stock.");
        }
    }

    const order = new Order(
        nextOrderId++,
        userId,
        cart.items,
        cart.getTotal()
    );

    // Update inventory
    for (const item of cart.items) {
        const game = gameService.getGameById(item.game.id);
        game.quantity -= item.quantity;
    }

    orders.push(order);

    // Empty the shopping cart
    cart.items = [];

    return order;
}

function getOrdersByUser(userId) {
    return orders.filter(order => order.userId === userId);
}

function getOrderById(id) {
    return orders.find(order => order.id === Number(id));
}

module.exports = {
    placeOrder,
    getOrdersByUser,
    getOrderById
};