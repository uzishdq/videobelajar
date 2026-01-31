"use client";

import OrderCard from "@/components/order/order-card";
import { OrderSekeleton } from "@/components/order/order-sekeleton";
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { myOrderDummy, tabsMyOrder } from "@/lib/data-dummy";
import React from "react";

export default function PesananPage() {
  const [activeTab, setActiveTab] = React.useState("all");
  const [loading, setLoading] = React.useState(false);

  const filteredCourses =
    activeTab === "all"
      ? myOrderDummy
      : myOrderDummy.filter((myOrder) => myOrder.status === activeTab);

  const handleTabClick = (tabValue: string) => {
    setActiveTab(tabValue);
    setLoading(true);

    setTimeout(() => setLoading(false), 300);
  };

  return (
    <section className="w-full">
      <Card>
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 px-6">
          <div className="flex gap-3 overflow-x-auto whitespace-nowrap">
            {tabsMyOrder.map((tab) => (
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
          <div className="flex flex-row gap-4">
            <Select>
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
            <Input
              type="text"
              placeholder="Cari Kelas"
              className="w-full md:w-md"
            />
          </div>
        </div>

        <CardContent className="space-y-4">
          {loading
            ? Array.from({ length: filteredCourses.length }).map((_, i) => (
                <OrderSekeleton key={`sekeleton-${activeTab}-${i}`} />
              ))
            : filteredCourses.map((item) => (
                <OrderCard key={item.id} data={item} />
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
