import z from "zod";
import {
  emailSchema,
  passwordSchema,
  phoneSchema,
  stringSchema,
} from "./schema-helper";

export const CourseQuerySchema = z.object({
  minRating: z
    .string()
    .optional()
    .transform((val) => (val ? Number.parseFloat(val) : undefined))
    .refine((val) => val === undefined || (val >= 0 && val <= 5), {
      message: "Rating harus antara 0 dan 5",
    }),
  limit: z
    .string()
    .optional()
    .transform((val) => (val ? Number.parseInt(val, 10) : undefined))
    .refine((val) => val === undefined || (val > 0 && val <= 100), {
      message: "Limit harus antara 1 dan 100",
    }),
  page: z
    .string()
    .optional()
    .transform((val) => (val ? Number.parseInt(val, 10) : undefined))
    .refine((val) => val === undefined || val > 0, {
      message: "Page harus lebih dari 0",
    }),
  category: z
    .string()
    .optional()
    .transform((val) => val?.trim())
    .refine((val) => !val || val.length >= 2, {
      message: "Category minimal 2 karakter",
    }),
  priceStart: z
    .string()
    .optional()
    .transform((val) => (val ? Number.parseFloat(val) : undefined)),
  priceEnd: z
    .string()
    .optional()
    .transform((val) => (val ? Number.parseFloat(val) : undefined)),
  duration: z.string().optional(), // "short", "medium", "long"
  sortBy: z.enum(["HTR", "HTT", "AZ", "ZA", "RTR", "RTT"]).optional(),
  search: z.string().optional(),
});

export type CourseQueryParams = z.infer<typeof CourseQuerySchema>;

export const LoginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export const RegisterSchema = z
  .object({
    name: stringSchema(5, 100),
    email: emailSchema,
    phoneNumber: phoneSchema,
    password: passwordSchema,
    confimPassword: passwordSchema,
  })
  .refine((data) => data.password === data.confimPassword, {
    message: "Kata sandi tidak cocok",
    path: ["confimPassword"],
  });

export const NewsLetterSchema = z.object({
  email: emailSchema,
});

export const ProfileSchema = z.object({
  id: z.uuid("Format ID tidak valid."),
  name: stringSchema(5, 100),
  email: emailSchema,
  phoneNumber: phoneSchema,
});
