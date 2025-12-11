import { registerSchema, loginSchema } from "../validators/validation.js";
import {
  registerUserService,
  loginUserService,
} from "../services/auth.service.js";

// POST /register
export const registerUser = async (req, res) => {
  const validation = registerSchema.safeParse(req.body);

  if (!validation.success) {
    return res.status(400).json({ error: validation.error.errors[0].message });
  }

  try {
    const { userId } = await registerUserService(validation.data);

    res.status(201).json({
      message: "User registered successfully",
      userId,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// POST /login
export const loginUser = async (req, res) => {
  const validation = loginSchema.safeParse(req.body);

  if (!validation.success) {
    return res.status(400).json({
      error: "Username and password are required",
    });
  }

  try {
    const result = await loginUserService(validation.data);

    res.status(200).json({
      message: "Login successful",
      ...result,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
