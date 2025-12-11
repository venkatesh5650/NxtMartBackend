import db from "../config/db.js";

export const findUserByUsername = (username) => {
  return new Promise((resolve, reject) => {
    db.get("SELECT * FROM Users WHERE username = ?", [username], (err, row) => {
      if (err) return reject(err);
      resolve(row);
    });
  });
};

export const createUser = (user) => {
  const { name, username, email, password } = user;

  return new Promise((resolve, reject) => {
    db.run(
      "INSERT INTO Users (name, username, password, email) VALUES (?, ?, ?, ?)",
      [name, username, password, email],
      function (err) {
        if (err) return reject(err);
        resolve(this.lastID); // Return inserted user ID
      }
    );
  });
};
