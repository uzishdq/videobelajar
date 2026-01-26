import { LABEL } from "@/lib/constant";
import { APIResponse, Course } from "@/lib/data-dummy";
import { NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";

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
      "courses.json",
    );
    const fileContents = await fs.readFile(filePath, "utf8");
    const courses: Course[] = JSON.parse(fileContents);

    const response: APIResponse<Course[]> = {
      ok: true,
      data: courses,
      message: LABEL.SUCCESS.FETCH,
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    const response: APIResponse<Course[]> = {
      ok: false,
      data: null,
      message: error instanceof Error ? error.message : LABEL.ERROR.SERVER,
    };

    return NextResponse.json(response, { status: 500 });
  }
}
