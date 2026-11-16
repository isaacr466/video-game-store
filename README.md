# Video Game Store

A video game shopping website created for my CSCI 3330 project.

This project uses Node.js, Express.js, and EJS to create a website where users can browse games, register, add games to a cart, place orders, and write reviews.

## Technologies Used

- Node.js
- Express.js
- EJS
- JavaScript
- HTML
- CSS
- Express Session
- Helmet

## Features

### 1. User Registration
- Users can register with their name and email.
- Registration information is validated.
- User sessions are created after registration.
- A registration success page displays the user's name and account ID.
- Error messages are displayed when registration fails.

### 2. Video Game Catalog
- Displays five video games:
  - Halo Infinite
  - Minecraft
  - Spider-Man 2
  - Mario Kart 8 Deluxe
  - Elden Ring
- Each game includes:
  - Cover image
  - Title
  - Platform
  - Price
  - Description
  - Stock availability
- Games are displayed in a responsive grid layout.

### 3. Shopping Cart
- Users can add games to their cart.
- Users can update quantities.
- Users can remove games.
- Quantities are limited by available stock.
- Cart totals are calculated automatically.

### 4. Checkout and Orders
- Users can complete checkout.
- Orders contain purchased games and quantities.
- Order totals are calculated.
- Users can view their order history.

### 5. Game Reviews
- Users can view reviews for individual games.
- Users can submit ratings and written reviews.
- Only users who purchased a game can review it.
- Reviews appear on the game's review page.

## Website Pages

- Home
- Games
- About
- Register
- Registration Success
- Cart
- Orders
- Game Reviews

## Project Structure

```text
video-game-store/
├── controllers/
├── routes/
├── services/
├── views/
│   ├── partials/
│   ├── home.ejs
│   ├── games.ejs
│   ├── about.ejs
│   ├── register.ejs
│   └── registerSuccess.ejs
├── public/
│   ├── css/
│   │   └── style.css
│   └── images/
├── server.js
├── package.json
└── README.md
```

## How to Run the Project

### Step 1: Install Dependencies

Open a terminal inside the project folder and run:

```bash
npm install
```

### Step 2: Start the Server

```bash
node server.js
```

### Step 3: Open the Website

Visit:

http://localhost:3000

## Design and Styling

- Dark-themed website
- Blue navigation bar accents and buttons
- Centered forms and content
- Responsive game catalog
- Game cover images
- Styled registration success page
- Consistent navigation and footer

## Security and Error Handling

- Helmet middleware for HTTP security headers
- Express sessions for user identification
- Input validation during registration
- EJS output escaping
- Custom 404 error handling
- Server error handling

## Testing Completed

The following features were tested:

- [x] User registration
- [x] Registration success page
- [x] Game catalog and images
- [x] Adding games to cart
- [x] Updating cart quantities
- [x] Checkout
- [x] Order history
- [x] Submitting game reviews
- [x] Responsive game grid layout
- [x] Registration page styling

## Recent Updates

### Final Styling and Testing
- Added cover images for all five games.
- Added the `getImage()` method to the Game class.
- Changed the game catalog to a responsive three-column grid.
- Improved game card styling and alignment.
- Centered the registration form.
- Removed unnecessary spacing between form fields.
- Created a styled registration success page.
- Fixed the duplicate response error that caused the server to crash.
- Tested registration, shopping cart, checkout, orders, and reviews.

## Project Status

All five main project features have been implemented and tested.

The website is ready for final review and submission.

## Course

CSCI 3330 - Video Game Store Project