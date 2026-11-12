
class Game {
    constructor(id, title, platform, price, description, quantity) {
        this.id = id;
        this.title = title;
        this.platform = platform;
        this.price = price;
        this.description = description;
        this.quantity = quantity;
    }

    isAvailable() {
        return this.quantity > 0;
    }
}

module.exports = Game;
