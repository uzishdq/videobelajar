import { RatingStars } from "@/components/course/rating-course";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IMG_PUBLIC } from "@/lib/constant";
import {
  BookMinus,
  FileBadge,
  FileCheck,
  FilePenLine,
  Globe,
  Video,
} from "lucide-react";
import Image from "next/image";
import React from "react";

export default function DetailCoursePage() {
  return (
    <section className="flex min-h-screen flex-col items-center px-7 py-5 md:px-32 md:py-16 space-y-6 md:space-y-9">
      <div className="relative flex items-center justify-center bg-black w-full min-w-[320px] h-100 max-h-100 rounded-[10px]">
        <Image
          src={IMG_PUBLIC.BG_HERO}
          alt="hero backgound"
          className="object-cover rounded-[10px]"
          fill
          priority
        />

        <div className="absolute inset-0 rounded-[10px] bg-black/80" />

        <div className="relative z-10 text-left justify-center-safe text-white mx-5 my-4 md:mx-12 md:my-16 space-y-3">
          <h2 className="font-bold text-2xl md:text-[40px]">
            Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product
            Manager.
          </h2>
          <p className="text-sm md:text-base">
            Belajar bersama tutor profesional di Video Course. Kapanpun, di
            manapun.
          </p>
          <div className="flex items-center gap-1 mt-6">
            <RatingStars rating={4.3} />
            <span className=" text-sm text-muted-foreground">
              3.5 <span>(86)</span>
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-9">
        <Card className="w-full h-fit order-1 md:order-2">
          <CardHeader>
            <CardTitle className="text-[18px]">
              Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product
              Manager.
            </CardTitle>
            <div className="flex flex-row items-center justify-between">
              <h3 className="text-[18px] text-primary font-bold">
                Rp 250k{" "}
                <span className="text-muted-foreground line-through">
                  Rp 250k
                </span>
              </h3>
              <Badge className="rounded-md">Diskon 50%</Badge>
            </div>
            <p className="text-sm text-blue-600 font-medium">
              Penawaran spesial tersisa 2 hari lagi!
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <Button className="w-full">Beli Sekarang</Button>
            <div className="space-y-3">
              <h3 className="text-sm font-semibold">
                Kelas Ini Sudah Termasuk
              </h3>
              <div className="grid grid-cols-2 text-sm text-muted-foreground gap-4">
                <p className="flex flex-row items-center  gap-1">
                  <FileCheck className="w-4.5" />
                  Ujian Akhir
                </p>
                <p className="flex flex-row items-center gap-1">
                  <BookMinus className="w-4.5" />7 Dokumen
                </p>
                <p className="flex flex-row items-center gap-1">
                  <FilePenLine className="w-4.5" />
                  Pretest
                </p>
                <p className="flex flex-row items-center gap-1">
                  <Video className="w-4.5" />
                  49 Video
                </p>
                <p className="flex flex-row items-center gap-1">
                  <FileBadge className="w-4.5" />
                  Sertifikat
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-semibold">Bahasa Pengantar</h3>
              <div className="grid grid-cols-2 text-sm text-muted-foreground gap-4">
                <p className="flex flex-row items-center  gap-1">
                  <Globe className="w-4.5" />
                  Bahasa Indonesia
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="space-y-9 order-2 md:order-1">
          <Card className="w-full rounded-[10px]">
            <CardHeader>
              <CardTitle className="text-[20px]">Deskripsi</CardTitle>
              <CardDescription className="text-justify">
                Foundations of User Experience (UX) Design adalah yang pertama
                dari rangkaian tujuh kursus yang akan membekali Anda dengan
                keterampilan yang dibutuhkan untuk melamar pekerjaan tingkat
                pemula dalam desain pengalaman pengguna. Desainer UX fokus pada
                interaksi yang dilakukan orang dengan produk seperti situs web,
                aplikasi seluler, dan objek fisik. Desainer UX membuat interaksi
                sehari-hari itu dapat digunakan, menyenangkan, dan dapat
                diakses. Peran seorang desainer UX tingkat pemula mungkin
                termasuk berempati dengan pengguna, menentukan poin rasa sakit
                mereka, memunculkan ide untuk solusi desain, membuat wireframe,
                prototipe, dan maket, dan menguji desain untuk mendapatkan umpan
                balik.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="w-full rounded-[10px]">
            <CardHeader>
              <CardTitle className="text-[20px]">
                Belajar bersama Tutor Profesional
              </CardTitle>
            </CardHeader>
            <div className="flex flex-col md:flex-row gap-4 mx-6">
              <CardContent className="p-5 space-y-4 rounded-[10px] border">
                <div className="flex flex-row items-center space-x-2">
                  <Avatar className="size-9 md:size-12 rounded-lg">
                    <AvatarImage src={IMG_PUBLIC.DEFAULT_PROFILE} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="gap-1">
                    <h3 className="font-medium">Gregorius Edrik Lawanto</h3>
                    <p className="text-sm text-muted-foreground">
                      Senior Talent Acquisition di WingsGroup
                    </p>
                  </div>
                </div>
                <p className="text-justify">
                  Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini
                  bekerja sebagai Senior Talent Acquisition Specialist di Wings
                  Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.
                </p>
              </CardContent>
              <CardContent className="p-5 space-y-4 rounded-[10px] border">
                <div className="flex flex-row items-center space-x-2">
                  <Avatar className="size-9 md:size-12 rounded-lg">
                    <AvatarImage src={IMG_PUBLIC.DEFAULT_PROFILE} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="gap-1">
                    <h3 className="font-medium">Gregorius Edrik Lawanto</h3>
                    <p className="text-sm text-muted-foreground">
                      Senior Talent Acquisition di WingsGroup
                    </p>
                  </div>
                </div>
                <p className="text-justify">
                  Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini
                  bekerja sebagai Senior Talent Acquisition Specialist di Wings
                  Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.
                </p>
              </CardContent>
            </div>
          </Card>
          <Card className="w-full rounded-[10px]">
            <CardHeader>
              <CardTitle className="text-[20px]">
                Kamu akan Mempelajari
              </CardTitle>
            </CardHeader>
            <CardContent className="mx-6 p-5 space-y-4 rounded-[10px] border">
              <h1>haiii</h1>
            </CardContent>
          </Card>
          <Card className="w-full rounded-[10px]">
            <CardHeader>
              <CardTitle className="text-[20px]">Rating dan Review</CardTitle>
            </CardHeader>
            <div className="flex flex-col md:flex-row gap-4 mx-6">
              <CardContent className="p-5 space-y-4 rounded-[10px] border">
                <div className="flex flex-row items-center space-x-2">
                  <Avatar className="size-9 md:size-12 rounded-lg">
                    <AvatarImage src={IMG_PUBLIC.DEFAULT_PROFILE} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="gap-1">
                    <h3 className="font-medium">Gregorius Edrik Lawanto</h3>
                    <p className="text-sm text-muted-foreground">
                      Senior Talent Acquisition di WingsGroup
                    </p>
                  </div>
                </div>
                <p className="text-justify">
                  Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini
                  bekerja sebagai Senior Talent Acquisition Specialist di Wings
                  Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.
                </p>
                <div className="flex items-center gap-1 mt-6">
                  <RatingStars rating={4.3} />
                  <span className=" text-sm text-muted-foreground">3.5</span>
                </div>
              </CardContent>
              <CardContent className="p-5 space-y-4 rounded-[10px] border">
                <div className="flex flex-row items-center space-x-2">
                  <Avatar className="size-9 md:size-12 rounded-lg">
                    <AvatarImage src={IMG_PUBLIC.DEFAULT_PROFILE} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="gap-1">
                    <h3 className="font-medium">Gregorius Edrik Lawanto</h3>
                    <p className="text-sm text-muted-foreground">
                      Senior Talent Acquisition di WingsGroup
                    </p>
                  </div>
                </div>
                <p className="text-justify">
                  Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini
                  bekerja sebagai Senior Talent Acquisition Specialist di Wings
                  Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.
                </p>
                <div className="flex items-center gap-1 mt-6">
                  <RatingStars rating={4.3} />
                  <span className=" text-sm text-muted-foreground">3.5</span>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
