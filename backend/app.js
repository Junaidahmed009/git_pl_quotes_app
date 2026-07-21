// import express: sets up the server and handles routes
const express = require('express');

// import cors: allows your frontend (running on a different port) to access the backend
const cors = require('cors');

// import quotes
const quotes = require('./quotes');

// initializing express app
const app = express();

app.use(cors());

// POST requests
app.use(express.json());

// route to get random quote
app.get('/api/quote', (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];

    res.json({ quote });
});

module.exports = app; // Export the app for testing purposes

