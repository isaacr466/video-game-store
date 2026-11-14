const express = require("express");
const router = express.Router();

const cartController = require("../controllers/cartController");

// Check if a user has registered
function requireUser(req, res, next) {
    if (!req.session.userId) {
        return res.redirect("/register");
    }

    next();
}

// Shopping cart routes
router.get("/cart", requireUser, cartController.showCart);

router.post("/cart/add", requireUser, cartController.addToCart);

router.post("/cart/update", requireUser, cartController.updateCart);

router.post("/cart/remove", requireUser, cartController.removeFromCart);

module.exports = router;