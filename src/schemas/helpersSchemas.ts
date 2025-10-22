import z from "zod";
export const strictPhoneSchema = z
  .string()
  .regex(
    /^(?:\+48\s?)?\d{3}\s?\d{3}\s?\d{3}$/,
    "Numer telefonu musi być w formacie: 123 456 789 lub +48 123 456 789",
  );

export const nipSchemaWithValidation = z
  .string()
  .regex(/^\d{3}-?\d{3}-?\d{2}-?\d{2}$/, "Nieprawidłowy format NIP")
  .refine((nip) => {
    const cleanNip = nip.replace(/[-\s]/g, "");

    if (cleanNip.length !== 10) return false;

    const weights = [6, 5, 7, 2, 3, 4, 5, 6, 7];
    const digits = cleanNip.split("").map(Number);

    const sum = weights.reduce((acc, weight, index) => {
      return acc + weight * digits[index];
    }, 0);

    const checksum = sum % 11;

    return checksum === digits[9];
  }, "Nieprawidłowy numer NIP (błędna suma kontrolna)");
