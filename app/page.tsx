import CtaContent from "@/components/card/cta/cta-content";
import HeroContent from "@/components/card/hero/hero-content";
import HeroSection from "@/components/card/hero/hero-section";
import CourseFeatured from "@/components/course/course-featured";
import CourseSection from "@/components/course/course-section";
import { IMG_PUBLIC } from "@/lib/constant";
import { getCourses } from "@/server/data/course-data";

export default async function Home() {
  const course = await getCourses({ minRating: 4.5, limit: 6 });

  return (
    <>
      <HeroSection img={IMG_PUBLIC.BG_HERO}>
        <HeroContent />
      </HeroSection>

      <CourseSection
        title="Koleksi Video Pembelajaran Unggulan"
        description="Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!"
      >
        <CourseFeatured data={course.data} />
      </CourseSection>

      <HeroSection img={IMG_PUBLIC.BG_CTA}>
        <CtaContent />
      </HeroSection>
    </>
  );
}
