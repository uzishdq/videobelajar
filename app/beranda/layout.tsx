import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import FooterSection from "@/components/footer/footer-section";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "videobelajar — Upgrade Skills, Anytime Anywhere",
  description:
    "Belajar lewat video interaktif dari mentor berpengalaman. Tingkatkan karier dan skill sesuai kebutuhan industri.",
};

export default function BerandaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className={`${poppins.variable} antialiased`}>
      <main>{children}</main>
      <FooterSection />
    </body>
  );
}
