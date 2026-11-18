
const express = require("express");

const router = express.Router();

const {
  sendMessage
} = require("../controllers/contactController");

// POST route
router.post("/", sendMessage);

module.exports = router;
