const express = require("express");
const router = express.Router();

const orderController = require("../controllers/orderController");

// Require registration before accessing orders
function requireUser(req, res, next) {
    if (!req.session.userId) {
        return res.redirect("/register");
    }

    next();
}

// Place an order
router.post("/checkout", requireUser, orderController.checkout);

// View order history
router.get("/orders", requireUser, orderController.showOrders);

// View a specific order
router.get("/orders/:id", requireUser, orderController.showOrderDetails);

module.exports = router;