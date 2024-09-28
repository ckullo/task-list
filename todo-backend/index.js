// index.js
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Define Routes
app.use("/api/todos", require("./routes/todos"));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
