const orderService = require("../services/orderService");

function checkout(req, res) {
    try {
        const order = orderService.placeOrder(req.session.userId);
        res.redirect(`/orders/${order.id}`);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

function showOrders(req, res) {
    const orders = orderService.getOrdersByUser(
        req.session.userId
    );

    res.render("orders", { orders });
}

function showOrderDetails(req, res) {
    const order = orderService.getOrderById(req.params.id);

    if (!order || order.userId !== req.session.userId) {
        return res.status(404).send("Order not found.");
    }

    res.render("orderDetails", { order });
}

module.exports = {
    checkout,
    showOrders,
    showOrderDetails
};