import sqlite3 from "sqlite3";
import path from "path";
import { fileURLToPath } from "url";

sqlite3.verbose();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Safe DB path for both Render + Local
const dbPath = path.join(__dirname, "Products.db");

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("❌ SQLite Connection Error:", err.message);
  } else {
    console.log("✅ SQLite DB Connected at:", dbPath);
  }
});

export default db;
