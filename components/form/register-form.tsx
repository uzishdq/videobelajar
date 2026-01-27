"use client";

import { RegisterSchema } from "@/lib/schema-validation/schema-validation";
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
import React from "react";
import { Eye, EyeOff } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = React.useState(false);

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      confimPassword: "",
    },
    mode: "onChange",
  });

  function onSubmit(values: z.infer<typeof RegisterSchema>) {
    console.log(values);
  }
  return (
    <Card className="w-full max-w-xl min-w-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl md:text-[32px]">
          Pendaftaran Akun
        </CardTitle>
        <CardDescription className="md:text-[16px]">
          Yuk, daftarkan akunmu sekarang juga!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Nama Lengkap<span className="text-red-500">*</span>
                  </FormLabel>
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
                <FormItem>
                  <FormLabel>
                    E-Mail<span className="text-red-500">*</span>
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
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    No. Hp<span className="text-red-500">*</span>
                  </FormLabel>
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

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Kata Sandi<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        {...field}
                      />
                      <Button
                        type="button"
                        variant="link"
                        size="icon"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5" />
                        ) : (
                          <Eye className="h-5" />
                        )}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confimPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Konfirmasi Kata Sandi<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        {...field}
                      />
                      <Button
                        type="button"
                        variant="link"
                        size="icon"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5" />
                        ) : (
                          <Eye className="h-5" />
                        )}
                      </Button>
                    </div>
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
                Daftar
              </Button>
              <Button
                type="button"
                variant="secondary"
                className="w-full"
                asChild
              >
                <Link href={ROUTES.PUBLIC.LOGIN}>Masuk</Link>
              </Button>
            </div>

            <div className="flex items-center my-6">
              <div className="flex-1 border-t border-gray-300" />
              <span className="px-3 text-sm text-gray-500">atau</span>
              <div className="flex-1 border-t border-gray-300" />
            </div>
            <Button type="button" variant="outline" className="w-full">
              <Image
                src={IMG_PUBLIC.GOOGLE}
                alt="Google"
                height={20}
                width={20}
              />
              <span className="font-medium">Daftar dengan Google</span>
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
