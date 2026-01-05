import db from "../config/db.js";

export const getAllUsers = () =>
  new Promise((resolve, reject) => {
    db.all(
      `
      SELECT 
        u.*,
        COUNT(o.id) AS orders_count,
        IFNULL(SUM(o.total), 0) AS total_spent,
        MAX(o.created_at) AS last_order_at
      FROM Users u
      LEFT JOIN Orders o ON o.user_id = u.id
      GROUP BY u.id
      ORDER BY u.id DESC
      `,
      [],
      (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      }
    );
  });

export const toggleUserStatus = (id, reason = null) =>
  new Promise((resolve, reject) => {
    db.run(
      `UPDATE Users
       SET active = CASE WHEN active = 1 THEN 0 ELSE 1 END,
           blocked_reason = CASE WHEN active = 1 THEN ? ELSE NULL END
       WHERE id = ?`,
      [reason, id],
      function (err) {
        if (err) reject(err);
        else {
          db.get("SELECT * FROM Users WHERE id = ?", [id], (err, row) => {
            if (err) reject(err);
            else resolve(row);
          });
        }
      }
    );
  });
