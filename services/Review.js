class Review {
    constructor(id, userId, gameId, rating, comment) {
        this.id = id;
        this.userId = userId;
        this.gameId = gameId;
        this.rating = rating;
        this.comment = comment;
        this.date = new Date();
    }
}

module.exports = Review;