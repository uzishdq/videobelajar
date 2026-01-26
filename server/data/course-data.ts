"use server";

import { APIResponse, Course } from "@/lib/data-dummy";

export async function getCourses(): Promise<APIResponse<Course[]>> {
  const res = await fetch(`${process.env.API_BASE_URL}/api/courses`, {
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  });

  return res.json();
}
