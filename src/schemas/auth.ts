import { z } from "zod";
import { nipSchemaWithValidation, strictPhoneSchema } from "./helpersSchemas";

export const LoginAuthSchema = z.object({
  email: z.email("Invalid email address"),
  password: z
    .string()
    .min(6, "Password is too short")
    .max(100, "Password is too long"),
  rememberMe: z.boolean().optional(),
});

export type LoginAuthType = z.infer<typeof LoginAuthSchema>;

export const RegisterSchema = z.object({
  email: z.email("Podaj poprawny adres email"),
  password: z.string().min(6, "Hasło musi mieć co najmniej 6 znaków"),
});

export const OnboardingSchema = z.object({
  certificate_scan: z
    .file()
    .max(5 * 1024 * 1024, "Plik jest za duży")
    .mime(
      ["image/jpeg", "image/jpeg", "image/png", "application/pdf"],
      "Nieprawidłowy format pliku. Dozwolone formaty to jpg, png, pdf",
    ),
  certificate_number: z.string().min(1, "Numer certyfikatu jest wymagany"),
  office_address: z.string().min(1, "Adres biura jest wymagany"),
});

export const OnboardingSecondStepSchema = z.object({
  firstname: z
    .string()
    .min(2, "Imię musi zawierać co najmniej 2 znaki")
    .max(50),
  lastname: z
    .string()
    .min(2, "Nazwisko musi zawierać co najmniej 2 znaki")
    .max(50),
});
export const AddCustomerSchema = z.object({
  customer_name: z
    .string()
    .min(2, "Nazwa klienta jest za krótka")
    .max(55, "Nazwa klienta jest za długa"),
  clientType: z.string(),
  nip: nipSchemaWithValidation,
  email: z.email("Nieprawidłowy adres e-mail"),
  phone_number: strictPhoneSchema.optional(),
  country: z.string(),
});
export type OnboardingSecondStepValues = z.infer<
  typeof OnboardingSecondStepSchema
>;
export type RegisterFormValues = z.infer<typeof RegisterSchema>;
export type OnboardingFormValues = z.infer<typeof OnboardingSchema>;
export type AddCustomerSchemaValues = z.infer<typeof AddCustomerSchema>;
