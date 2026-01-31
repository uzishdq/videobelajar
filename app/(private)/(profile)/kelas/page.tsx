"use client";

import MyCourseCard from "@/components/course/my-course/my-course-card";
import MyCourseSekeleton from "@/components/course/my-course/my-course-sekeleton";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { myClassDummy, tabsMyClass } from "@/lib/data-dummy";
import React from "react";

export default function KelasPage() {
  const [activeTab, setActiveTab] = React.useState("all");
  const [loading, setLoading] = React.useState(false);

  const filteredCourses =
    activeTab === "all"
      ? myClassDummy
      : myClassDummy.filter(
          (myClass) => myClass.classDetail.status === activeTab,
        );

  const handleTabClick = (tabValue: string) => {
    setActiveTab(tabValue);
    setLoading(true);

    setTimeout(() => setLoading(false), 300);
  };
  return (
    <section className="w-full">
      <Card>
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 px-6">
          <div className="flex gap-11 overflow-x-auto whitespace-nowrap">
            {tabsMyClass.map((tab) => (
              <button
                key={tab.value}
                onClick={() => handleTabClick(tab.value)}
                className={`relative text-base font-semibold py-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.value
                    ? "text-orange-500"
                    : "text-gray-400 hover:text-orange-500"
                }`}
              >
                {tab.label}
                {activeTab === tab.value && (
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 rounded"></span>
                )}
              </button>
            ))}
          </div>
          <Input
            type="text"
            placeholder="Cari Kelas"
            className="w-full md:w-md"
          />
        </div>

        <CardContent className="space-y-4">
          {loading
            ? Array.from({ length: filteredCourses.length }).map((_, i) => (
                <MyCourseSekeleton key={`sekeleton-${activeTab}-${i}`} />
              ))
            : filteredCourses.map((item) => (
                <MyCourseCard key={item.id} data={item} />
              ))}
        </CardContent>
        <CardFooter>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </CardFooter>
      </Card>
    </section>
  );
}
