import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "@/components/navigasi/nav";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
