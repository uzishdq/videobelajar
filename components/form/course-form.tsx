"use client";

import {
  CourseSchema,
  EditDeleteCourseSchema,
} from "@/lib/schema-validation/schema-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { toast } from "sonner";
import React from "react";
import { IBaseForm } from "@/lib/type";
import { Textarea } from "../ui/textarea";
import { D_CATEGORY, D_INSTRUCTOR, D_JOB } from "@/lib/constant";
import { formatToIDR, handleRupiahNumberChange } from "@/lib/helper";
import { Course } from "@/lib/data-dummy";
import {
  createCourse,
  deleteCourse,
  updateCourse,
} from "@/server/action/course-action";

function CreateCourseForm({ onSuccess }: Readonly<IBaseForm>) {
  const [isPending, startTransition] = React.useTransition();

  const form = useForm<z.infer<typeof CourseSchema>>({
    resolver: zodResolver(CourseSchema),
    defaultValues: {
      title: "",
      desc: "",
      instructor: "",
      job: "",
      price: 0,
      category: "",
    },
    mode: "onChange",
  });

  async function onSubmit(values: z.infer<typeof CourseSchema>) {
    startTransition(async () => {
      const response = await createCourse(values);

      if (response.ok) {
        onSuccess?.();
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-1">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="desc"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pilih category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {D_CATEGORY.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="instructor"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Instructor</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pilih instructor" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {D_INSTRUCTOR.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="job"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pilih job" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {D_JOB.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  inputMode="numeric"
                  value={formatToIDR(field.value ?? 0)}
                  onChange={(e) => handleRupiahNumberChange(field, e)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? "Loading..." : "Simpan"}
        </Button>
      </form>
    </Form>
  );
}

interface IUpdateOrDeleteForm<Course> extends IBaseForm {
  data: Course;
  mode: "update" | "delete";
}

function EditDeleteCourseForm({
  data,
  mode,
  onSuccess,
}: Readonly<IUpdateOrDeleteForm<Course>>) {
  const MODE_LABEL: Record<string, string> = {
    delete: "Delete",
    update: "Update",
  };

  const [isPending, startTransition] = React.useTransition();

  const form = useForm<z.infer<typeof EditDeleteCourseSchema>>({
    resolver: zodResolver(EditDeleteCourseSchema),
    defaultValues: {
      id: data.id ?? "",
      title: data.title ?? "",
      desc: data.desc ?? "",
      instructor: data.instructor ?? "",
      job: data.job ?? "",
      price: Number(data.price ?? 0),
      category: data.category ?? "",
    },
    mode: "onChange",
  });

  async function onSubmit(values: z.infer<typeof EditDeleteCourseSchema>) {
    startTransition(async () => {
      let result;
      if (mode === "update" && data?.id) {
        result = await updateCourse(values);
      } else {
        result = await deleteCourse(values);
      }

      if (result.ok) {
        toast.success(result.message);
        onSuccess?.();
      } else {
        toast.error(result.message);
      }
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-1">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input type="text" {...field} disabled={mode === "delete"} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {mode === "update" && (
          <>
            <FormField
              control={form.control}
              name="desc"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Pilih category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {D_CATEGORY.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="instructor"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Instructor</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="job"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Job</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      inputMode="numeric"
                      value={formatToIDR(field.value ?? 0)}
                      onChange={(e) => handleRupiahNumberChange(field, e)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}
        <Button
          type="submit"
          className="w-full"
          variant={mode === "delete" ? "destructive" : "default"}
          disabled={isPending}
        >
          {isPending ? "Loading..." : MODE_LABEL[mode]}
        </Button>
      </form>
    </Form>
  );
}

export { CreateCourseForm, EditDeleteCourseForm };
