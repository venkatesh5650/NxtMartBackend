import db from "../config/db.js";

// GET /products
export const getAllProducts = (req, res) => {
  const {
    search_q = "",
    category = "All",
    order_by = "id",
    order = "ASC",
  } = req.query;

  let query = `SELECT * FROM Products`;
  const params = [];
  const whereClauses = [];

  // Category filter
  if (category.toLowerCase() !== "all") {
    whereClauses.push("category = ?");
    params.push(category);
  }

  // Search filter
  if (search_q.trim() !== "") {
    whereClauses.push("LOWER(name) LIKE LOWER(?)");
    params.push(`%${search_q}%`);
  }

  // Apply WHERE
  if (whereClauses.length > 0) {
    query += " WHERE " + whereClauses.join(" AND ");
  }

  // Safe sorting (security)
  const allowedOrderColumns = ["id", "price", "name", "category"];
  const allowedOrderDirections = ["ASC", "DESC"];

  const finalOrderBy = allowedOrderColumns.includes(order_by) ? order_by : "id";
  const finalOrder = allowedOrderDirections.includes(order) ? order : "ASC";

  query += ` ORDER BY ${finalOrderBy} ${finalOrder}`;

  db.all(query, params, (err, rows) => {
    if (err) {
      console.error("DB Error:", err.message);
      return res.status(500).json({ error: "Failed to retrieve products" });
    }
    res.status(200).json(rows);
  });
};

// GET /products/:id
export const getProductById = (req, res) => {
  const { id } = req.params;

  db.get("SELECT * FROM Products WHERE id = ?", [id], (err, row) => {
    if (err) {
      return res.status(500).json({ error: "Failed to fetch product details" });
    }
    if (!row) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(row);
  });
};
