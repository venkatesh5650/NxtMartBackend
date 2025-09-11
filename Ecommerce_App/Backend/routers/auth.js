const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const router = express.Router();
const db = require("../Database/db");

// Register
router.post("/register", async (req, res) => {
  const { name, username, password, email } = req.body;
  if (!name || !email || !password || !username) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const stmt = db.prepare(
      "INSERT INTO Users (name, username, password, email) VALUES (?, ?, ?, ?)"
    );
    const result = stmt.run(name, username, hashedPassword, email);

    res.status(201).json({
      message: "User registered successfully",
      userId: result.lastInsertRowid,
    });
  } catch (err) {
    console.error("DB Error:", err.message);
    res.status(400).json({ error: "User already exists or invalid data" });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required" });
  }

  try {
    const user = db
      .prepare("SELECT * FROM Users WHERE username = ?")
      .get(username);

    if (!user) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Login successful",
      jwt_token: token,
      userId: user.id,
      username: user.username,
    });
  } catch (err) {
    console.error("DB Error:", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
