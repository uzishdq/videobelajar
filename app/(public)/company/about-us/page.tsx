import PageHero from "@/components/company/page-hero";
import { Users, Target, Eye, Award } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Misi Kami",
    description:
      "Menyediakan akses pendidikan berkualitas tinggi untuk semua orang di Indonesia melalui platform pembelajaran video yang inovatif dan mudah digunakan.",
  },
  {
    icon: Eye,
    title: "Visi Kami",
    description:
      "Menjadi platform pembelajaran online terdepan di Indonesia yang memberdayakan setiap individu untuk mencapai potensi terbaik mereka.",
  },
  {
    icon: Users,
    title: "Tim Kami",
    description:
      "Didukung oleh tim profesional berpengalaman di bidang teknologi dan pendidikan yang berkomitmen untuk memberikan pengalaman belajar terbaik.",
  },
  {
    icon: Award,
    title: "Pencapaian",
    description:
      "Telah dipercaya oleh lebih dari 50.000 pelajar dan 500+ instruktur profesional di seluruh Indonesia sejak didirikan.",
  },
];

export default function AboutUsPage() {
  return (
    <section>
      <PageHero
        title="Tentang Kami"
        description="Kenali lebih dekat VideoBelajarmu — platform belajar online terbaik di Indonesia."
      />

      <section className="mx-auto px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Siapa Kami?</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground text-justify">
            VideoBelajarmu adalah platform pembelajaran online yang didirikan
            dengan tujuan memberikan akses pendidikan berkualitas untuk semua
            orang. Kami percaya bahwa setiap orang berhak mendapatkan pendidikan
            terbaik, tanpa batasan tempat dan waktu. Dengan berbagai kursus
            video yang dirancang oleh para ahli, kami membantu Anda belajar
            dengan cara yang lebih efektif dan menyenangkan.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-xl border border-border bg-card p-6 card-shadow transition-shadow hover:card-hover-shadow"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-accent to-background">
                <v.icon className="h-6 w-6 " />
              </div>
              <h3 className="text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
