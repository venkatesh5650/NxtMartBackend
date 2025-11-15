import sqlite3 from "sqlite3";
import path from "path";
import { fileURLToPath } from "url";

sqlite3.verbose();

// Recreate __dirname for ES Module environments
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// SQLite file path (works both locally and on deployment platforms)
const dbPath = path.join(__dirname, "Products.db");

// Initialize a shared SQLite connection
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("SQLite Connection Error:", err.message);
  } else {
    console.log("SQLite DB Connected at:", dbPath);
  }
});

// Exporting a single DB instance helps maintain a clean architecture
export default db;
