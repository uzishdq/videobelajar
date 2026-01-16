import CtaContent from "@/components/card/cta/cta-content";
import HeroContent from "@/components/card/hero/hero-content";
import HeroSection from "@/components/card/hero/hero-section";
import CourseFeatured from "@/components/course/course-featured";
import CourseSection from "@/components/course/course-section";
import { IMG_PUBLIC } from "@/lib/constant";
import { dataCourses } from "@/lib/data-dummy";

export default function Home() {
  return (
    <>
      <HeroSection img={IMG_PUBLIC.BG_HERO}>
        <HeroContent />
      </HeroSection>

      <CourseSection
        title="Koleksi Video Pembelajaran Unggulan"
        description="Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!"
      >
        <CourseFeatured data={dataCourses} />
      </CourseSection>

      <HeroSection img={IMG_PUBLIC.BG_CTA}>
        <CtaContent />
      </HeroSection>
    </>
  );
}
