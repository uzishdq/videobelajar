import NavAside from "@/components/navigasi/nav-aside";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row  h-fit w-full items-start justify-start md:px-16 space-y-6 space-x-9">
      <NavAside />
      {children}
    </div>
  );
}
