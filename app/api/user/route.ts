import { LABEL } from "@/lib/constant";
import { APIResponse, Course, User } from "@/lib/data-dummy";
import { ProfileSchema } from "@/lib/schema-validation/schema-validation";
import { NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";
import z from "zod";

export async function GET(req: Request) {
  const authHeader = req.headers.get("authorization");

  if (authHeader !== `Bearer ${process.env.API_TOKEN}`) {
    const response: APIResponse<Course[]> = {
      ok: false,
      data: null,
      message: LABEL.ERROR.UNAUTHORIZED,
    };

    return NextResponse.json(response, { status: 401 });
  }

  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "dammy-data",
      "user.json",
    );
    const fileContents = await fs.readFile(filePath, "utf8");
    const user: User[] = JSON.parse(fileContents);

    const response: APIResponse<User[]> = {
      ok: true,
      data: user,
      message: LABEL.SUCCESS.FETCH,
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    const response: APIResponse<User[]> = {
      ok: false,
      data: null,
      message: error instanceof Error ? error.message : LABEL.ERROR.SERVER,
    };

    return NextResponse.json(response, { status: 500 });
  }
}

export async function PUT(req: Request) {
  const authHeader = req.headers.get("authorization");

  if (authHeader !== `Bearer ${process.env.API_TOKEN}`) {
    const response: APIResponse<User> = {
      ok: false,
      data: null,
      message: LABEL.ERROR.UNAUTHORIZED,
    };

    return NextResponse.json(response, { status: 401 });
  }

  try {
    // Validasi body request dengan Zod
    const body = await req.json();
    const validatedData = ProfileSchema.parse(body);

    // Baca file user.json
    const filePath = path.join(
      process.cwd(),
      "public",
      "dammy-data",
      "user.json",
    );
    const fileContents = await fs.readFile(filePath, "utf8");
    const users: User[] = JSON.parse(fileContents);

    // Cari index user berdasarkan id
    const userIndex = users.findIndex((user) => user.id === validatedData.id);

    if (userIndex === -1) {
      const response: APIResponse<User> = {
        ok: false,
        data: null,
        message: "User tidak ditemukan",
      };
      return NextResponse.json(response, { status: 404 });
    }

    // Update user data
    users[userIndex] = {
      ...users[userIndex],
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phoneNumber,
    };

    // Simpan kembali ke file
    await fs.writeFile(filePath, JSON.stringify(users, null, 2), "utf8");

    const response: APIResponse<User> = {
      ok: true,
      data: users[userIndex],
      message: LABEL.INPUT.SUCCESS.UPDATE,
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const response: APIResponse<User> = {
        ok: false,
        data: null,
        message: error.message,
      };
      return NextResponse.json(response, { status: 400 });
    }

    const response: APIResponse<User> = {
      ok: false,
      data: null,
      message: error instanceof Error ? error.message : LABEL.ERROR.SERVER,
    };

    return NextResponse.json(response, { status: 500 });
  }
}
