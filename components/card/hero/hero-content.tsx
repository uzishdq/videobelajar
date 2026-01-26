import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/constant";
import Link from "next/link";

export default function HeroContent() {
  return (
    <div className="relative z-10 text-center justify-center-safe text-white mx-4 my-10 md:mx-12 md:my-16 space-y-3">
      <h2 className="font-bold text-3xl md:text-5xl">
        Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
        Interaktif!
      </h2>
      <p className="text-sm md:text-base">
        Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
        pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
        berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman
        Anda.
      </p>
      <Button type="button" className="mt-6" asChild>
        <Link href={ROUTES.PUBLIC.COURSES.INDEX}>
          Temukan Video Course untuk Dipelajari!
        </Link>
      </Button>
    </div>
  );
}
