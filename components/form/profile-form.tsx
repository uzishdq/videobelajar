"use client";

import { ProfileSchema } from "@/lib/schema-validation/schema-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { IMG_PUBLIC } from "@/lib/constant";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { User } from "@/lib/data-dummy";
import { toast } from "sonner";
import React from "react";
import { updateUser } from "@/server/action/user-action";

export default function ProfileForm({ data }: Readonly<{ data: User }>) {
  const [isPending, startTransition] = React.useTransition();

  const form = useForm<z.infer<typeof ProfileSchema>>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      id: data.id,
      name: data.name ?? "",
      email: data.email ?? "",
      phoneNumber: data.phone ?? "",
    },
    mode: "onChange",
  });

  async function onSubmit(values: z.infer<typeof ProfileSchema>) {
    startTransition(async () => {
      const response = await updateUser(values);

      if (response.ok) {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    });
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4 border-b">
        <Image
          src={IMG_PUBLIC.DEFAULT_PROFILE}
          alt="profile-pic"
          width={92}
          height={92}
          className="rounded-md shrink-0"
        />

        <div className="flex flex-col gap-1">
          <CardTitle className="text-xl">Masuk Ke Akun</CardTitle>
          <CardDescription className="text-base">
            Yuk, lanjutin belajarmu di videobelajar.
          </CardDescription>
          <p className="font-semibold text-base text-orange-500">
            Ganti Foto Profile
          </p>
        </div>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col md:flex-row items-center gap-3 mb-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Nama Lengkap</FormLabel>
                    <FormControl>
                      <Input type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>E-Mail</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>No.Hp</FormLabel>
                    <FormControl>
                      <div className="flex flex-row items-center justify-center gap-2">
                        <Select defaultValue="+62">
                          <SelectTrigger className="w-27.5">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent position="popper">
                            <SelectItem value="+62">🇮🇩 +62</SelectItem>
                            <SelectItem value="+60">🇲🇾 +60</SelectItem>
                            <SelectItem value="+65">🇸🇬 +65</SelectItem>
                          </SelectContent>
                        </Select>
                        <Input type="number" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? "Loading..." : "Simpan"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
