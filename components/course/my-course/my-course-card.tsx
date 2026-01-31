import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProgressBar } from "@/components/ui/progress-bar";
import { IMG_PUBLIC } from "@/lib/constant";
import { MyClass } from "@/lib/data-dummy";
import { BookText, Clock } from "lucide-react";
import Image from "next/image";
import React from "react";
type Status = "selesai" | "berjalan";

export default function MyCourseCard({ data }: Readonly<{ data: MyClass }>) {
  const badgeVariantMap: Record<Status, "default" | "outline"> = {
    selesai: "default",
    berjalan: "outline",
  };

  const statusLabelMap: Record<Status, string> = {
    selesai: "Selesai",
    berjalan: "Sedang Berjalan",
  };
  return (
    <div className="w-full border rounded-md">
      <div className="flex flex-row items-center justify-between p-3 bg-secondary/50 border-b">
        <p>
          {data.classDetail.modulStart}/{data.classDetail.modulEnd} Modul{" "}
          <span className="hidden md:inline">Terselesaikan</span>
        </p>
        <Badge variant={badgeVariantMap[data.classDetail.status]}>
          {statusLabelMap[data.classDetail.status]}
        </Badge>
      </div>

      <div className="flex flex-col md:flex-row p-3 gap-3">
        <div className="relative h-43 w-full md:h-43 md:w-61 shrink-0 rounded-lg overflow-hidden">
          <Image
            src={data.img}
            alt={`${data.title}-picture`}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-3">
          <h3 className="font-semibold">{data.title}</h3>
          <p className="hidden md:inline text-muted-foreground">{data.desc}</p>
          <div className="flex flex-row items-center space-x-2">
            <Avatar className="size-9 md:size-12 rounded-lg">
              <AvatarImage src={IMG_PUBLIC.DEFAULT_PROFILE} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="gap-1">
              <h3 className="font-medium">{data.instructor}</h3>
              <p className="text-sm text-muted-foreground">{data.job}</p>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-4 text-muted-foreground">
            <div className="flex items-center gap-1">
              <BookText className="size-4" />
              <span>{data.classDetail.modulEnd} Modul</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="size-4" />
              <span>360 Menit</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between p-3 gap-3 bg-secondary/50 border-t">
        <div className="inline-flex items-center w-full gap-1">
          <p className="text-muted-foreground min-w-fit text-sm md:text-base">
            Progres Kelas{" "}
            <span className="text-black">{data.classDetail.progress}%</span>
          </p>
          <ProgressBar value={data.classDetail.progress} />
        </div>
        {data.classDetail.status === "selesai" && (
          <Button variant="secondary" className="border w-full md:w-fit">
            Unduh Sertifikat
          </Button>
        )}
        <Button className="w-full md:w-fit">
          {data.classDetail.status === "selesai"
            ? "Lihat Detail Kelas"
            : "Lanjutkan Pembelajaran"}
        </Button>
      </div>
    </div>
  );
}
