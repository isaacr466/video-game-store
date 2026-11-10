const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Set up EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
const pageRoutes = require("./routes/pageRoutes");
app.use("/", pageRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});