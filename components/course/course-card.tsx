import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { IMG_PUBLIC } from "@/lib/constant";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Course } from "@/lib/data-dummy";
import { formatToIDR } from "@/lib/helper";
import { RatingStars } from "./rating-course";

export default function CourseCard({ data }: Readonly<{ data: Course }>) {
  return (
    <Card className="w-full">
      <div className="flex flex-row md:flex-col gap-3 md:gap-4">
        <div className="px-4 md:px-5">
          <div className="relative h-24 w-24 md:h-48.25 md:w-full shrink-0 rounded-lg overflow-hidden">
            <Image
              src={data.img}
              alt={data.id}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="flex flex-col flex-1 md:gap-3">
          <CardHeader>
            <CardTitle className="text-[18px]">{data.title}</CardTitle>
            <CardDescription className="text-base hidden md:block">
              {data.desc}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-row items-center space-x-2">
            <Avatar className="size-9 md:size-12 rounded-lg">
              <AvatarImage src={IMG_PUBLIC.DEFAULT_PROFILE} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="gap-1">
              <h3 className="font-medium">{data.instructor}</h3>
              <p className="text-sm text-muted-foreground">{data.job}</p>
            </div>
          </CardContent>
        </div>
      </div>
      <CardFooter className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-1">
          <RatingStars rating={data.rating} />
          <span className=" text-sm text-muted-foreground">
            {data.rating} <span>({data.reviews})</span>
          </span>
        </div>
        <p className="text-primary font-bold text-xl md:text-2xl">
          {formatToIDR(data.price)}
        </p>
      </CardFooter>
    </Card>
  );
}
