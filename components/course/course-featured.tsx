"use client";
import { Course, tabs } from "@/lib/data-dummy";
import React from "react";
import CourseSkeleton from "./course-skeleton";
import CourseCard from "./course-card";
import { LABEL } from "@/lib/constant";

export default function CourseFeatured({
  data,
}: Readonly<{ data: Course[] | null }>) {
  const [activeTab, setActiveTab] = React.useState("all");
  const [loading, setLoading] = React.useState(false);

  if (!data) {
    return (
      <div className="text-center p-10 text-gray-400 text-base font-medium border-2 border-dashed border-gray-200 rounded-lg bg-gray-50">
        {LABEL.ERROR.DATA_NOT_FOUND}
      </div>
    );
  }

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
    <div>
      <div className="flex gap-4 mb-6 md:mb-8 overflow-x-auto whitespace-nowrap px-4">
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
        <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 w-full gap-5">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <CourseSkeleton key={`skeleton-${activeTab}-${i}`} />
              ))
            : filteredCourses.map((course) => (
                <CourseCard key={course.id} data={course} />
              ))}
        </div>
      )}
    </div>
  );
}
