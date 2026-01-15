"use client";

import { NewsLetterSchema } from "@/lib/schema-validation/schema-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";

export default function FormNewsLetter() {
  const form = useForm<z.infer<typeof NewsLetterSchema>>({
    resolver: zodResolver(NewsLetterSchema),
    defaultValues: {
      email: "",
    },
    mode: "onChange",
  });

  function onSubmit(values: z.infer<typeof NewsLetterSchema>) {
    console.log(values);
    toast.success("berhasil");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="relative w-full rounded-lg max-w-md mx-auto flex flex-col sm:block"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="email"
                  className="w-full bg-white text-foreground px-4 md:px-7 py-4 md:py-7"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          variant="ghost"
          className="mt-2 md:mt-0 md:absolute md:top-1/2 md:right-2 md:-translate-y-1/2"
        >
          Subscribe
        </Button>
      </form>
    </Form>
  );
}
