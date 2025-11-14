import db from "./database_folder/db.js";
import productData from "./data/products.js";

const runMigrations = () => {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      console.log("⏳ Running DB Migrations...");

      // 1️⃣ Create Users table if not exists
      db.run(
        `CREATE TABLE IF NOT EXISTS Users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          username TEXT UNIQUE NOT NULL,
          password TEXT NOT NULL,
          email TEXT UNIQUE NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`,
        (err) => {
          if (err) {
            console.error("❌ Error creating Users table:", err.message);
            return reject(err);
          }
        }
      );

      // 2️⃣ Create Products table if not exists
      db.run(
        `CREATE TABLE IF NOT EXISTS Products (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          category TEXT,
          quantity TEXT,
          price REAL NOT NULL,
          image_url TEXT,
          description TEXT,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`,
        (err) => {
          if (err) {
            console.error("❌ Error creating Products table:", err.message);
            return reject(err);
          }
        }
      );

      // 3️⃣ Insert sample products if table is empty
      db.get("SELECT COUNT(*) AS count FROM Products", (err, row) => {
        if (err) {
          console.error("❌ Error checking Products:", err.message);
          return reject(err);
        }

        if (row.count === 0) {
          console.log("📦 Inserting sample products...");

          const insertQuery = `
            INSERT INTO Products (name, category, price, quantity, image_url, description)
            VALUES (?, ?, ?, ?, ?, ?)
          `;

          for (const item of productData) {
            db.run(insertQuery, [
              item.name,
              item.category,
              item.price,
              item.quantity,
              item.image_url,
              "This is a premium quality product available at NxMart.",
            ]);
          }
        }
      });

      console.log("✅ All migrations completed!");
      resolve();
    });
  });
};

export default runMigrations;
