import CourseSection from "@/components/course/course-section";
import CoursesContent from "@/components/course/courses-content";

export default async function CoursesPage() {
  return (
    <CourseSection
      title="Koleksi Video Pembelajaran Unggulan"
      description="Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!"
    >
      <CoursesContent />
    </CourseSection>
  );
}
