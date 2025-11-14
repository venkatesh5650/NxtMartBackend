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
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`,
        (err) => {
          if (err) {
            console.error("❌ Error creating Products table:", err.message);
            return reject(err);
          }
        }
      );

      // 3️⃣ Add description column if not exists
      db.run(
        `ALTER TABLE Products ADD COLUMN description TEXT`,
        (err) => {
          if (err && !err.message.includes("duplicate column")) {
            console.error("❌ Error adding description column:", err.message);
          } else {
            console.log("⭐ Description column exists or added.");
          }
        }
      );

      // 4️⃣ Update existing rows (old products without description)
      db.run(
        `UPDATE Products
         SET description = 'This is a premium quality product available at NxMart.'
         WHERE description IS NULL`,
        (err) => {
          if (err) {
            console.error("❌ Error updating old descriptions:", err.message);
          } else {
            console.log("📝 Old product descriptions updated.");
          }
        }
      );

      // 5️⃣ Insert sample products only if table is empty
      db.get("SELECT COUNT(*) AS count FROM Products", (err, row) => {
        if (err) {
          console.error("❌ Error checking Products table:", err.message);
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

          console.log("🎉 Sample products inserted.");
        } else {
          console.log(`ℹ️ Products already exist: ${row.count} rows`);
        }
      });

      console.log("✅ All migrations completed!");
      resolve();
    });
  });
};

export default runMigrations;
