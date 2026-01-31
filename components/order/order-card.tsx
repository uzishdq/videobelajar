import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";
import { MyOrder } from "@/lib/data-dummy";
import { formatTanggalID, formatToIDR } from "@/lib/helper";

type Status = "berhasil" | "gagal" | "menunggu";

export default function OrderCard({ data }: Readonly<{ data: MyOrder }>) {
  const badgeVariantMap: Record<Status, "default" | "destructive" | "outline"> =
    {
      berhasil: "default",
      gagal: "destructive",
      menunggu: "outline",
    };

  const statusLabelMap: Record<Status, string> = {
    berhasil: "Berhasil",
    gagal: "Gagal",
    menunggu: "Belum Bayar",
  };

  return (
    <div className="w-full border rounded-md">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 p-3 bg-secondary/50 border-b">
        <div className="flex flex-row items-center justify-between gap-2">
          <p className="flex items-center gap-2">
            <span className="hidden md:inline text-muted-foreground">
              No. Invoice
            </span>
            <Link href="#" target="_blank" className="text-blue-500 underline">
              <span className="font-medium">{data.noInvoice}</span>
            </Link>
          </p>

          <p className="flex items-center gap-2">
            <span className="hidden md:inline text-muted-foreground">
              Waktu Pembayaran
            </span>
            <span>{formatTanggalID(data.tanggal)}</span>
          </p>
        </div>
        <Badge variant={badgeVariantMap[data.status]}>
          {statusLabelMap[data.status]}
        </Badge>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row md:items-center justify-between p-3 gap-4">
        <div className="flex items-start gap-3">
          <div className="relative size-14 shrink-0 rounded-lg overflow-hidden">
            <Image
              src={data.img}
              alt={`${data.title}-picture`}
              fill
              className="object-cover"
              priority
            />
          </div>

          <h3 className="font-medium text-lg leading-snug">{data.title}</h3>
        </div>
        <div className="flex flex-row items-center justify-between gap-11">
          <div className="hidden md:block h-12 w-px bg-border" />
          <div className="flex flex-col items-start gap-1">
            <p className="text-sm text-muted-foreground">Harga</p>
            <p className="font-semibold text-lg">{formatToIDR(data.harga)}</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between p-3 bg-secondary/50 border-t">
        <p className="text-muted-foreground">Total Pembayaran</p>
        <p className="font-semibold text-lg text-primary">
          {formatToIDR(data.totalHarga)}
        </p>
      </div>
    </div>
  );
}
