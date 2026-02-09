import PageHero from "@/components/company/page-hero";
import { Button } from "@/components/ui/button";
import { BookOpen, Mail, MessageCircle, Phone } from "lucide-react";
import React from "react";

const channels = [
  {
    icon: Mail,
    title: "Email",
    description:
      "Kirim pertanyaan Anda ke email kami dan kami akan merespons dalam 24 jam.",
    action: "support@videobelajarmu.com",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description:
      "Hubungi tim kami secara langsung melalui live chat yang tersedia 24/7.",
    action: "Mulai Chat",
  },
  {
    icon: Phone,
    title: "Telepon",
    description: "Hubungi kami di jam kerja (Senin–Jumat, 08:00–17:00 WIB).",
    action: "(021) 1234-5678",
  },
  {
    icon: BookOpen,
    title: "Pusat Pengetahuan",
    description:
      "Jelajahi artikel dan panduan lengkap untuk membantu Anda menggunakan platform.",
    action: "Buka Panduan",
  },
];

export default function HelpPage() {
  return (
    <section>
      <PageHero
        title="Pusat Bantuan"
        description="Kami siap membantu Anda. Pilih cara yang paling nyaman untuk menghubungi kami."
      />

      <section className="mx-auto px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2">
          {channels.map((c) => (
            <div
              key={c.title}
              className="flex flex-col rounded-xl border border-border bg-card p-6 card-shadow transition-shadow hover:card-hover-shadow"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-accent to-background">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {c.description}
              </p>
              <Button variant="outline" className="mt-4 w-fit" size="sm">
                {c.action}
              </Button>
            </div>
          ))}
        </div>

        {/* Quick help */}
        <div className="mt-16 rounded-xl bg-linear-to-br from-accent to-background p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Masih butuh bantuan?
          </h2>
          <p className="mx-auto mt-3 max-w-xl">
            Tim kami siap membantu menjawab pertanyaan Anda. Jangan ragu untuk
            menghubungi kami kapan saja.
          </p>
          <Button variant="outline" size="lg" className="mt-6 font-semibold">
            Hubungi Kami Sekarang
          </Button>
        </div>
      </section>
    </section>
  );
}
