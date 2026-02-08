import Nav from "@/components/navigasi/nav";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <main className="flex flex-col items-center px-7 py-5 md:px-6 md:py-16 space-y-6 md:space-y-16">
        {children}
      </main>
    </>
  );
}
