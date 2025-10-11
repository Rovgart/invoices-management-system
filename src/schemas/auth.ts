import { z } from "zod";

export const LoginAuthSchema = z.object({
  email: z.email("Invalid email address"),
  password: z
    .string()
    .min(6, "Password is too short")
    .max(100, "Password is too long"),
  rememberMe: z.boolean().optional(),
});

export type LoginAuthType = z.infer<typeof LoginAuthSchema>;

export const RegisterSchema = z
  .object({
    email: z.email("Podaj poprawny adres email"),
    password: z.string().min(6, "Hasło musi mieć co najmniej 6 znaków"),
    repeat_password: z.string().min(6, "Powtórz hasło"),
    firstname: z
      .string()
      .min(2, "Imię musi zawierać co najmniej 2 znaki")
      .max(50),
    lastname: z
      .string()
      .min(2, "Nazwisko musi zawierać co najmniej 2 znaki")
      .max(50),
    company_name: z.string().min(2, "Nazwa firmy jest wymagana").max(100),
    nip: z.string().regex(/^\d{10}$/, "NIP musi zawierać dokładnie 10 cyfr"),
    phone: z
      .string()
      .regex(/^\+?\d{9,15}$/, "Podaj poprawny numer telefonu")
      .optional()
      .or(z.literal("")),

    // 🟦 Nowe pola:
    is_accountant: z.boolean(),
    certificate_number: z.string().optional(),
    office_address: z.string().optional(),
  })
  .refine((data) => data.password === data.repeat_password, {
    path: ["repeat_password"],
    message: "Hasła muszą być takie same",
  })
  .refine(
    (data) =>
      !data.is_accountant ||
      (data.certificate_number?.trim() && data.office_address?.trim()),
    {
      path: ["certificate_number"],
      message: "Dla księgowych wymagany jest numer certyfikatu i adres biura",
    },
  );

export type RegisterFormValues = z.infer<typeof RegisterSchema>;
