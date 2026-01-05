import db from "../config/db.js";

/* ================== CREATE ================== */

export function createOrder(userId, total) {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO Orders (user_id, total) VALUES (?, ?)`,
      [userId, total],
      function (err) {
        if (err) reject(err);
        else resolve(this.lastID);
      }
    );
  });
}

export function addOrderItem(orderId, productId, qty, price) {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO OrderItems (order_id, product_id, quantity, price)
       VALUES (?, ?, ?, ?)`,
      [orderId, productId, qty, price],
      (err) => (err ? reject(err) : resolve())
    );
  });
}

export function addHistory(orderId, from, to, changedBy) {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO OrderHistory (order_id, from_status, to_status, changed_at, changed_by)
       VALUES (?, ?, ?, datetime('now'), ?)`,
      [orderId, from, to, changedBy],
      (err) => (err ? reject(err) : resolve())
    );
  });
}

/* ================== READ ================== */

export function getOrderById(orderId) {
  return new Promise((resolve, reject) => {
    db.get(`SELECT * FROM Orders WHERE id = ?`, [orderId], (err, row) =>
      err ? reject(err) : resolve(row)
    );
  });
}

export function getOrdersByUser(userId) {
  return new Promise((resolve, reject) => {
    db.all(
      `SELECT * FROM Orders
       WHERE user_id = ?
       ORDER BY created_at DESC`,
      [userId],
      (err, rows) => (err ? reject(err) : resolve(rows))
    );
  });
}

export function getOrderItems(orderId) {
  return new Promise((resolve, reject) => {
    db.all(
      `SELECT product_id, quantity FROM OrderItems WHERE order_id = ?`,
      [orderId],
      (err, rows) => (err ? reject(err) : resolve(rows))
    );
  });
}

export function getOrderHistory(orderId) {
  return new Promise((resolve, reject) => {
    db.all(
      `SELECT from_status, to_status, changed_at
       FROM OrderHistory
       WHERE order_id = ?
       ORDER BY changed_at`,
      [orderId],
      (err, rows) => (err ? reject(err) : resolve(rows))
    );
  });
}

/* ================== UPDATE ================== */

export function updateOrderStatus(orderId, status) {
  return new Promise((resolve, reject) => {
    db.run(
      `UPDATE Orders SET status = ? WHERE id = ?`,
      [status, orderId],
      (err) => (err ? reject(err) : resolve())
    );
  });
}

export function getOrderWithItems(orderId) {
  return new Promise((resolve, reject) => {
    db.all(
      `
      SELECT 
        o.id as order_id,
        o.total,
        o.status,
        oi.product_id,
        p.name,
        oi.quantity,
        oi.price
      FROM Orders o
      LEFT JOIN OrderItems oi ON o.id = oi.order_id
      LEFT JOIN Products p ON p.id = oi.product_id
      WHERE o.id = ?
      `,
      [orderId],
      (err, rows) => {
        if (err) return reject(err);
        if (!rows || rows.length === 0) return resolve(null);

        const order = {
          id: rows[0].order_id,
          status: rows[0].status,
          total: rows[0].total,
          items: rows
            .filter((r) => r.product_id !== null)
            .map((r) => ({
              product_id: r.product_id,
              name: r.name,
              quantity: r.quantity,
              price: r.price,
            })),
        };

        resolve(order);
      }
    );
  });
}

export function getAllOrders(status) {
  return new Promise((resolve, reject) => {
    let sql = `
      SELECT 
        o.id,
        o.user_id,
        u.username,
        o.total,
        o.status,
        COALESCE(MAX(h.changed_at), o.created_at) AS updated_at
      FROM Orders o
      LEFT JOIN Users u ON u.id = o.user_id
      LEFT JOIN OrderHistory h ON h.order_id = o.id
    `;

    const params = [];

    if (status) {
      sql += " WHERE o.status = ?";
      params.push(status);
    }

    sql += `
      GROUP BY o.id
      ORDER BY updated_at DESC
    `;

    db.all(sql, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}
