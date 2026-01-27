import CourseSection from "@/components/course/course-section";
import CoursesContent from "@/components/course/courses-content";
import { getCourses } from "@/server/data/course-data";

export default async function CoursesPage() {
  const course = await getCourses();

  return (
    <CourseSection
      title="Koleksi Video Pembelajaran Unggulan"
      description="Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!"
    >
      <CoursesContent data={course.data} />
    </CourseSection>
  );
}
