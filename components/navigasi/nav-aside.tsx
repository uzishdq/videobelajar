"use client";

import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import { ROUTES } from "@/lib/constant";
import { BookMarked, ShoppingCart, User } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { isPathActive } from "@/lib/helper";

export default function NavAside() {
  const path = usePathname();

  const config = { title: "", desc: "" };

  switch (path) {
    case ROUTES.AUTH.PROFILE.INDEX:
      config.title = "Ubah Profile";
      config.desc = "Ubah data diri Anda";
      break;
    case ROUTES.AUTH.PROFILE.KELAS:
      config.title = "Daftar Kelas";
      config.desc =
        "Akses Materi Belajar dan Mulailah Meningkatkan Pengetahuan Anda!";
      break;
    case ROUTES.AUTH.PROFILE.PESANAN:
      config.title = "Daftar Pesanan";
      config.desc = "Informasi terperinci mengenai pembelian";
      break;
    default:
      config.title = "Tidak ada Daftar";
      config.desc = "";
      break;
  }
  return (
    <aside className="w-full min-w-73 md:w-73 space-y-6">
      <div>
        <h2 className="text-[20px] font-semibold mb-2">{config.title}</h2>
        <p className="text-base text-gray-500">{config.desc}</p>
      </div>
      <Card className="w-full rounded-md">
        <CardContent className="flex flex-col items-center justify-center space-y-2">
          <Link
            href={ROUTES.AUTH.PROFILE.INDEX}
            className={cn(
              "flex items-center justify-start gap-2 w-full rounded-md py-3 px-2 font-bold transition-colors",
              isPathActive(path, ROUTES.AUTH.PROFILE.INDEX)
                ? "bg-accent/20 text-accent border border-accent"
                : "bg-white text-muted-foreground hover:bg-accent/20 hover:text-accent",
            )}
          >
            <User className="h-5 w-5" />
            <span>Profile Saya</span>
          </Link>
          <Link
            href={ROUTES.AUTH.PROFILE.KELAS}
            className={cn(
              "flex items-center justify-start gap-2 w-full rounded-md py-3 px-2 font-bold transition-colors",
              isPathActive(path, ROUTES.AUTH.PROFILE.KELAS)
                ? "bg-accent/20 text-accent border border-accent"
                : "bg-white text-muted-foreground hover:bg-accent/20 hover:text-accent",
            )}
          >
            <BookMarked className="h-5 w-5" />
            <span>Kelas Saya</span>
          </Link>
          <Link
            href={ROUTES.AUTH.PROFILE.PESANAN}
            className={cn(
              "flex items-center justify-start gap-2 w-full rounded-md py-3 px-2 font-bold transition-colors",
              isPathActive(path, ROUTES.AUTH.PROFILE.PESANAN)
                ? "bg-accent/20 text-accent border border-accent"
                : "bg-white text-muted-foreground hover:bg-accent/20 hover:text-accent",
            )}
          >
            <ShoppingCart className="h-5 w-5" />
            <span>Pesanan Saya</span>
          </Link>
        </CardContent>
      </Card>
    </aside>
  );
}
