const express = require("express");
const router = express.Router();

const pageController = require("../controllers/pageController");

// Homepage route
router.get("/", pageController.showHome);

module.exports = router;