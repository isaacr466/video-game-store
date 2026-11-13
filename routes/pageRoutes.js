const express = require("express");
const router = express.Router();

const pageController = require("../controllers/pageController");

router.get("/", pageController.showHome);
router.get("/games", pageController.showGames);
router.get("/about", pageController.showAbout);

// Registration routes
router.get("/register", pageController.showRegister);
router.post("/register", pageController.registerUser);

module.exports = router;