const app = require('./app'); // Import the app from app.js
// set port
const PORT = 3000;

// start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});