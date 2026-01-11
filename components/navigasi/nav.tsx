import { IMG_PUBLIC, ROUTES } from "@/lib/constant";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <header className="bg-white w-full max-h-20 shadow">
      <nav className="flex items-center justify-between px-6 md:px-32 py-2">
        <Link
          href={ROUTES.PUBLIC.LOGIN}
          className="relative w-38 h-10.5 md:w-59.25 md:h-14"
        >
          <Image
            src={IMG_PUBLIC.LOGO}
            alt="videobelajar"
            className="object-contain"
            fill
          />
        </Link>
      </nav>
    </header>
  );
}
