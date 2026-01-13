import FormNewsLetter from "@/components/form/form-news-letter";

export default function CtaContent() {
  return (
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
  );
}
