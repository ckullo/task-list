// index.js
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const limiter = require('express-rate-limiter');

const rateLimiter = limiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

const app = express();

// Apply rate limiting to all requests
app.use(rateLimiter);

// Connect to the database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Define Routes
app.use('/api/todos', require('./routes/todos'));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
