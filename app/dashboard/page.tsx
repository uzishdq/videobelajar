import { IMG_PUBLIC } from "@/lib/constant";

import CourseCard from "@/components/card/course/course-card";
import CtaContent from "@/components/card/cta/cta-content";
import HeroContent from "@/components/card/hero/hero-content";
import HeroSection from "@/components/card/hero/hero-section";

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen flex-col items-center px-7 py-5 md:px-6 md:py-16 space-y-6 md:space-y-16">
      <HeroSection img={IMG_PUBLIC.BG_HERO}>
        <HeroContent />
      </HeroSection>

      <section className="flex flex-col justify-center w-full max-w-300">
        <div className="mb-12 text-left">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Koleksi Video Pembelajaran Unggulan
          </h2>
          <p className="text-base text-gray-500">
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-5">
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </section>

      <HeroSection img={IMG_PUBLIC.BG_CTA}>
        <CtaContent />
      </HeroSection>
    </main>
  );
}
