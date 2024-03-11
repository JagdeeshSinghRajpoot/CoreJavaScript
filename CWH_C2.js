// Install required dependencies:
// npm install express body-parser

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Change this to your desired port

// Middleware to parse incoming JSON data
app.use(bodyParser.json());

// Simulated user database (replace with your actual database)
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
];

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if user exists
  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    // Successful login
    res.status(200).json({ message: 'Login successful', user });
  } else {
    // Invalid credentials
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
