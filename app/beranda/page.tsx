import { IMG_PUBLIC } from "@/lib/constant";

import { dataCourses } from "@/lib/data-dummy";

import CtaContent from "@/components/card/cta/cta-content";
import HeroContent from "@/components/card/hero/hero-content";
import HeroSection from "@/components/card/hero/hero-section";
import CourseSection from "@/components/course/course-section";
import CourseFeatured from "@/components/course/course-featured";

export default function BerandaPage() {
  return (
    <section className="flex min-h-screen flex-col items-center px-7 py-5 md:px-6 md:py-16 space-y-6 md:space-y-16">
      <HeroSection img={IMG_PUBLIC.BG_HERO}>
        <HeroContent />
      </HeroSection>

      <CourseSection>
        <CourseFeatured data={dataCourses} />
      </CourseSection>

      <HeroSection img={IMG_PUBLIC.BG_CTA}>
        <CtaContent />
      </HeroSection>
    </section>
  );
}
