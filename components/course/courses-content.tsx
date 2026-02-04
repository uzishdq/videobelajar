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
import CourseSkeleton from "./course-skeleton";
import { useCourseStore } from "@/stores/course.store";

type GroupKey = "bidangStudi" | "harga" | "durasi";

export default function CoursesContent() {
  const {
    data,
    isLoading,
    error,
    fetchCourses,
    totalPages,
    page,
    setPage,
    filters,
    setFilters,
    resetFilters,
  } = useCourseStore();

  React.useEffect(() => {
    fetchCourses();
  }, [fetchCourses, page]);

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

  const [priceStart, setPriceStart] = React.useState("");
  const [priceEnd, setPriceEnd] = React.useState("");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>(
    [],
  );

  const handleCategoryChange = (category: string, checked: boolean) => {
    const newCategories = checked
      ? [...selectedCategories, category]
      : selectedCategories.filter((c) => c !== category);

    setSelectedCategories(newCategories);
    setFilters({ category: newCategories.join(",") });
  };

  const handlePriceFilter = () => {
    setFilters({
      priceStart: priceStart ? Number(priceStart) : undefined,
      priceEnd: priceEnd ? Number(priceEnd) : undefined,
    });
  };

  if (error) {
    return (
      <div
        className="text-center p-10 text-red-600 text-base font-medium border-2 border-dashed border-red-200 rounded-lg bg-red-50"
        role="alert"
      >
        <p className="font-semibold mb-2">{error}</p>
        <Button onClick={fetchCourses} variant="destructive" className="mt-4">
          Coba Lagi
        </Button>
      </div>
    );
  }

  return (
    <section className="flex flex-col items-start justify-between md:flex-row gap-10">
      <Card className="w-full h-fit md:max-w-sm">
        <CardHeader>
          <CardTitle className="text-[18px] text-muted-foreground">
            Filter
          </CardTitle>
          <CardAction>
            <Button variant="ghost" onClick={resetFilters}>
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
                value={filters.duration}
                onValueChange={(value) => setFilters({ duration: value })}
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
          <Select
            value={filters.sortBy}
            onValueChange={(value) => setFilters({ sortBy: value })}
          >
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
                  setFilters({ search: searchQuery });
                }
              }}
            />

            <Button
              onClick={() => setFilters({ search: searchQuery })}
              className="shrink-0"
            >
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
            {totalPages > 1 && (
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => page > 1 && setPage(page - 1)}
                      aria-disabled={page === 1}
                      className={
                        page === 1
                          ? "pointer-events-none opacity-50 cursor-not-allowed"
                          : "cursor-pointer"
                      }
                    />
                  </PaginationItem>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (pageNum) => {
                      const showPage =
                        pageNum === 1 ||
                        pageNum === totalPages ||
                        (pageNum >= page - 1 && pageNum <= page + 1);

                      if (!showPage) {
                        if (pageNum === page - 2 || pageNum === page + 2) {
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
                            onClick={() => setPage(pageNum)}
                            isActive={page === pageNum}
                            className="cursor-pointer"
                          >
                            {pageNum}
                          </PaginationLink>
                        </PaginationItem>
                      );
                    },
                  )}

                  <PaginationItem>
                    <PaginationNext
                      onClick={() => page < totalPages && setPage(page + 1)}
                      aria-disabled={page === totalPages}
                      className={
                        page === totalPages
                          ? "pointer-events-none opacity-50 cursor-not-allowed"
                          : "cursor-pointer"
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
