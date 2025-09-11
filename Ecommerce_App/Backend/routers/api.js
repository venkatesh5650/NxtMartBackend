const express = require("express");
const Database = require("better-sqlite3");

const router = express.Router();
const db = new Database("./Products.db");

// Get all products
router.get("/products", (req, res) => {
  const {
    search_q = "",
    category = "All",
    order_by = "id",
    order = "ASC",
  } = req.query;

  try {
    let query;
    let rows;

    if (category === "All" || category.trim() === "") {
      query = `SELECT * FROM Products ORDER BY ${order_by} ${order}`;
      rows = db.prepare(query).all();
    } else {
      query = `SELECT * FROM Products WHERE category LIKE ? ORDER BY ${order_by} ${order}`;
      rows = db.prepare(query).all(`%${category}%`);
    }

    res.status(200).json(rows);
  } catch (err) {
    console.error("DB Error:", err.message);
    res.status(500).json({ error: "Failed to retrieve products" });
  }
});

module.exports = router;
