"use server";

import { APIResponse, Course } from "@/lib/data-dummy";

export async function getCourses(params?: {
  minRating?: number;
  limit?: number;
  page?: number;
  category?: string;
  priceStart?: number;
  priceEnd?: number;
  duration?: string;
  sortBy?: string;
  search?: string;
}): Promise<APIResponse<Course[]>> {
  const queryParams = new URLSearchParams();

  if (params?.minRating)
    queryParams.set("minRating", params.minRating.toString());
  if (params?.limit) queryParams.set("limit", params.limit.toString());
  if (params?.page) queryParams.set("page", params.page.toString());
  if (params?.category) queryParams.set("category", params.category);
  if (params?.priceStart)
    queryParams.set("priceStart", params.priceStart.toString());
  if (params?.priceEnd) queryParams.set("priceEnd", params.priceEnd.toString());
  if (params?.duration) queryParams.set("duration", params.duration);
  if (params?.sortBy) queryParams.set("sortBy", params.sortBy);
  if (params?.search) queryParams.set("search", params.search);

  const url = `${process.env.API_BASE_URL}/api/courses?${queryParams.toString()}`;

  const res = await fetch(url, {
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  });

  return res.json();
}
