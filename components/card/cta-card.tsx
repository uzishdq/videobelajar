import { IMG_PUBLIC } from "@/lib/constant";
import Image from "next/image";
import FormNewsLetter from "../form/form-news-letter";

export default function CtaCard() {
  return (
    <section className="relative flex items-center justify-center bg-black w-full min-w-[320px] max-w-300 h-100 rounded-[10px]">
      <Image
        src={IMG_PUBLIC.BG_CTA}
        alt="hero backgound"
        className="object-cover rounded-[10px]"
        fill
        priority
      />

      <div className="absolute inset-0 rounded-[10px] bg-black/80" />

      <div className="relative z-10 text-center justify-center-safe text-white mx-4 my-10 md:mx-12 md:my-16 space-y-3">
        <p className="text-sm md:text-lg font-light">NEWSLETTER</p>
        <h2 className="font-bold text-3xl md:text-5xl">
          Mau Belajar Lebih Banyak?
        </h2>
        <p className="text-sm md:text-base">
          Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
          spesial dari program-program terbaik hariesok.id
        </p>
        <FormNewsLetter />
      </div>
    </section>
  );
}
