
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./config/db");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("JANET.DEV Backend is running successfully!");
});

// Test API route
app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to JANET.DEV API!"
  });
});

// Server port
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
