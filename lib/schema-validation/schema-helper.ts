import z from "zod";
import { formatToIDR } from "../helper";

const allowedRegex = /^[a-zA-Z0-9.,/ \-'\n\r]+$/;

export const emailSchema = z
  .email({ error: "Alamat email tidak valid" })
  .max(255, "Tidak boleh melebihi 255 karakter.");
export const passwordSchema = z
  .string()
  .min(6, "Harus terdiri dari minimal 6 karakter.")
  .max(50, "Tidak boleh melebihi 50 karakter.");

export const stringSchema = (min = 5, max = 50) =>
  z
    .string()
    .min(min, `Harus terdiri dari minimal ${min} karakter.`)
    .max(max, `Tidak boleh melebihi ${max} karakter.`)
    .regex(
      allowedRegex,
      "Gunakan hanya huruf, angka, spasi, titik, koma, atau garis miring.",
    );

export const phoneSchema = z
  .string()
  .min(10, {
    message: "Nomor telepon harus terdiri dari minimal 10 digit.",
  })
  .max(15, {
    message: "Nomor telepon tidak boleh lebih dari 15 digit.",
  })
  .regex(/^\d+$/, {
    message: "Nomor telepon hanya boleh berisi angka.",
  })
  .refine((value) => value.startsWith("8"), {
    message: "Nomor telepon harus dimulai dengan 8.",
  });

export const currencySchema = (label: string, min = 5000, max = 50000000) =>
  z
    .number({
      error: `${label} wajib diisi`,
    })
    .min(min, `${label} minimal ${formatToIDR(min)}`)
    .max(max, `${label} maxsimal ${formatToIDR(max)}`);
