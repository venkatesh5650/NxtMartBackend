const express = require("express");
const Database = require("better-sqlite3");
const authMiddleware = require("../middleware/auth");

const router = express.Router();
const db = new Database("./Products.db");

// Get all products
router.get("/products", authMiddleware, (req, res) => {
  const {
    search_q = "",
    category = "",
    order_by = "id",
    order = "ASC",
  } = req.query;

  const query = `SELECT * FROM products where category LIKE ? order by ${order_by} ${order}`;

  db.all(query, [`%${category}%`], (err, rows) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: "Failed to retrieve products" });
    }
    res.status(200).json(rows);
  });
});

module.exports = router;
