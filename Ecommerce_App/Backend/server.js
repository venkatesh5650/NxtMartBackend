// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./src/database_folder/db.js";
import productData from "./src/data/products.js";
import authRouter from "./src/routers/auth.js";
import productRouter from "./src/routers/api.js";

dotenv.config();

const app = express();

// Middleware setup
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

//  Insert products only if the table is empty
db.serialize(() => {
  db.get("SELECT COUNT(*) AS count FROM Products", (err, row) => {
    if (err) {
      console.error("❌ Error checking Products table:", err.message);
      return;
    }

    if (row.count === 0) {
      console.log("📦 Products table empty. Inserting sample data...");

      const insertQuery = `
        INSERT INTO Products (name, category, price, quantity, image_url)
        VALUES (?, ?, ?, ?, ?)
      `;

      for (const item of productData) {
        db.run(insertQuery, [
          item.name,
          item.category,
          item.price,
          item.quantity,
          item.image_url,
        ]);
      }

      console.log("✅ Sample products inserted successfully!");
    } else {
      console.log(
        `🟢 Products already exist (${row.count} records) — skipping insert.`
      );
    }
  });
});

db.all("SELECT * FROM Products", [], (err, rows) => {
  if (err) console.error("DB Fetch Error:", err.message);
  else console.log("Total Products in DB:", rows.length);
});

//  Routers
app.use("/auth", authRouter);
app.use("/api", productRouter);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
