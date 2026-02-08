"use server";

import { CACHE_CONFIG } from "@/lib/cache.config";
import { APIResponse, Course } from "@/lib/data-dummy";

interface CourseQueryParams {
  minRating?: number;
  limit?: number;
  page?: number;
  category?: string;
  priceStart?: number;
  priceEnd?: number;
  duration?: string;
  sortBy?: string;
  search?: string;
}

const buildCourseQueryString = (params?: CourseQueryParams): string => {
  if (!params) return "";

  const queryParams = new URLSearchParams();

  (Object.keys(params) as Array<keyof CourseQueryParams>).forEach((key) => {
    const value = params[key];
    if (value !== undefined && value !== null && value !== "") {
      queryParams.set(key, value.toString());
    }
  });

  const queryString = queryParams.toString();
  return queryString ? `${queryString}` : "";
};

export async function getCourses(
  params?: CourseQueryParams,
): Promise<APIResponse<Course[]>> {
  const queryParams = buildCourseQueryString(params);

  const url = `${process.env.API_BASE_URL}/api/courses?${queryParams}`;

  const res = await fetch(url, {
    next: CACHE_CONFIG.COURSES_LIST,
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  });

  return res.json();
}

export async function getCourse(): Promise<APIResponse<Course[]>> {
  try {
    const url = `${process.env.API_MOCK_URL}/course`;

    const res = await fetch(url, {
      next: CACHE_CONFIG.COURSES_LIST,
    });

    if (!res.ok) {
      return {
        ok: false,
        data: null,
        message: "Failed to fetch course data",
      };
    }

    const data: Course[] = await res.json();

    return {
      ok: true,
      data,
      message: "Success fetch courses",
    };
  } catch (error) {
    console.error(error);
    return {
      ok: false,
      data: null,
      message: "Internal server error",
    };
  }
}
