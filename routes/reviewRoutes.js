const express = require("express");
const router = express.Router();

const reviewController = require("../controllers/reviewController");

// Require registration before submitting a review
function requireUser(req, res, next) {
    if (!req.session.userId) {
        return res.redirect("/register");
    }

    next();
}

// Display reviews for a game
router.get(
    "/games/:id/reviews",
    reviewController.showGameReviews
);

// Submit a review
router.post(
    "/reviews/add",
    requireUser,
    reviewController.submitReview
);

module.exports = router;