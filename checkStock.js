import db from "./src/config/db.js";

db.serialize(() => {
  console.log("🧹 Resetting order system...");

  db.run("DELETE FROM OrderHistory");
  db.run("DELETE FROM OrderItems");
  db.run("DELETE FROM Orders");

  db.run("UPDATE Products SET stock = 100");

  console.log("✅ Orders, items, history deleted.");
  console.log("✅ Stock reset to 100.");
});
