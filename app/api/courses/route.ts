import { LABEL } from "@/lib/constant";
import { APIResponse, Course } from "@/lib/data-dummy";
import { CourseQuerySchema } from "@/lib/schema-validation/schema-validation";
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
    const { searchParams } = new URL(req.url);

    const queryParams = {
      minRating: searchParams.get("minRating") || undefined,
      limit: searchParams.get("limit") || undefined,
      page: searchParams.get("page") || undefined,
      category: searchParams.get("category") || undefined,
      priceStart: searchParams.get("priceStart") || undefined,
      priceEnd: searchParams.get("priceEnd") || undefined,
      duration: searchParams.get("duration") || undefined,
      sortBy: searchParams.get("sortBy") || undefined,
      search: searchParams.get("search") || undefined,
    };

    const validatedParams = CourseQuerySchema.safeParse(queryParams);

    if (!validatedParams.success) {
      const response: APIResponse<Course[]> = {
        ok: false,
        data: null,
        message: validatedParams.error.message,
      };
      return NextResponse.json(response, { status: 400 });
    }

    const {
      minRating,
      limit,
      page,
      category,
      priceStart,
      priceEnd,
      duration,
      sortBy,
      search,
    } = validatedParams.data;

    const filePath = path.join(
      process.cwd(),
      "public",
      "dammy-data",
      "courses.json",
    );
    const fileContents = await fs.readFile(filePath, "utf8");
    let courses: Course[] = JSON.parse(fileContents);

    // Filter berdasarkan search
    if (search) {
      const searchLower = search.toLowerCase();
      courses = courses.filter(
        (course) =>
          course.title.toLowerCase().includes(searchLower) ||
          course.desc.toLowerCase().includes(searchLower) ||
          course.instructor.toLowerCase().includes(searchLower),
      );
    }

    // Filter berdasarkan category
    if (category) {
      const categories = category.split(",");
      courses = courses.filter((course) =>
        categories.some(
          (cat) => course.category.toLowerCase() === cat.toLowerCase(),
        ),
      );
    }

    // Filter berdasarkan rating
    if (minRating !== undefined) {
      courses = courses.filter((course) => course.rating >= minRating);
    }

    // Filter berdasarkan price range
    if (priceStart !== undefined) {
      courses = courses.filter((course) => course.price >= priceStart);
    }
    if (priceEnd !== undefined) {
      courses = courses.filter((course) => course.price <= priceEnd);
    }

    // Filter berdasarkan duration (contoh: asumsi ada field duration dalam hours)
    // Jika tidak ada field duration, skip filter ini
    // if (duration) {

    // }

    // Sorting
    if (sortBy) {
      switch (sortBy) {
        case "HTR": // Harga Terendah
          courses.sort((a, b) => a.price - b.price);
          break;
        case "HTT": // Harga Tertinggi
          courses.sort((a, b) => b.price - a.price);
          break;
        case "AZ":
          courses.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case "ZA":
          courses.sort((a, b) => b.title.localeCompare(a.title));
          break;
        case "RTR": // Rating Tertinggi
          courses.sort((a, b) => b.rating - a.rating);
          break;
        case "RTT": // Rating Terendah
          courses.sort((a, b) => a.rating - b.rating);
          break;
      }
    }

    const total = courses.length;

    // Pagination
    if (page !== undefined && limit !== undefined) {
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;

      courses = courses.slice(startIndex, endIndex);

      // Response dengan metadata pagination
      const response = {
        ok: true,
        data: courses,
        message: LABEL.SUCCESS.FETCH,
        meta: {
          page,
          limit,
          total,
          totalPages: Math.ceil(total / limit),
        },
      };

      return NextResponse.json(response, { status: 200 });
    }

    // Jika ada limit tanpa pagination (top N courses)
    if (limit !== undefined) {
      courses = courses.slice(0, limit);
    }

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
