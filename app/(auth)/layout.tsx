import Nav from "@/components/navigasi/nav";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <main className="flex min-h-screen items-center justify-center px-6">
        {children}
      </main>
    </>
  );
}
