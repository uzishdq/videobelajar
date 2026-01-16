import FooterSection from "@/components/footer/footer-section";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center px-7 py-5 md:px-6 md:py-16 space-y-6 md:space-y-16">
        {children}
      </main>
      <FooterSection />
    </>
  );
}
