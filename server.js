const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Set up EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Allow CSS, images, and JavaScript files
app.use(express.static(path.join(__dirname, "public")));

// Allow form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Homepage
app.get("/", (req, res) => {
    res.render("home");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});