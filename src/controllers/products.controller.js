import db from "../config/db.js";

// GET /products
export const getAllProducts = (req, res) => {
  const {
    search_q = "",
    category = "All",
    order_by = "id",
    order = "ASC",
    page = 1,
    limit = 10,
  } = req.query;

  const offset = (page - 1) * limit; 

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

  //  COUNT QUERY FOR TOTAL PRODUCTS (PAGINATION)
  const countQuery =
    "SELECT COUNT(*) AS total FROM Products" +
    (whereClauses.length ? " WHERE " + whereClauses.join(" AND ") : "");

  // Safe sorting (security)
  const allowedOrderColumns = ["id", "price", "name", "category"];
  const allowedOrderDirections = ["ASC", "DESC"];

  const finalOrderBy = allowedOrderColumns.includes(order_by) ? order_by : "id";
  const finalOrder = allowedOrderDirections.includes(order) ? order : "ASC";

  query += ` ORDER BY ${finalOrderBy} ${finalOrder}`;

  //  LIMIT + OFFSET ADDED (PAGINATION)
  query += ` LIMIT ? OFFSET ?`;
  params.push(limit, offset);

  //  First get total products count
  db.get(countQuery, params.slice(0, params.length - 2), (err, countResult) => {
    if (err) {
      console.error("Count Error:", err.message);
      return res.status(500).json({ error: "Failed to count products" });
    }

    const totalProducts = countResult.total;
    const totalPages = Math.ceil(totalProducts / limit);

    //  Then get paginated products
    db.all(query, params, (err, rows) => {
      if (err) {
        console.error("DB Error:", err.message);
        return res.status(500).json({ error: "Failed to retrieve products" });
      }

      res.status(200).json({
        products: rows, 
        totalProducts,
        totalPages,
        currentPage: Number(page),
      });
    });
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
