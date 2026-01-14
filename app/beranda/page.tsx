import { IMG_PUBLIC } from "@/lib/constant";

import CtaContent from "@/components/card/cta/cta-content";
import HeroContent from "@/components/card/hero/hero-content";
import HeroSection from "@/components/card/hero/hero-section";
import { dataCourses } from "@/lib/data-dummy";
import CourseSection from "@/components/course/course-section";
import CourseHeader from "@/components/course/course-header";

export default function BerandaPage() {
  return (
    <main className="flex min-h-screen flex-col items-center px-7 py-5 md:px-6 md:py-16 space-y-6 md:space-y-16">
      <HeroSection img={IMG_PUBLIC.BG_HERO}>
        <HeroContent />
      </HeroSection>

      <CourseSection>
        <CourseHeader data={dataCourses} />
      </CourseSection>

      <HeroSection img={IMG_PUBLIC.BG_CTA}>
        <CtaContent />
      </HeroSection>
    </main>
  );
}
