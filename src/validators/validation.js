import { z } from "zod";

/**
 * Schema for user registration.
 * Enforces basic identity fields and strong password rules.
 */
export const registerSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),

  // Password policy: min length + upper, lower, numeric
  password: z
    .string()
    .min(8, "Password must be 8+ characters")
    .regex(/[A-Z]/, "Must contain uppercase letter")
    .regex(/[a-z]/, "Must contain lowercase letter")
    .regex(/[0-9]/, "Must contain a number"),
});

/**
 * Schema for login.
 * Only checks required presence since credentials
 * are verified against the database.
 */
export const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
});
