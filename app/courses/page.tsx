import CourseSection from "@/components/course/course-section";
import CoursesContent from "@/components/course/courses-content";
import React from "react";

export default function CoursesPage() {
  return (
    <section className="flex min-h-screen flex-col items-center px-7 py-5 md:px-6 md:py-16 space-y-6 md:space-y-16">
      <CourseSection>
        <CoursesContent />
      </CourseSection>
    </section>
  );
}
