import db from "../config/db.js";

/**
 * Atomically reserve stock for a product.
 * Fails if available stock is less than requested quantity.
 */
export function reserveStock(productId, qty) {
  console.log("🧪 reserveStock called:", { productId, qty });

  return new Promise((resolve, reject) => {
    db.run(
      `UPDATE Products SET stock = stock - ? WHERE id = ? AND stock >= ?`,
      [qty, productId, qty],
      function (err) {
        console.log("🧪 DB result:", { err, changes: this.changes });

        if (err) return reject(err);
        if (this.changes === 0) return reject(new Error("Insufficient stock"));
        resolve();
      }
    );
  });
}


/**
 * Release stock back to inventory (used when order is cancelled).
 */
export function releaseStock(productId, qty) {
  const normalizedQty =
    typeof qty === "number" ? qty : parseFloat(qty) || 1;

  return new Promise((resolve, reject) => {
    db.run(
      `UPDATE Products
       SET stock = stock + ?
       WHERE id = ?`,
      [normalizedQty, productId],
      function (err) {
        if (err) return reject(err);
        resolve();
      }
    );
  });
}
