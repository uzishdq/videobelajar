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
    const validate = CourseSchema.safeParse(values);

    if (!validate.success) {
      return {
        ok: false,
        data: null,
        message: "Data tidak valid",
      };
    }

    const res = await fetch(`${process.env.API_MOCK_URL}/course`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validate.data),
    });

    if (!res.ok) {
      return {
        ok: false,
        data: null,
        message: LABEL.ERROR.SERVER,
      };
    }

    const createdCourse: Course = await res.json();

    return {
      ok: true,
      data: createdCourse,
      message: "Course berhasil dibuat",
    };
  } catch (error) {
    console.error(error);
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
    const validate = EditDeleteCourseSchema.safeParse(values);

    if (!validate.success) {
      return {
        ok: false,
        data: null,
        message: "Data tidak valid",
      };
    }

    const { id, ...payload } = validate.data;

    const res = await fetch(`${process.env.API_MOCK_URL}/course/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      return {
        ok: false,
        data: null,
        message: "Gagal memperbarui course",
      };
    }

    const updatedCourse: Course = await res.json();

    return {
      ok: true,
      data: updatedCourse,
      message: "Course berhasil diperbarui",
    };
  } catch (error) {
    console.error(error);
    return {
      ok: false,
      data: null,
      message:
        error instanceof Error
          ? error.message
          : "Terjadi kesalahan pada server",
    };
  }
}

// Delete Course
export async function deleteCourse(
  values: z.infer<typeof EditDeleteCourseSchema>,
): Promise<APIResponse<null>> {
  try {
    const validate = EditDeleteCourseSchema.safeParse(values);

    if (!validate.success) {
      return {
        ok: false,
        data: null,
        message: "Data tidak valid",
      };
    }

    const { id } = validate.data;

    const res = await fetch(`${process.env.API_MOCK_URL}/course/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      return {
        ok: false,
        data: null,
        message: "Gagal menghapus course",
      };
    }

    return {
      ok: true,
      data: null,
      message: "Course berhasil dihapus",
    };
  } catch (error) {
    return {
      ok: false,
      data: null,
      message: error instanceof Error ? error.message : "Terjadi kesalahan",
    };
  }
}
