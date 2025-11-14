import sqlite3 from "sqlite3";
import db from "./database_folder/db.js";

sqlite3.verbose();

// One-time migration
db.serialize(() => {
  console.log("Running migration: Adding description column...");

  // Step 1: Add column (if not exists)
  db.run(
    `ALTER TABLE Products ADD COLUMN description TEXT;`,
    (err) => {
      if (err && !err.message.includes("duplicate column")) {
        console.log("Error adding column:", err.message);
      } else {
        console.log("Column added or already exists.");
      }
    }
  );

  // Step 2: Update existing rows with default description
  db.run(
    `UPDATE Products
     SET description = 'This is a premium quality product available at NxMart, perfect for daily use.';`,
    (err) => {
      if (err) {
        console.log("Error updating descriptions:", err.message);
      } else {
        console.log("Descriptions updated successfully!");
      }
    }
  );
});
