const cartService = require("../services/cartService");

// Display shopping cart
const showCart = (req, res) => {
    const cart = cartService.getCart(req.session.userId);

    res.render("cart", {
        cart,
        error: null
    });
};

// Add a game to the cart
const addToCart = (req, res) => {
    try {
        const { gameId, quantity } = req.body;

        cartService.addToCart(
            req.session.userId,
            gameId,
            quantity
        );

        res.redirect("/cart");
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// Update game quantity
const updateCart = (req, res) => {
    try {
        const { gameId, quantity } = req.body;

        cartService.updateCart(
            req.session.userId,
            gameId,
            quantity
        );

        res.redirect("/cart");
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// Remove a game
const removeFromCart = (req, res) => {
    try {
        cartService.removeFromCart(
            req.session.userId,
            req.body.gameId
        );

        res.redirect("/cart");
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports = {
    showCart,
    addToCart,
    updateCart,
    removeFromCart
};