"use client";

import { HIDDEN_PATHS, IMG_PUBLIC, ROUTES } from "@/lib/constant";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { LogOutIcon, Menu } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Nav() {
  const path = usePathname();

  return (
    <header className="bg-white w-full max-h-20 shadow">
      <nav className="flex items-center justify-between px-6 md:px-32 py-2">
        <Link
          href={ROUTES.PUBLIC.INDEX}
          className="relative w-38 h-10.5 md:w-59.25 md:h-14"
        >
          <Image
            src={IMG_PUBLIC.LOGO}
            alt="videobelajar"
            className="object-contain"
            fill
          />
        </Link>

        {!HIDDEN_PATHS.includes(path) && (
          <div className="flex items-center gap-2">
            <p className="hidden md:block">kategori</p>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center">
                  <Menu className="md:hidden size-6" />

                  <Avatar className="hidden md:flex size-9 md:size-12 rounded-lg">
                    <AvatarImage src={IMG_PUBLIC.DEFAULT_PROFILE} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href={ROUTES.AUTH.PROFILE.INDEX} className="w-full">
                    Profil Saya
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={ROUTES.AUTH.PROFILE.KELAS} className="w-full">
                    Kelas Saya
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={ROUTES.AUTH.PROFILE.PESANAN} className="w-full">
                    Pesanan Saya
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem variant="destructive">
                  <LogOutIcon />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </nav>
    </header>
  );
}
