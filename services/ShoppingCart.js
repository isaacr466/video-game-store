class ShoppingCart {
    constructor(id, userId) {
        this.id = id;
        this.userId = userId;
        this.items = [];
    }

    // Add a game to the cart
    addGame(game, quantity = 1) {
        const item = this.items.find(
            item => item.game.id === game.id
        );

        if (item) {
            item.quantity += quantity;
        } else {
            this.items.push({ game, quantity });
        }
    }

    // Change the quantity of a game
    updateQuantity(gameId, quantity) {
        const item = this.items.find(
            item => item.game.id === Number(gameId)
        );

        if (item) {
            item.quantity = quantity;
        }
    }

    // Remove a game from the cart
    removeGame(gameId) {
        this.items = this.items.filter(
            item => item.game.id !== Number(gameId)
        );
    }

    // Calculate the total price
    getTotal() {
        return this.items.reduce(
            (total, item) =>
                total + item.game.price * item.quantity,
            0
        );
    }
}

module.exports = ShoppingCart;