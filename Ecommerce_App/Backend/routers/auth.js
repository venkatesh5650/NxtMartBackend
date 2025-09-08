const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const router = express.Router();

const db = require("../Database/db");

router.post("/register", async (req, res) => {
  const { name, username, password, email } = req.body;
  if (!name || !email || !password || !username) {
    return res.status(400).json({ error: "All fields are required" });
  }

  hashedPassword = await bcrypt.hash(password, 10);

  const query = `INSERT INTO Users (name, username, password, email) VALUES (?, ?, ?, ?)`;
  db.run(query, [name, username, hashedPassword, email], function (err) {
    if (err) {
      console.error("DB Error:", err.message);
      res.status(400).json({ error: "User already exists or invalid data" });
    } else res.status(201).json({ message: "User registered successfully", userId: this.lastID });
  });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required" });
  }
  const query = `SELECT * FROM Users WHERE username = ?`;
  db.get(query, [username], async (err, user) => {
    if (err) {
      console.error("DB Error:", err.message);
      return res.status(500).json({ error: "Internal server error" });
    }
    if (!user)
      return res.status(400).json({ error: "Invalid username or password" });

    const match = await bcrypt.compare(password, user.password);
    if (!match)
      return res.status(400).json({ error: "Invalid username or password" });

    // Generate JWT
    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res
      .status(200)
      .json({
        message: "Login successful",
        token,
        userId: user.id,
        username: user.username,
      });
  });
});

module.exports = router;
