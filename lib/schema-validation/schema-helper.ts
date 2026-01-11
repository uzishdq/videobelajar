import z from "zod";

const allowedRegex = /^[a-zA-Z0-9.,/ \-']+$/;

export const emailSchema = z
  .email()
  .max(255, "Must not exceed 255 characters.");
export const passwordSchema = z
  .string()
  .min(6, "Must be at least 6 characters long.")
  .max(50, "Must not exceed 50 characters.");

export const stringSchema = (min = 5, max = 50) =>
  z
    .string()
    .min(min, `Must be at least ${min} characters long.`)
    .max(max, `Must not exceed ${max} characters.`)
    .regex(
      allowedRegex,
      "Use only letters, numbers, spaces, dots, commas, or slashes."
    );

export const phoneSchema = z
  .string()
  .min(10, {
    message: "Phone number must be at least 10 digits long.",
  })
  .max(15, {
    message: "Phone number must not exceed 15 digits.",
  })
  .regex(/^\d+$/, {
    message: "Phone number can contain digits only.",
  })
  .refine((value) => value.startsWith("8"), {
    message: "Phone number must start with 8",
  });
