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

    getImage() {
        const images = {
            1: "halo.jpg",
            2: "minecraft.jpg",
            3: "spiderman.jpg",
            4: "mariokart.jpg",
            5: "eldenring.jpg"
        };

        return "/images/" + images[this.id];
    }
}

module.exports = Game;