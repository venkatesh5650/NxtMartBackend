import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./src/config/db.js";
import productData from "./src/data/productData.js";
import authRouter from "./src/routes/auth.routes.js";
import productRouter from "./src/routes/products.routes.js";
import ordersRouter from "./src/routes/orders.routes.js";
import paymentsRouter from "./src/routes/payments.routes.js";
import runMigrations from "./src/migrations/migrations.js";
import cookieParser from "cookie-parser";
import adminOrdersRoutes from "./src/routes/admin.orders.routes.js";
import adminProductsRoutes from "./src/routes/admin.products.routes.js";
import adminUsersRoutes from "./src/routes/admin.users.routes.js";

dotenv.config();

const app = express();

// Middleware setup
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://frontend-nxt-mart-ctio.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Allow preflight
app.options("/", cors());

app.use(express.json());
app.use(cookieParser());

app.use((req, res, next) => {
  console.log("➡ Incoming:", req.method, req.originalUrl);
  next();
});

// Routers
app.use("/admin", adminOrdersRoutes);

app.use("/auth", authRouter);
app.use("/admin/users", adminUsersRoutes);
app.use("/api", productRouter);
app.use("/orders", ordersRouter);
app.use("/payments", paymentsRouter);

app.use("/admin/products", adminProductsRoutes);

// Lightweight health check used to wake up sleeping server (Render free tier)
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

const startServer = async () => {
  try {
    console.log("⏳ Running migrations...");
    await runMigrations();
    console.log("✅ Migrations complete!");

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  } catch (err) {
    console.error("❌ Migration error:", err);
    process.exit(1);
  }
};

// Start the server after migrations
startServer();
