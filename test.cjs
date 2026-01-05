const sqlite3 = require("sqlite3");
const path = require("path");

const DB_PATH = path.resolve(__dirname, "src", "config", "Products.db");
const db = new sqlite3.Database(DB_PATH);

db.all("SELECT id, email, role, active, blocked_reason FROM Users", (err, rows) => {
  if (err) console.error(err);
  else console.table(rows);
  db.close();
});
