import FooterSection from "@/components/footer/footer-section";

export default function BerandaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main>{children}</main>
      <FooterSection />
    </>
  );
}
