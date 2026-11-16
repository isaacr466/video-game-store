const Review = require("./Review");
const orderService = require("./orderService");
const gameService = require("./gameService");

const reviews = [];
let nextReviewId = 1;

function addReview(userId, gameId, rating, comment) {
    const game = gameService.getGameById(gameId);

    if (!game) {
        throw new Error("Game not found.");
    }

    const score = Number(rating);

    if (!Number.isInteger(score) || score < 1 || score > 5) {
        throw new Error("Rating must be between 1 and 5.");
    }

    if (typeof comment !== "string" || !comment.trim()) {
        throw new Error("Please enter a review.");
    }

    // Check whether the customer purchased this game
    const orders = orderService.getOrdersByUser(userId);

    const purchased = orders.some(order =>
        order.items.some(item => item.gameId === game.id)
    );

    if (!purchased) {
        throw new Error("You must purchase this game before reviewing it.");
    }

    // Allow one review per customer per game
    const existingReview = reviews.find(review =>
        review.userId === userId && review.gameId === game.id
    );

    if (existingReview) {
        throw new Error("You have already reviewed this game.");
    }

    const review = new Review(
        nextReviewId++,
        userId,
        game.id,
        score,
        comment.trim()
    );

    reviews.push(review);
    return review;
}

function getReviewsByGame(gameId) {
    return reviews.filter(review =>
        review.gameId === Number(gameId)
    );
}

module.exports = {
    addReview,
    getReviewsByGame
};