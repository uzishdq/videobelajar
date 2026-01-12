"use client";

import { LoginSchema } from "@/lib/schema-validation/schema-validation";
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
import Link from "next/link";
import { IMG_PUBLIC, ROUTES } from "@/lib/constant";
import Image from "next/image";

export default function LoginForm() {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  function onSubmit(values: z.infer<typeof LoginSchema>) {
    console.log(values);
  }
  return (
    <Card className="w-full max-w-xl min-w-sm">
      <CardHeader className="text-center py-2.5">
        <CardTitle className="text-2xl md:text-[32px]">Masuk Ke Akun</CardTitle>
        <CardDescription className="md:text-[16px]">
          Yuk, lanjutin belajarmu di videobelajar.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    E-Mail <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Kata Sandi <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end">
              <Button
                type="button"
                variant="link"
                className="text-muted-foreground font-medium"
                asChild
              >
                <Link href={ROUTES.PUBLIC.FORGOT_PASSWORD}>Lupa Password?</Link>
              </Button>
            </div>

            <div className="space-y-4">
              <Button type="submit" className="w-full">
                Masuk
              </Button>
              <Button
                type="button"
                variant="secondary"
                className="w-full"
                asChild
              >
                <Link href={ROUTES.PUBLIC.REGISTER}>Daftar</Link>
              </Button>
            </div>

            <div className="flex items-center my-6">
              <div className="flex-1 border-t border-gray-300" />
              <span className="px-3 text-sm text-gray-500">atau</span>
              <div className="flex-1 border-t border-gray-300" />
            </div>
            <Button type="button" variant="ghost" className="w-full">
              <Image
                src={IMG_PUBLIC.GOOGLE}
                alt="Google"
                height={20}
                width={20}
              />
              <span className="font-medium">Masuk dengan Google</span>
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
