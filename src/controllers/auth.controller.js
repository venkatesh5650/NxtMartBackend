import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../config/db.js";
import dotenv from "dotenv";
import { registerSchema, loginSchema } from "../validators/validation.js";

dotenv.config();

// POST /register
export const registerUser = (req, res) => {
  const validation = registerSchema.safeParse(req.body);

  if (!validation.success) {
    return res.status(400).json({
      error: validation.error.errors[0].message,
    });
  }

  const { name, username, password, email } = validation.data;

  db.get(
    "SELECT id FROM Users WHERE username = ?",
    [username],
    async (err, row) => {
      if (row) {
        return res.status(400).json({ error: "Username already exists" });
      }

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
};

// POST /login
export const loginUser = (req, res) => {
  const validation = loginSchema.safeParse(req.body);

  if (!validation.success) {
    return res
      .status(400)
      .json({ error: "Username and password are required" });
  }

  const { username, password } = validation.data;

  db.get("SELECT * FROM Users WHERE username = ?", [username], (err, user) => {
    if (err) return res.status(500).json({ error: "Database error" });

    if (!user) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    bcrypt.compare(password, user.password, (err, match) => {
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
    });
  });
};
