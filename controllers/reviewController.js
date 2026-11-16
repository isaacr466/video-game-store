const reviewService = require("../services/reviewService");
const gameService = require("../services/gameService");

function showGameReviews(req, res) {
    const game = gameService.getGameById(req.params.id);

    if (!game) {
        return res.status(404).send("Game not found.");
    }

    const reviews = reviewService.getReviewsByGame(game.id);

    res.render("reviews", { game, reviews });
}

function submitReview(req, res) {
    try {
        const { gameId, rating, comment } = req.body;

        reviewService.addReview(
            req.session.userId,
            gameId,
            rating,
            comment
        );

        res.redirect(`/games/${gameId}/reviews`);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    showGameReviews,
    submitReview
};