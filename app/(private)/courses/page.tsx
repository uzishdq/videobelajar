import CourseSection from "@/components/course/course-section";
import CoursesContent from "@/components/course/courses-content";
import FormStatus from "@/components/form/form-status";
import { getCourses } from "@/server/data/course-data";

interface ICoursesPage {
  searchParams: {
    page?: string;
    limit?: string;
    category?: string;
    priceStart?: string;
    priceEnd?: string;
    duration?: string;
    sortBy?: string;
    search?: string;
  };
}

export default async function CoursesPage({ searchParams }: ICoursesPage) {
  const params = await searchParams;

  const response = await getCourses({
    page: Number(params.page) || 1,
    limit: Number(params.limit) || 6,
    category: params.category,
    priceStart: params.priceStart ? Number(params.priceStart) : undefined,
    priceEnd: params.priceEnd ? Number(params.priceEnd) : undefined,
    duration: params.duration,
    sortBy: params.sortBy,
    search: params.search,
  });

  if (!response.ok) {
    return <FormStatus message={response.message} />;
  }

  return (
    <CourseSection
      title="Koleksi Video Pembelajaran Unggulan"
      description="Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!"
    >
      <CoursesContent data={response.data} meta={response.meta} />
    </CourseSection>
  );
}
