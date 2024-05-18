import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "Username must be atleast 2 Characters")
  .max(20, "Username must no more than 20 characters")
  .regex(
    /^[a-zA-Z0-9_\.]{2,20}$/,
    "Username must not contain special character"
  );

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid Email address" }),
  password: z
    .string()
    .min(6, { message: "password must be at least 6 characters" }),
});
