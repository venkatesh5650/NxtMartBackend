import db from "../config/db.js";

// Fetch total count based on filters
export const getTotalCount = (countQuery, params) => {
  return new Promise((resolve, reject) => {
    db.get(countQuery, params, (err, row) => {
      if (err) return reject(err);
      resolve(row.total);
    });
  });
};

// Fetch paginated products
export const getPaginatedProducts = (query, params) => {
  return new Promise((resolve, reject) => {
    db.all(query, params, (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
};

// Fetch single product (user only)
export const fetchProductById = (id) => {
  return new Promise((resolve, reject) => {
    db.get(
      "SELECT * FROM Products WHERE id = ? AND active = 1",
      [id],
      (err, row) => {
        if (err) return reject(err);
        resolve(row);
      }
    );
  });
};

// Fetch all products for admin (no pagination limit)
export const getAllProductsAdmin = () => {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM Products ORDER BY id DESC", [], (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
};

// Create product
export const createProduct = ({ name, price, stock }) => {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO Products (name, price, stock, active) VALUES (?, ?, ?, 1)`,
      [name, price, stock],
      function (err) {
        if (err) return reject(err);
        resolve({ id: this.lastID, name, price, stock, active: 1 });
      }
    );
  });
};

// Update product
export const updateProduct = (id, { name, price, stock }) => {
  return new Promise((resolve, reject) => {
    db.run(
      `UPDATE Products SET name = ?, price = ?, stock = ? WHERE id = ?`,
      [name, price, stock, id],
      function (err) {
        if (err) return reject(err);
        resolve({ id, name, price, stock });
      }
    );
  });
};

// Toggle product active status

export const toggleProductActive = (id, reason = null) => {
  return new Promise((resolve, reject) => {
    const query = `
      UPDATE Products
      SET active = CASE WHEN active = 1 THEN 0 ELSE 1 END,
          deactivated_reason = CASE WHEN active = 1 THEN ? ELSE NULL END
      WHERE id = ?
    `;

    db.run(query, [reason, id], function (err) {
      if (err) return reject(err);
      db.get("SELECT * FROM Products WHERE id = ?", [id], (err, row) => {
        if (err) return reject(err);
        resolve(row);
      });
    });
  });
};
