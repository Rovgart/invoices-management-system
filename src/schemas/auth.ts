import z from "zod";

export const RegisterAuthSchema = z.object({
  email: z.email("Invalid email address"),
  password: z
    .string()
    .min(6, "Password is too short")
    .max(100, "Password is too long"),
});

export const LoginAuthSchema = z.object({
  email: z.email("Invalid email address"),
  password: z
    .string()
    .min(6, "Password is too short")
    .max(100, "Password is too long"),
  rememberMe: z.boolean().optional(),
});

export type LoginAuthType = z.infer<typeof LoginAuthSchema>;
