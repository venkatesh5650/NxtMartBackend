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

// Fetch single product
export const fetchProductById = (id) => {
  return new Promise((resolve, reject) => {
    db.get("SELECT * FROM Products WHERE id = ?", [id], (err, row) => {
      if (err) return reject(err);
      resolve(row);
    });
  });
};
