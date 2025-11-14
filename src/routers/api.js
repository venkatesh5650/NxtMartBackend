import express from "express";
import sqlite3 from "sqlite3";
import db from "../database_folder/db.js";
import authMiddleware from "../middleware/auth.js";

sqlite3.verbose();
const router = express.Router();

router.get("/products", (req, res) => {
  const {
    search_q = "",
    category = "All",
    order_by = "id",
    order = "ASC",
  } = req.query;
  g;

  let query = `SELECT * FROM Products`;
  const params = [];
  const whereClauses = [];

  console.log("SEARCH DEBUG:", {
    search_q,
    category,
    whereClauses,
    params,
  });

  // CATEGORY FILTER (only if no search is happening)
  if (category.toLowerCase() !== "all") {
    whereClauses.push("category = ?");
    params.push(category);
  }

  // SEARCH FILTER
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

  console.log("FINAL QUERY:", query);
  console.log("PARAMS:", params);

  db.all(query, params, (err, rows) => {
    if (err) {
      console.error("DB Error:", err.message);
      return res.status(500).json({ error: "Failed to retrieve products" });
    }
    res.status(200).json(rows);
  });
});

router.get("/products/:id", authMiddleware, (req, res) => {
  const { id } = req.params;

  const query = "SELECT * FROM Products WHERE id = ?";

  db.get(query, [id], (err, row) => {
    if (err) {
      return res.status(500).json({ error: "Failed to fetch product details" });
    }
    if (!row) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(row);
  });
});

export default router;
