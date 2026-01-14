"use client";

import { FOOTER_GROUPS, FOOTER_SOCIAL, IMG_PUBLIC } from "@/lib/constant";
import Image from "next/image";
import React from "react";
import FooterGroup from "./footer-group";
import Link from "next/link";

type GroupKey = "kategori" | "perusahaan" | "komunitas";

export default function FooterSection() {
  const [open, setOpen] = React.useState<Record<GroupKey, boolean>>({
    kategori: false,
    perusahaan: false,
    komunitas: false,
  });

  const toggle = (key: GroupKey) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  return (
    <footer className="bg-white w-full px-5 md:px-30 py-5 md:py-15 space-y-4 md:space-y-5 shadow">
      <div className="flex flex-col md:flex-row items-start justify-between gap-4">
        <div className="space-y-4">
          <Image
            src={IMG_PUBLIC.LOGO}
            alt="logo-videobelajar"
            width={193}
            height={30}
          />

          <div className="space-y-2 md:space-y-3">
            <h3 className="text-base md:text-lg font-semibold">
              Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
            </h3>
            <p className="text-sm md:text-base">
              Jl. Usman Effendi No. 50 Lowokwaru, Malang
            </p>
            <p className="text-sm md:text-base">+62-877-7123-1234</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-0 md:gap-20 w-full md:w-auto">
          {FOOTER_GROUPS.map((group) => (
            <FooterGroup
              key={group.key}
              title={group.title}
              isOpen={open[group.key]}
              onToggle={() => toggle(group.key)}
            >
              {group.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm md:text-base text-muted-foreground hover:text-black"
                    target="_blank"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </FooterGroup>
          ))}
        </div>
      </div>

      <div className="w-full border-t-2" />

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <p className="order-2 md:order-1">
          @2025 Gerobak Sayur All Rights Reserved.
        </p>
        <div className="flex gap-3 order-1 md:order-2">
          {FOOTER_SOCIAL.map((item) => (
            <Link
              key={item.label}
              href={item.link}
              className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center"
              target="_blank"
            >
              <Image src={item.svg} alt={item.label} width={16} height={16} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
