class Order {
    constructor(id, userId, items, total) {
        this.id = id;
        this.userId = userId;

        this.items = items.map(item => ({
            gameId: item.game.id,
            title: item.game.title,
            price: item.game.price,
            quantity: item.quantity
        }));

        this.total = total;
        this.status = "Placed";
        this.date = new Date();
    }
}

module.exports = Order;