import PageHero from "@/components/company/page-hero";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/constant";
import { CheckCircle, Lightbulb, Target, TrendingUp } from "lucide-react";
import Link from "next/link";
import React from "react";

const tips = [
  {
    icon: Target,
    title: "Tetapkan Tujuan yang Jelas",
    description:
      "Tentukan apa yang ingin Anda capai sebelum memulai kursus. Tujuan yang spesifik akan membantu Anda tetap fokus dan termotivasi.",
  },
  {
    icon: Lightbulb,
    title: "Belajar Secara Konsisten",
    description:
      "Luangkan waktu setiap hari untuk belajar, meskipun hanya 30 menit. Konsistensi lebih efektif daripada belajar maraton sesekali.",
  },
  {
    icon: TrendingUp,
    title: "Praktikkan Apa yang Dipelajari",
    description:
      "Terapkan materi yang dipelajari ke proyek nyata. Praktik langsung memperkuat pemahaman dan membangun portofolio Anda.",
  },
  {
    icon: CheckCircle,
    title: "Bergabung dengan Komunitas",
    description:
      "Diskusikan materi dengan sesama pelajar. Belajar bersama mempercepat pemahaman dan membuka perspektif baru.",
  },
];

export default function SuccessTipsPage() {
  return (
    <section>
      <PageHero
        title="Tips Sukses Belajar"
        description="Strategi dan tips terbaik untuk memaksimalkan pengalaman belajar Anda di VideoBelajarmu."
      />

      <section className="mx-auto px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2">
          {tips.map((tip) => (
            <div
              key={tip.title}
              className="rounded-xl border border-border bg-card p-6 card-shadow"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br from-accent to-background">
                <tip.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold">{tip.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground text-justify">
                {tip.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-xl bg-linear-to-br from-accent to-background p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Mulai Perjalanan Belajar Anda
          </h2>
          <p className="mx-auto mt-3 max-w-xl">
            Dengan menerapkan tips di atas secara konsisten, Anda akan melihat
            kemajuan yang signifikan dalam waktu singkat. Selamat belajar!
          </p>
          <Button
            size="lg"
            variant="outline"
            className="mt-6 font-semibold"
            asChild
          >
            <Link href={ROUTES.PUBLIC.INDEX}>Mulai Belajar</Link>
          </Button>
        </div>
      </section>
    </section>
  );
}
