import db from "./src/config/db.js";

const DEMO_ADMIN = {
  name: "Demo Admin",
  username: "demo_admin",
  email: "demo@nxtmart.dev",
  password: "$2b$10$8IVpCDzIUx7GemNyLd0cqukYvn6IquWCNO08UBR1JffYtj8X7Qh9m",
  role: "DEMO_ADMIN",
};

db.serialize(() => {
  console.log("🌱 Seeding demo admin user...");

  db.run(
    `
    INSERT INTO users (name, username, email, password, role)
    VALUES (?, ?, ?, ?, ?)
    `,
    [
      DEMO_ADMIN.name,
      DEMO_ADMIN.username,
      DEMO_ADMIN.email,
      DEMO_ADMIN.password,
      DEMO_ADMIN.role,
    ],
    function (err) {
      if (err) {
        console.error("❌ Failed to insert demo admin:", err.message);
      } else {
        console.log("✅ Demo admin inserted successfully.");
      }
    }
  );
});
