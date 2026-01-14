"use client";

import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { BookText, ChevronUp, Clock, ShoppingBag } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import CourseCard from "./course-card";
import { dataCourses } from "@/lib/data-dummy";

type GroupKey = "bidangStudi" | "harga" | "durasi";

export default function CoursesContent() {
  const [isOpen, setIsOpen] = React.useState<Record<GroupKey, boolean>>({
    bidangStudi: true,
    harga: true,
    durasi: true,
  });

  const handleOpenChange = (key: GroupKey) => (open: boolean) => {
    setIsOpen((prev) => ({
      ...prev,
      [key]: open,
    }));
  };

  return (
    <section className="flex flex-col md:flex-row gap-10">
      <Card className="w-full h-fit md:max-w-sm">
        <CardHeader>
          <CardTitle className="text-[18px] text-muted-foreground">
            Filter
          </CardTitle>
          <CardAction>
            <Button variant="ghost">Reset</Button>
          </CardAction>
        </CardHeader>
        <CardContent className="space-y-4">
          <Collapsible
            open={isOpen["bidangStudi"]}
            onOpenChange={handleOpenChange("bidangStudi")}
            className="flex flex-col w-full px-1 py-1 text-primary border rounded-md"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="inline-flex items-center justify-center">
                <BookText />
                <h4 className="ml-2 font-medium">Bidang Studi</h4>
              </div>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="icon" className="size-8">
                  <ChevronUp />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="flex flex-col gap-2">
              <div className="flex flex-col px-1 py-2 gap-3 text-muted-foreground">
                <div className="flex items-center gap-3">
                  <Checkbox id="pemasaran" className="size-4.5" />
                  <Label htmlFor="pemasaran" className="text-base">
                    Pemasaran
                  </Label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="digital-teknologi" />
                  <Label htmlFor="digital-teknologi" className="text-base">
                    Digital & Teknologi
                  </Label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="pengembangan-diri" />
                  <Label htmlFor="pengembangan-diri" className="text-base">
                    Pengembangan Diri
                  </Label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="bisnis-manajemen" />
                  <Label htmlFor="bisnis-manajemen" className="text-base">
                    Bisnis Manajemen
                  </Label>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible
            open={isOpen["harga"]}
            onOpenChange={handleOpenChange("harga")}
            className="flex w-full flex-col px-1 py-1 text-primary border rounded-md"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="inline-flex items-center justify-center">
                <ShoppingBag />
                <h4 className="ml-2 font-medium">Harga</h4>
              </div>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="icon" className="size-8">
                  <ChevronUp />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="flex flex-col gap-2">
              <div className="flex flex-col px-1 py-2 gap-3 text-muted-foreground">
                <div className="flex items-center gap-3">
                  <Checkbox id="pemasaran" />
                  <Label htmlFor="pemasaran">Pemasaran</Label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="digital-teknologi" />
                  <Label htmlFor="digital-teknologi">Digital & Teknologi</Label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="pengembangan-diri" />
                  <Label htmlFor="pengembangan-diri">Pengembangan Diri</Label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="bisnis-manajemen" />
                  <Label htmlFor="bisnis-manajemen">Bisnis Manajemen</Label>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible
            open={isOpen["durasi"]}
            onOpenChange={handleOpenChange("durasi")}
            className="flex w-full flex-col px-1 py-1 gap-2 text-primary border rounded-md"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="inline-flex items-center justify-center">
                <Clock />
                <h4 className="ml-2 font-medium">Durasi</h4>
              </div>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="icon" className="size-8">
                  <ChevronUp />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="flex flex-col">
              <RadioGroup
                defaultValue="comfortable"
                className="mb-2 text-muted-foreground"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="default" id="r1" />
                  <Label htmlFor="r1" className="text-base">
                    Default
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="comfortable" id="r2" />
                  <Label htmlFor="r2" className="text-base">
                    Comfortable
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="compact" id="r3" />
                  <Label htmlFor="r3" className="text-base">
                    Compact
                  </Label>
                </div>
              </RadioGroup>
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>

      <div className="space-y-8">
        <div className="flex flex-row gap-4">
          <Select>
            <SelectTrigger className="w-45 bg-white">
              <SelectValue placeholder="Urutkan" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Urutan Berdasarkan</SelectLabel>
                <SelectItem value="HTR">Harga Terendah</SelectItem>
                <SelectItem value="HTT">Harga Tertinggi</SelectItem>
                <SelectItem value="AZ">A to Z</SelectItem>
                <SelectItem value="ZA">Z to A</SelectItem>
                <SelectItem value="RTR">Rating Tertinggi</SelectItem>
                <SelectItem value="RTT">Rating Terendah</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Input type="text" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 w-full gap-5">
          {dataCourses.map((data) => (
            <CourseCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
}
