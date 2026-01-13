import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import Image from "next/image";
import { IMG_PUBLIC } from "@/lib/constant";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";

export default function CourseCard() {
  return (
    <Card className="w-full">
      <div className="flex flex-row md:flex-col gap-3 md:gap-4">
        <div className="px-4 md:px-5">
          <div className="relative h-24 w-24 md:h-48.25 md:w-full shrink-0 rounded-xl overflow-hidden">
            <Image
              src={IMG_PUBLIC.BG_HERO}
              alt="Hero"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="flex flex-col flex-1 md:gap-3">
          <CardHeader>
            <CardTitle className="text-[18px]">
              Big 4 Auditor Financial Analyst
            </CardTitle>
            <CardDescription className="text-base hidden md:block">
              Mulai transformasi dengan instruktur profesional, harga yang
              terjangkau, dan kurikulum terbaik
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-row items-center space-x-2">
            <Avatar className="size-9 md:size-12 rounded-lg">
              <AvatarImage src={IMG_PUBLIC.DEFAULT_PROFILE} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="gap-1">
              <h3 className="font-medium">Jenna Ortega</h3>
              <p className="text-sm text-muted-foreground">senior accountant</p>
            </div>
          </CardContent>
        </div>
      </div>
      <CardFooter className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-1">
          <span className="text-amber-300">★★★★☆</span>
          <span className=" text-sm text-muted-foreground">
            3.5 <span>(86)</span>
          </span>
        </div>
        <p className="text-primary font-bold text-xl md:text-2xl">RP 300K</p>
      </CardFooter>
    </Card>
  );
}
