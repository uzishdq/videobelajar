import { cn } from "@/lib/utils";
import React from "react";

export default function CourseSection({
  children,
  className,
  title,
  description,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  title: string;
  description: string;
}>) {
  return (
    <section
      className={cn("flex flex-col justify-center w-full max-w-300", className)}
    >
      <div className="mb-6 md:mb-8 text-left">
        <h2 className="text-3xl font-bold text-gray-900 mb-2.5">{title}</h2>
        <p className="text-base text-gray-500">{description}</p>
      </div>
      {children}
    </section>
  );
}
