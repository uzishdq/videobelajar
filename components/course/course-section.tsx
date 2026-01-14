import React from "react";

export default function CourseSection({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="flex flex-col justify-center w-full max-w-300">
      <div className="mb-6 md:mb-8 text-left">
        <h2 className="text-3xl font-bold text-gray-900 mb-2.5">
          Koleksi Video Pembelajaran Unggulan
        </h2>
        <p className="text-base text-gray-500">
          Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
        </p>
      </div>
      {children}
    </section>
  );
}
