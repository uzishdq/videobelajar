import { IMG_PUBLIC } from "@/lib/constant";

import CtaContent from "@/components/card/cta/cta-content";
import HeroContent from "@/components/card/hero/hero-content";
import HeroSection from "@/components/card/hero/hero-section";
import CourseWrap from "@/components/course/course-wrap";
import { DataCourses } from "@/lib/data-dummy";

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen flex-col items-center px-7 py-5 md:px-6 md:py-16 space-y-6 md:space-y-16">
      <HeroSection img={IMG_PUBLIC.BG_HERO}>
        <HeroContent />
      </HeroSection>

      <CourseWrap data={DataCourses} />

      <HeroSection img={IMG_PUBLIC.BG_CTA}>
        <CtaContent />
      </HeroSection>
    </main>
  );
}
