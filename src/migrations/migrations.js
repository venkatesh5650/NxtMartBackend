import db from "../config/db.js";
import productData from "../data/productData.js";

/**
 * Runs database migrations in sequence.
 * Ensures required tables and columns exist and inserts initial data when needed.
 */
const runMigrations = () => {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      console.log("⏳ Running DB Migrations...");

      // Create Users table
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

      // Add role column to Users
      db.run(
        `ALTER TABLE Users ADD COLUMN role TEXT DEFAULT 'USER'`,
        (err) => {
          if (err && !err.message.includes("duplicate column")) {
            console.error("❌ Error adding role column:", err.message);
          } else {
            console.log("⭐ Role column exists or added.");
          }
        }
      );

      // Create Products table
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

      // Add description column
      db.run(`ALTER TABLE Products ADD COLUMN description TEXT`, (err) => {
        if (err && !err.message.includes("duplicate column")) {
          console.error("❌ Error adding description column:", err.message);
        } else {
          console.log("⭐ Description column exists or added.");
        }
      });

      // Add stock column
      db.run(`ALTER TABLE Products ADD COLUMN stock INTEGER`, (err) => {
        if (err && !err.message.includes("duplicate column")) {
          console.error("❌ Error adding stock column:", err.message);
        } else {
          console.log("⭐ Stock column exists or added.");
        }
      });

      // Initialize stock if null
      db.run(`UPDATE Products SET stock = 100 WHERE stock IS NULL`);

      // Create Orders table
      db.run(`
        CREATE TABLE IF NOT EXISTS Orders (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          user_id INTEGER NOT NULL,
          status TEXT NOT NULL DEFAULT 'CREATED',
          total REAL NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);

      // Create OrderItems table
      db.run(`
        CREATE TABLE IF NOT EXISTS OrderItems (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          order_id INTEGER,
          product_id INTEGER,
          quantity INTEGER,
          price REAL
        )
      `);

      // Create OrderHistory table
      db.run(`
        CREATE TABLE IF NOT EXISTS OrderHistory (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          order_id INTEGER,
          from_status TEXT,
          to_status TEXT,
          changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);

      // Optional Payments table
      db.run(`
        CREATE TABLE IF NOT EXISTS Payments (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          order_id INTEGER,
          status TEXT,
          payload TEXT,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);

      // Update descriptions
      db.run(
        `UPDATE Products
         SET description =
           CASE 
             WHEN category = 'Fruits & Vegetables' THEN 'Freshly sourced from trusted farms, these fruits and vegetables meet NxMart quality standards.'
             WHEN category = 'Prepared Foods' THEN 'Ready-to-eat meals selected for convenience and consistent quality.'
             WHEN category = 'Oil' THEN 'Pure, refined oil ideal for everyday cooking with consistent aroma and clarity.'
             WHEN category = 'Frozen Foods' THEN 'Quick-to-cook frozen items stored under strict quality conditions.'
             WHEN category = 'Meat & Seafood' THEN 'Freshly sourced and hygienically handled meat and seafood.'
             WHEN category = 'Home Needs' THEN 'Essential household products chosen for durability and reliability.'
             WHEN category = 'Beverages' THEN 'Refreshing beverages selected for clean taste and dependable quality.'
             ELSE 'A quality-assured product from NxMart.'
           END
         WHERE description IS NULL OR LENGTH(description) < 70`
      );

      // Insert sample products only when empty
      db.get("SELECT COUNT(*) AS count FROM Products", (err, row) => {
        if (err) {
          console.error("❌ Error checking Products table:", err.message);
          return reject(err);
        }

        if (row.count === 0) {
          console.log("📦 Inserting sample products...");

          const insertQuery = `
            INSERT INTO Products (name, category, price, quantity, image_url, description, stock)
            VALUES (?, ?, ?, ?, ?, ?, ?)
          `;

          for (const item of productData) {
            db.run(insertQuery, [
              item.name,
              item.category,
              item.price,
              item.quantity,
              item.image_url,
              "This is a premium quality product available at NxMart.",
              100
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
