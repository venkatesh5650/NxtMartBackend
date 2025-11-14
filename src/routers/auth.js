import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import sqlite3 from "sqlite3";
import db from "../database_folder/db.js";

dotenv.config();
sqlite3.verbose();

const router = express.Router();

// Register
router.post("/register", (req, res) => {
  const { name, username, password, email } = req.body;

  if (!name || !email || !password || !username) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Check if user already exists
  db.get(
    "SELECT id FROM Users WHERE username = ?",
    [username],
    async (err, row) => {
      if (row)
        return res.status(400).json({ error: "Username already exists" });

      const hashedPassword = await bcrypt.hash(password, 10);

      db.run(
        "INSERT INTO Users (name, username, password, email) VALUES (?, ?, ?, ?)",
        [name, username, hashedPassword, email],
        function (err) {
          if (err) {
            console.error("DB Error:", err.message);
            return res.status(500).json({ error: "Failed to register user" });
          }
          res.status(201).json({
            message: "User registered successfully",
            userId: this.lastID,
          });
        }
      );
    }
  );
});

// Login
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res
      .status(400)
      .json({ error: "Username and password are required" });

  db.get("SELECT * FROM Users WHERE username = ?", [username], (err, user) => {
    if (err) return res.status(500).json({ error: "Database error" });
    if (!user)
      return res.status(400).json({ error: "Invalid username or password" });

    bcrypt.compare(password, user.password, (err, match) => {
      if (!match)
        return res.status(400).json({ error: "Invalid username or password" });

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
    });
  });
});

export default router;
