"use server";

import { LABEL } from "@/lib/constant";
import { APIResponse, User } from "@/lib/data-dummy";
import { ProfileSchema } from "@/lib/schema-validation/schema-validation";
import { z } from "zod";

export async function updateUser(
  values: z.infer<typeof ProfileSchema>,
): Promise<APIResponse<User>> {
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/api/user`, {
      method: "PUT",
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

    const response: APIResponse<User> = await res.json();

    return response;
  } catch (error) {
    return {
      ok: false,
      data: null,
      message: error instanceof Error ? error.message : LABEL.ERROR.SERVER,
    };
  }
}
