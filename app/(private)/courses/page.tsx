import CourseSection from "@/components/course/course-section";
import CoursesContent from "@/components/course/courses-content";
import { getCourses } from "@/server/data/course-data";

export default async function CoursesPage() {
  const course = await getCourses();

  return (
    <section className="flex min-h-screen flex-col items-center px-7 py-5 md:px-6 md:py-16 space-y-6 md:space-y-16">
      <CourseSection
        title="Koleksi Video Pembelajaran Unggulan"
        description="Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!"
      >
        <CoursesContent data={course.data} />
      </CourseSection>
    </section>
  );
}
