const express = require("express");
const router = express.Router();

// In-memory storage for users and inboxes
const users = {};

// Create a user with an inbox
router.post("/register", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send("Username and password are required.");
  }

  if (users[username]) {
    return res.status(409).send("User already exists.");
  }

  // Create an inbox URL
  const inboxUrl = `http://localhost:3000/inbox/${username}`;

  // Simulate an inbox (replace with actual inbox creation logic)
  const inbox = [];

  users[username] = {
    password,
    inbox,
  };

  res.status(201).json({ message: "User registered successfully", inboxUrl });
});

// View a user's inbox
router.get("/inbox/:username", (req, res) => {
  const { username } = req.params;
  const user = users[username];

  if (!user) {
    return res.status(404).send("User not found.");
  }

  res.json(user.inbox);
});

// Send an email to a user's inbox
router.post("/inbox/:username/send", (req, res) => {
  const { username } = req.params;
  const { subject, message } = req.body;
  const user = users[username];

  if (!user) {
    return res.status(404).send("User not found.");
  }

  if (!subject || !message) {
    return res.status(400).send("Subject and message are required.");
  }

  // Add the email to the user's inbox
  user.inbox.push({ subject, message });

  res.status(201).json({ message: "Email sent successfully." });
});

module.exports = router;
