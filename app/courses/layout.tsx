import FooterSection from "@/components/footer/footer-section";

export default function CoursesLayout({
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
