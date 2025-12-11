import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as authRepo from "../repositories/auth.repository.js";

export const registerUserService = async (data) => {
  const { name, username, password, email } = data;

  // Check user exists
  const existingUser = await authRepo.findUserByUsername(username);
  if (existingUser) {
    throw new Error("Username already exists");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save user
  const userId = await authRepo.createUser({
    name,
    username,
    email,
    password: hashedPassword,
  });

  return { userId };
};

export const loginUserService = async ({ username, password }) => {
  const user = await authRepo.findUserByUsername(username);

  if (!user) {
    throw new Error("Invalid username or password");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid username or password");
  }

  // Generate JWT
  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  return {
    jwt_token: token,
    userId: user.id,
    username: user.username,
  };
};
