const express = require("express");
const router = express.Router();

const pageController = require("../controllers/pageController");

router.get("/", pageController.showHome);
router.get("/games", pageController.showGames);
router.get("/about", pageController.showAbout);

module.exports = router;