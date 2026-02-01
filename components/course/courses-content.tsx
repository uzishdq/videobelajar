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
import { BookText, ChevronUp, Clock, Search, ShoppingBag } from "lucide-react";
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
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
import { Course } from "@/lib/data-dummy";
import { LABEL } from "@/lib/constant";
import { useRouter, useSearchParams } from "next/navigation";
import CourseSkeleton from "./course-skeleton";

type GroupKey = "bidangStudi" | "harga" | "durasi";

interface ICoursesContent {
  data: Course[] | null;
  meta?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export default function CoursesContent({
  data,
  meta,
}: Readonly<ICoursesContent>) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isLoading, setIsLoading] = React.useState(false);
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

  const [selectedCategories, setSelectedCategories] = React.useState<string[]>(
    searchParams.get("category")?.split(",") || [],
  );
  const [priceStart, setPriceStart] = React.useState(
    searchParams.get("priceStart") || "",
  );
  const [priceEnd, setPriceEnd] = React.useState(
    searchParams.get("priceEnd") || "",
  );
  const [selectedDuration, setSelectedDuration] = React.useState(
    searchParams.get("duration") || "",
  );
  const [sortBy, setSortBy] = React.useState(searchParams.get("sortBy") || "");

  const [searchQuery, setSearchQuery] = React.useState(
    searchParams.get("search") || "",
  );

  const updateURL = React.useCallback(
    (updates: Record<string, string | null>) => {
      setIsLoading(true); // Set loading true sebelum update

      const params = new URLSearchParams(searchParams);

      Object.entries(updates).forEach(([key, value]) => {
        if (value) {
          params.set(key, value);
        } else {
          params.delete(key);
        }
      });

      if (!updates.page) {
        params.set("page", "1");
      }

      router.push(`?${params.toString()}`, { scroll: false });
    },
    [searchParams, router],
  );

  const handleCategoryChange = (category: string, checked: boolean) => {
    let newCategories: string[];

    if (checked) {
      newCategories = [...selectedCategories, category];
    } else {
      newCategories = selectedCategories.filter((c) => c !== category);
    }

    setSelectedCategories(newCategories);
    updateURL({
      category: newCategories.length > 0 ? newCategories.join(",") : null,
    });
  };

  const handlePriceFilter = () => {
    updateURL({
      priceStart: priceStart || null,
      priceEnd: priceEnd || null,
    });
  };

  const handleDurationChange = (duration: string) => {
    setSelectedDuration(duration);
    updateURL({ duration: duration || null });
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
    updateURL({ sortBy: value });
  };

  const handleSearch = () => {
    updateURL({
      search: searchQuery.trim() || null,
    });
  };

  const handleReset = () => {
    setIsLoading(true);
    setSelectedCategories([]);
    setPriceStart("");
    setPriceEnd("");
    setSelectedDuration("");
    setSortBy("");
    setSearchQuery("");
    router.push("?page=1&limit=6");
  };

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `?${params.toString()}`;
  };

  React.useEffect(() => {
    setIsLoading(false);
  }, [data]);

  if (!data) {
    return (
      <div className="text-center p-10 text-gray-400 text-base font-medium border-2 border-dashed border-gray-200 rounded-lg bg-gray-50">
        {LABEL.ERROR.DATA_NOT_FOUND}
      </div>
    );
  }

  const currentPage = meta?.page || 1;
  const totalPages = meta?.totalPages || 1;

  return (
    <section className="flex flex-col items-start justify-between md:flex-row gap-10">
      <Card className="w-full h-fit md:max-w-sm">
        <CardHeader>
          <CardTitle className="text-[18px] text-muted-foreground">
            Filter
          </CardTitle>
          <CardAction>
            <Button variant="ghost" onClick={handleReset}>
              Reset
            </Button>
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
                <Button variant="link" size="icon" className="size-8">
                  <ChevronUp />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="flex flex-col gap-2">
              <div className="flex flex-col px-1 py-2 gap-3 text-muted-foreground">
                {[
                  "Pemasaran",
                  "Digital & Teknologi",
                  "Pengembangan Diri",
                  "Bisnis Manajemen",
                ].map((category) => (
                  <div key={category} className="flex items-center gap-3">
                    <Checkbox
                      id={category}
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={(checked) =>
                        handleCategoryChange(category, checked as boolean)
                      }
                    />
                    <Label
                      htmlFor={category}
                      className="text-base cursor-pointer"
                    >
                      {category}
                    </Label>
                  </div>
                ))}
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
                <Button variant="link" size="icon" className="size-8">
                  <ChevronUp />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="flex flex-col gap-2">
              <div className="flex flex-col px-1 py-2 gap-3">
                <Input
                  type="number"
                  placeholder="Harga Minimum"
                  value={priceStart}
                  onChange={(e) => setPriceStart(e.target.value)}
                />

                <Input
                  type="number"
                  placeholder="Harga Maximum"
                  value={priceEnd}
                  onChange={(e) => setPriceEnd(e.target.value)}
                />
                <Button onClick={handlePriceFilter} className="w-full">
                  Terapkan
                </Button>
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
                <Button variant="link" size="icon" className="size-8">
                  <ChevronUp />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="flex flex-col">
              <RadioGroup
                value={selectedDuration}
                onValueChange={handleDurationChange}
                className="mb-2 text-muted-foreground"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="short" id="short" />
                  <Label htmlFor="short" className="text-base cursor-pointer">
                    Kurang dari 4 Jam
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="medium" id="medium" />
                  <Label htmlFor="medium" className="text-base cursor-pointer">
                    4 - 8 Jam
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="long" id="long" />
                  <Label htmlFor="long" className="text-base cursor-pointer">
                    Lebih dari 8 Jam
                  </Label>
                </div>
              </RadioGroup>
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>

      <div className="w-full space-y-8">
        <div className="flex flex-row gap-4">
          <Select value={sortBy} onValueChange={handleSortChange}>
            <SelectTrigger className="w-45 bg-white">
              <SelectValue placeholder="Urutkan" />
            </SelectTrigger>
            <SelectContent position="popper">
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

          <div className="flex w-full items-center gap-2">
            <Input
              type="text"
              placeholder="Cari Kelas"
              className="bg-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />

            <Button onClick={handleSearch} className="shrink-0">
              <Search className="size-4" />
            </Button>
          </div>
        </div>
        {data.length === 0 ? (
          <div className="text-center p-10 text-gray-400 text-base font-medium border-2 border-dashed border-gray-200 rounded-lg bg-gray-50">
            Tidak ada kelas yang ditemukan
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 w-full gap-5">
              {isLoading
                ? Array.from({ length: data.length }).map((_, i) => (
                    <CourseSkeleton
                      key={`sekeleton-${i}-${crypto.randomUUID()}`}
                    />
                  ))
                : data.map((item) => <CourseCard key={item.id} data={item} />)}
            </div>

            {/* Pagination */}
            {totalPages >= 1 && (
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href={
                        currentPage > 1 ? createPageURL(currentPage - 1) : "#"
                      }
                      aria-disabled={currentPage === 1}
                      className={
                        currentPage === 1
                          ? "pointer-events-none opacity-50"
                          : ""
                      }
                    />
                  </PaginationItem>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (pageNum) => {
                      const showPage =
                        pageNum === 1 ||
                        pageNum === totalPages ||
                        (pageNum >= currentPage - 1 &&
                          pageNum <= currentPage + 1);

                      if (!showPage) {
                        if (
                          pageNum === currentPage - 2 ||
                          pageNum === currentPage + 2
                        ) {
                          return (
                            <PaginationItem key={pageNum}>
                              <PaginationEllipsis />
                            </PaginationItem>
                          );
                        }
                        return null;
                      }

                      return (
                        <PaginationItem key={pageNum}>
                          <PaginationLink
                            href={createPageURL(pageNum)}
                            isActive={currentPage === pageNum}
                          >
                            {pageNum}
                          </PaginationLink>
                        </PaginationItem>
                      );
                    },
                  )}

                  <PaginationItem>
                    <PaginationNext
                      href={
                        currentPage < totalPages
                          ? createPageURL(currentPage + 1)
                          : "#"
                      }
                      aria-disabled={currentPage === totalPages}
                      className={
                        currentPage === totalPages
                          ? "pointer-events-none opacity-50"
                          : ""
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
          </>
        )}
      </div>
    </section>
  );
}
