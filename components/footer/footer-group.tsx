"use client";

import { ChevronDown, ChevronRight } from "lucide-react";
import React from "react";

export default function FooterGroup({
  title,
  isOpen,
  onToggle,
  children,
}: Readonly<{
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full md:w-auto">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between mb-2 font-bold text-gray-800 text-base cursor-pointer md:cursor-auto"
      >
        {title}
        <span className="md:hidden">
          {isOpen ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </span>
      </button>

      <ul
        className={`space-y-2.5 mb-4 text-sm transition-all duration-200
          ${isOpen ? "block" : "hidden"} md:block`}
      >
        {children}
      </ul>
    </div>
  );
}
