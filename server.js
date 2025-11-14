// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./src/database_folder/db.js";
import productData from "./src/data/products.js";
import authRouter from "./src/routers/auth.js";
import productRouter from "./src/routers/api.js";
import runMigrations from "./src/migrate-description.js";

dotenv.config();

const app = express();

// Middleware setup
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://frontend-nxt-mart-ctio.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

//  Routers
app.use("/auth", authRouter);
app.use("/api", productRouter);

const startServer = async () => {
  try {
    console.log("⏳ Running migrations...");
    await runMigrations();
    console.log("✅ Migrations complete!");

    // Now you can safely start Express
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  } catch (err) {
    console.error("❌ Migration error:", err);
    process.exit(1);
  }
};

// Start the server after migrations
startServer();
