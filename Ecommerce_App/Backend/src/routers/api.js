import express from "express";
import sqlite3 from "sqlite3";
import db from "../databases/db.js";
import authMiddleware from "../middleware/auth.js";

sqlite3.verbose();
const router = express.Router();

router.get("/products", authMiddleware, (req, res) => {
  const {
    search_q = "",
    category = "All",
    order_by = "id",
    order = "ASC",
  } = req.query;

  let query = `SELECT * FROM Products`;
  const params = [];
  const whereClauses = [];

  // CATEGORY FILTER (only if no search is happening)
  if (category.toLowerCase() !== "all" && search_q.trim() === "") {
    whereClauses.push("category LIKE ?");
    params.push(`%${category}%`);
  }

  // SEARCH FILTER — case insensitive, works fully
  if (search_q.trim() !== "") {
    whereClauses.push("LOWER(name) LIKE LOWER(?)");
    params.push(`%${search_q}%`);
  }

  // Apply WHERE conditions
  if (whereClauses.length > 0) {
    query += " WHERE " + whereClauses.join(" AND ");
  }

  // Sorting
  query += ` ORDER BY ${order_by} ${order}`;

  db.all(query, params, (err, rows) => {
    if (err) {
      console.error("DB Error:", err.message);
      return res.status(500).json({ error: "Failed to retrieve products" });
    }
    res.status(200).json(rows);
  });
});

export default router;
