import React from "react";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import { ROUTES } from "@/lib/constant";

export default function NavAside() {
  return (
    <aside className="min-w-73 space-y-6">
      <div>
        <h2 className="text-[20px] font-semibold text-gray-900 mb-2">
          Ubah Profile
        </h2>
        <p className="text-base text-gray-500">Ubah data diri Anda</p>
      </div>
      <Card className="w-full rounded-md">
        <CardContent className="flex flex-col items-center justify-center space-y-2">
          <Link
            href={ROUTES.PUBLIC.REGISTER}
            className="w-full text-center text-accent bg-accent/20 font-bold py-3 rounded-md"
          >
            Profile Saya
          </Link>
          <Link
            href={ROUTES.PUBLIC.REGISTER}
            className="w-full text-center text-accent bg-accent/20 font-bold py-3 rounded-md"
          >
            Kelas Saya
          </Link>
          <Link
            href={ROUTES.PUBLIC.REGISTER}
            className="w-full text-center text-accent bg-accent/20 hover:bg-white hover:text-muted-foreground font-bold py-3 rounded-md"
          >
            Pesanan Saya
          </Link>
        </CardContent>
      </Card>
    </aside>
  );
}
