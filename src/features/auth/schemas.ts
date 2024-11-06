import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().trim().email(),
  //  MIN REQ ON SIGN UP, NOT ON LOGIN
  password: z.string().trim().min(1, "Required").max(256),
});

export const registerSchema = z.object({
  name: z.string().trim().min(1, "Required").max(256),
  email: z.string().trim().email(),
  //  MIN REQ ON SIGN UP, NOT ON LOGIN
  password: z
    .string()
    .trim()
    .min(8, "Minimum of 8 characters is required")
    .max(256),
});
