"use client";

import React from "react";

import { Course, tabs } from "@/lib/data-dummy";
import CourseSkeleton from "./course-skeleton";
import CourseCard from "./course-card";

export default function CourseWrap({ data }: Readonly<{ data: Course[] }>) {
  const [activeTab, setActiveTab] = React.useState("all");
  const [loading, setLoading] = React.useState(false);

  const filteredCourses =
    activeTab === "all"
      ? data
      : data.filter((course) => course.category === activeTab);

  const handleTabClick = (tabValue: string) => {
    setActiveTab(tabValue);
    setLoading(true);

    setTimeout(() => setLoading(false), 300);
  };

  return (
    <section className="flex flex-col justify-center w-full max-w-300">
      <div className="mb-12 text-left">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Koleksi Video Pembelajaran Unggulan
        </h2>
        <p className="text-base text-gray-500">
          Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
        </p>
      </div>

      <div className="flex gap-4 mb-12 overflow-x-scroll whitespace-nowrap px-4">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => handleTabClick(tab.value)}
            className={`relative text-base font-semibold py-2 transition-colors whitespace-nowrap ${
              activeTab === tab.value
                ? "text-orange-500"
                : "text-gray-400 hover:text-orange-500"
            }`}
          >
            {tab.label}
            {activeTab === tab.value && (
              <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 rounded"></span>
            )}
          </button>
        ))}
      </div>

      {filteredCourses.length === 0 ? (
        <div className="text-center p-10 text-gray-400 text-base font-medium border-2 border-dashed border-gray-200 rounded-lg bg-gray-50">
          Belum ada course di kategori ini.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-5">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <CourseSkeleton key={`skeleton-${activeTab}-${i}`} />
              ))
            : filteredCourses.map((course) => (
                <CourseCard key={course.id} data={course} />
              ))}
        </div>
      )}
    </section>
  );
}
