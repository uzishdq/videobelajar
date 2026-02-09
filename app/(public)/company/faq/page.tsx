import PageHero from "@/components/company/page-hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

const faqItems = [
  {
    value: "item-1",
    trigger: "Apa itu VideoBelajarmu?",
    content:
      "VideoBelajarmu adalah platform pembelajaran online yang menyediakan berbagai kursus video berkualitas tinggi dari instruktur profesional di berbagai bidang keahlian.",
  },
  {
    value: "item-2",
    trigger: "Bagaimana cara mendaftar?",
    content:
      "Anda dapat mendaftar dengan mengklik tombol 'Daftar' di halaman utama. Isi formulir pendaftaran dengan data diri Anda, lalu verifikasi email untuk mengaktifkan akun.",
  },
  {
    value: "item-3",
    trigger: "Apakah ada kursus gratis?",
    content:
      "Ya! Kami menyediakan sejumlah kursus gratis yang bisa Anda akses tanpa biaya. Kursus premium juga tersedia dengan harga terjangkau.",
  },
  {
    value: "item-4",
    trigger: "Bagaimana cara mengakses kursus yang sudah dibeli?",
    content:
      "Setelah membeli kursus, Anda dapat mengaksesnya melalui dashboard pribadi Anda. Kursus tersedia selamanya setelah pembelian.",
  },
  {
    value: "item-5",
    trigger: "Apakah ada sertifikat setelah menyelesaikan kursus?",
    content:
      "Ya, setiap kursus yang diselesaikan akan mendapatkan sertifikat digital yang bisa diunduh dan dibagikan di profil profesional Anda.",
  },
  {
    value: "item-6",
    trigger: "Bagaimana metode pembayarannya?",
    content:
      "Kami mendukung berbagai metode pembayaran termasuk transfer bank, e-wallet (GoPay, OVO, Dana), dan kartu kredit/debit.",
  },
  {
    value: "item-7",
    trigger: "Apakah bisa refund?",
    content:
      "Ya, Anda dapat mengajukan refund dalam waktu 7 hari setelah pembelian jika kursus tidak sesuai dengan deskripsi. Syarat dan ketentuan berlaku.",
  },
  {
    value: "item-8",
    trigger: "Bagaimana cara menghubungi customer support?",
    content:
      "Anda dapat menghubungi kami melalui halaman Bantuan, email di support@videobelajarmu.com, atau live chat yang tersedia 24/7.",
  },
];

export default function FaqPage() {
  return (
    <section>
      <PageHero
        title="Pertanyaan Umum (FAQ)"
        description="Temukan jawaban atas pertanyaan yang sering diajukan tentang VideoBelajarmu."
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="max-w-2xl space-y-4"
        >
          {faqItems.map((item) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="rounded-xl border border-border bg-card px-5 card-shadow"
            >
              <AccordionTrigger className="font-semibold text-lg">
                {item.trigger}
              </AccordionTrigger>
              <AccordionContent className="text-base">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </section>
  );
}
