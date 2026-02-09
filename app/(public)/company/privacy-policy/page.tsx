import PageHero from "@/components/company/page-hero";
import React from "react";

const sections = [
  {
    title: "1. Informasi yang Kami Kumpulkan",
    content:
      "Kami mengumpulkan informasi yang Anda berikan secara langsung saat mendaftar akun, melakukan pembelian kursus, atau menghubungi layanan pelanggan. Informasi ini meliputi nama lengkap, alamat email, nomor telepon, dan informasi pembayaran.",
  },
  {
    title: "2. Penggunaan Informasi",
    content:
      "Informasi yang kami kumpulkan digunakan untuk menyediakan dan meningkatkan layanan kami, memproses transaksi, mengirim komunikasi terkait layanan, serta mempersonalisasi pengalaman belajar Anda di platform kami.",
  },
  {
    title: "3. Perlindungan Data",
    content:
      "Kami menggunakan langkah-langkah keamanan teknis dan organisasi yang tepat untuk melindungi data pribadi Anda dari akses yang tidak sah, pengungkapan, perubahan, atau perusakan. Data sensitif dienkripsi menggunakan teknologi SSL/TLS.",
  },
  {
    title: "4. Cookies dan Teknologi Pelacakan",
    content:
      "Kami menggunakan cookies dan teknologi serupa untuk meningkatkan pengalaman pengguna, menganalisis penggunaan situs, dan menyajikan konten yang relevan. Anda dapat mengelola preferensi cookies melalui pengaturan browser Anda.",
  },
  {
    title: "5. Berbagi Informasi dengan Pihak Ketiga",
    content:
      "Kami tidak menjual atau menyewakan informasi pribadi Anda kepada pihak ketiga. Kami hanya berbagi informasi dengan mitra terpercaya yang membantu kami mengoperasikan platform, seperti penyedia layanan pembayaran dan hosting.",
  },
  {
    title: "6. Hak Pengguna",
    content:
      "Anda memiliki hak untuk mengakses, memperbarui, atau menghapus data pribadi Anda kapan saja. Untuk mengajukan permintaan terkait data pribadi, silakan hubungi tim kami melalui halaman Bantuan.",
  },
  {
    title: "7. Perubahan Kebijakan",
    content:
      "Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan signifikan akan diberitahukan melalui email atau pemberitahuan di platform. Tanggal pembaruan terakhir akan dicantumkan di bagian atas halaman ini.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section>
      <PageHero
        title="Kebijakan Privasi"
        description="Kami berkomitmen untuk melindungi privasi dan data pribadi Anda."
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="mb-8 text-sm text-muted-foreground">
          Terakhir diperbarui: 1 Februari 2026
        </p>
        <div className="space-y-8">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-lg font-semibold">{s.title}</h2>
              <p className="mt-2 leading-relaxed text-muted-foreground text-justify">
                {s.content}
              </p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
