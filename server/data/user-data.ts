"use server";

import { APIResponse, User } from "@/lib/data-dummy";

export async function getUser(): Promise<APIResponse<User[]>> {
  const res = await fetch(`${process.env.API_BASE_URL}/api/user`, {
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  });

  return res.json();
}
