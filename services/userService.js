const User = require("./User");

// Store registered users
const users = [];

// Register a new user
function registerUser(name, email) {
    if (!name || !email) {
        throw new Error("Name and email are required.");
    }

    const existingUser = users.find(
        user => user.email.toLowerCase() === email.trim().toLowerCase()
    );

    if (existingUser) {
        throw new Error("This email is already registered.");
    }

    const user = new User(
        users.length + 1,
        name.trim(),
        email.trim()
    );

    users.push(user);
    return user;
}

// Find a user by ID
function getUserById(id) {
    return users.find(user => user.id === Number(id));
}

module.exports = { registerUser, getUserById };