
const db = require("../config/db");

const sendMessage = (req, res) => {
  const { name, email, subject, message } = req.body;

  // Check required fields
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required."
    });
  }

  const sql = `
    INSERT INTO contact_messages
    (name, email, subject, message)
    VALUES (?, ?, ?, ?)
  `;

  db.query(
    sql,
    [name, email, subject, message],
    (err, result) => {
      if (err) {
        console.error(err);

        return res.status(500).json({
          success: false,
          message: "Failed to save your message."
        });
      }

      res.status(201).json({
        success: true,
        message: "Your message was sent successfully!",
        messageId: result.insertId
      });
    }
  );
};

module.exports = { sendMessage };
