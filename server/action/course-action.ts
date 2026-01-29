"use server";

import { LABEL } from "@/lib/constant";
import { APIResponse, Course } from "@/lib/data-dummy";
import {
  CourseSchema,
  EditDeleteCourseSchema,
} from "@/lib/schema-validation/schema-validation";
import { z } from "zod";

export async function createCourse(
  values: z.infer<typeof CourseSchema>,
): Promise<APIResponse<Course>> {
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/api/courses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      return {
        ok: false,
        data: null,
        message: LABEL.ERROR.SERVER,
      };
    }

    const response: APIResponse<Course> = await res.json();

    return response;
  } catch (error) {
    return {
      ok: false,
      data: null,
      message: error instanceof Error ? error.message : LABEL.ERROR.SERVER,
    };
  }
}

export async function updateCourse(
  values: z.infer<typeof EditDeleteCourseSchema>,
): Promise<APIResponse<Course>> {
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/api/courses`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
      body: JSON.stringify(values),
    });

    const response: APIResponse<Course> = await res.json();

    return response;
  } catch (error) {
    return {
      ok: false,
      data: null,
      message: error instanceof Error ? error.message : "Terjadi kesalahan",
    };
  }
}

// Delete Course
export async function deleteCourse(
  values: z.infer<typeof EditDeleteCourseSchema>,
): Promise<APIResponse<Course>> {
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/api/courses`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
      body: JSON.stringify(values),
    });

    const response: APIResponse<Course> = await res.json();

    return response;
  } catch (error) {
    return {
      ok: false,
      data: null,
      message: error instanceof Error ? error.message : "Terjadi kesalahan",
    };
  }
}
