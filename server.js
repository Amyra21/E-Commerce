const express = require('express');
const app = express();
const port = 4000;
// Serve static files from the "public" directory
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
});

app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/public/signup.html');
});

// Serve static files from the "public" directory
app.use(express.static('public'));

// Route handlers for each feature
app.get('/mail_tracking', (req, res) => {
    res.sendFile(__dirname + '/public/mail_tracking.html');
});

app.get('/package_pickup', (req, res) => {
    res.sendFile(__dirname + '/public/package_pickup.html');
});

app.get('/shipping_calculation', (req, res) => {
    res.sendFile(__dirname + '/public/shipping_calculation.html');
});

app.get('/address_validation', (req, res) => {
    res.sendFile(__dirname + '/public/address_validation.html');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

