import FooterSection from "@/components/footer/footer-section";
import Nav from "@/components/navigasi/nav";
import NavAside from "@/components/navigasi/nav-aside";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <main className="flex flex-col items-center px-7 py-5 md:px-6 md:py-16 space-y-6 md:space-y-16">
        <div className="flex flex-col md:flex-row  h-fit w-full items-start justify-start md:px-16 space-y-6 space-x-9">
          <NavAside />
          {children}
        </div>
      </main>
      <FooterSection />
    </>
  );
}
