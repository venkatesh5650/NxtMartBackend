import sqlite3 from "sqlite3";
sqlite3.verbose();

// ✅ Open / create database file
const db = new sqlite3.Database("./Products.db", (err) => {
  if (err) {
    console.error("❌ SQLite Connection Error:", err.message);
  } else {
    console.log("✅ SQLite DB Connected");
  }
});

// ✅ Create Users table
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
    if (err) console.error("❌ Error creating Users table:", err.message);
  }
);

// ✅ Create Products table
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
    if (err) console.error("❌ Error creating Products table:", err.message);
  }
);

export default db;
