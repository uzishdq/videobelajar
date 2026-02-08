import CtaContent from "@/components/card/cta/cta-content";
import HeroContent from "@/components/card/hero/hero-content";
import HeroSection from "@/components/card/hero/hero-section";
import CourseFeatured from "@/components/course/course-featured";
import CourseSection from "@/components/course/course-section";
import FooterSection from "@/components/footer/footer-section";
import Nav from "@/components/navigasi/nav";
import { IMG_PUBLIC } from "@/lib/constant";
import { getCourses } from "@/server/data/course-data";

export default async function Home() {
  const course = await getCourses({ minRating: 4.5, limit: 6 });

  return (
    <>
      <Nav />
      <main className="flex flex-col items-center px-7 py-5 md:px-6 md:py-16 space-y-6 md:space-y-16">
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
      </main>
      <FooterSection />
    </>
  );
}
