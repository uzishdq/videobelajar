import z from "zod";
import {
  emailSchema,
  passwordSchema,
  phoneSchema,
  stringSchema,
} from "./schema-helper";

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
