const express = require("express");
const path = require("path");
const helmet = require("helmet");
const session = require("express-session");
const crypto = require("crypto");

const app = express();
const PORT = 3000;

// Security middleware
app.use(helmet({
    contentSecurityPolicy: false
}));

// Set up EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sessions for registered users
app.use(session({
    secret: process.env.SESSION_SECRET || crypto.randomBytes(32).toString("hex"),
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        sameSite: "lax"
    }
}));

// Routes
const pageRoutes = require("./routes/pageRoutes");
app.use("/", pageRoutes);

const cartRoutes = require("./routes/cartRoutes");
app.use("/", cartRoutes);

const orderRoutes = require("./routes/orderRoutes");
app.use("/", orderRoutes);

const reviewRoutes = require("./routes/reviewRoutes");
app.use("/", reviewRoutes);

// Handle pages that do not exist
app.use((req, res) => {
    res.status(404).send("404 - Page Not Found");
});

// Handle unexpected server errors
app.use((err, req, res, next) => {
    console.error(err);

    if (res.headersSent) {
        return next(err);
    }

    res.status(500).send(
        "Something went wrong. Please try again later."
    );
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});