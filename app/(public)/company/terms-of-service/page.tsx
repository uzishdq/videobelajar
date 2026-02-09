import PageHero from "@/components/company/page-hero";
import React from "react";

const sections = [
  {
    title: "1. Penerimaan Ketentuan",
    content:
      "Dengan mengakses dan menggunakan platform VideoBelajarmu, Anda menyetujui dan terikat oleh ketentuan layanan ini. Jika Anda tidak menyetujui ketentuan ini, mohon untuk tidak menggunakan layanan kami.",
  },
  {
    title: "2. Akun Pengguna",
    content:
      "Anda bertanggung jawab untuk menjaga kerahasiaan akun dan kata sandi Anda. Setiap aktivitas yang terjadi di bawah akun Anda menjadi tanggung jawab Anda sepenuhnya. Segera hubungi kami jika menemukan penggunaan tidak sah pada akun Anda.",
  },
  {
    title: "3. Penggunaan Konten",
    content:
      "Semua materi kursus, video, dan konten lainnya di platform ini dilindungi oleh hak cipta. Anda diperbolehkan mengakses konten untuk penggunaan pribadi dan non-komersial. Dilarang keras mendistribusikan, mereproduksi, atau menjual kembali konten tanpa izin tertulis.",
  },
  {
    title: "4. Pembayaran dan Pengembalian Dana",
    content:
      "Pembayaran kursus bersifat satu kali dan memberikan akses selamanya. Pengembalian dana dapat diajukan dalam waktu 7 hari setelah pembelian apabila konten tidak sesuai deskripsi. Biaya administrasi mungkin berlaku.",
  },
  {
    title: "5. Perilaku Pengguna",
    content:
      "Pengguna dilarang mengunggah konten yang melanggar hukum, menyinggung, atau melanggar hak orang lain. Kami berhak menangguhkan atau menghapus akun yang melanggar ketentuan ini tanpa pemberitahuan terlebih dahulu.",
  },
  {
    title: "6. Batasan Tanggung Jawab",
    content:
      "VideoBelajarmu tidak bertanggung jawab atas kerugian langsung maupun tidak langsung yang timbul dari penggunaan platform. Kami berusaha menyediakan layanan yang andal, namun tidak menjamin ketersediaan layanan 100% sepanjang waktu.",
  },
  {
    title: "7. Perubahan Ketentuan",
    content:
      "Kami berhak mengubah ketentuan layanan ini kapan saja. Perubahan akan berlaku segera setelah dipublikasikan di platform. Penggunaan berkelanjutan setelah perubahan berarti Anda menerima ketentuan yang diperbarui.",
  },
];

export default function TermsOfServicePage() {
  return (
    <section>
      <PageHero
        title="Ketentuan Layanan"
        description="Syarat dan ketentuan penggunaan platform VideoBelajarmu."
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
