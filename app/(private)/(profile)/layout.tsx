import FooterSection from "@/components/footer/footer-section";
import NavAside from "@/components/navigasi/nav-aside";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="flex h-fit flex-col md:flex-row items-start justify-start px-7 py-5 md:px-16 md:py-16 space-y-6 space-x-9">
        <NavAside />
        {children}
      </main>
      <FooterSection />
    </>
  );
}
