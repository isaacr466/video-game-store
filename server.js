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

const session = require("express-session");
const crypto = require("crypto");

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

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});