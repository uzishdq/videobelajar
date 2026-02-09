import PageHero from "@/components/company/page-hero";
import { ArrowRight, Calendar } from "lucide-react";
import React from "react";

const posts = [
  {
    title: "Cara Efektif Belajar Coding untuk Pemula",
    excerpt:
      "Panduan lengkap untuk memulai perjalanan coding Anda dari nol hingga mahir.",
    date: "5 Februari 2026",
    category: "Coding",
  },
  {
    title: "5 Skill Digital yang Paling Dicari di 2026",
    excerpt:
      "Pelajari skill-skill digital yang sedang tren dan banyak dicari perusahaan tahun ini.",
    date: "1 Februari 2026",
    category: "Karier",
  },
  {
    title: "Manfaat Belajar Online untuk Pengembangan Diri",
    excerpt:
      "Mengapa belajar online menjadi pilihan terbaik untuk meningkatkan kompetensi Anda.",
    date: "28 Januari 2026",
    category: "Edukasi",
  },
  {
    title: "Tips Manajemen Waktu untuk Pelajar Online",
    excerpt:
      "Strategi mengatur waktu agar belajar online tetap produktif dan menyenangkan.",
    date: "20 Januari 2026",
    category: "Produktivitas",
  },
];

export default function BlogPage() {
  return (
    <section>
      <PageHero
        title="Blog"
        description="Artikel, insight, dan tips terbaru seputar dunia pembelajaran online dan pengembangan diri."
      />

      <section className="w-full mx-auto space-y-6">
        {posts.map((post) => (
          <article
            key={post.title}
            className="group rounded-xl border border-border bg-card p-6 transition-all hover:card-hover-shadow hover:border-primary/30 card-shadow"
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" />
                {post.date}
              </span>
            </div>
            <h3 className="mb-2 text-lg font-bold group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
              {post.excerpt}
            </p>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
              Baca Selengkapnya
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </article>
        ))}
      </section>
    </section>
  );
}
