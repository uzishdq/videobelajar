import Image from "next/image";
import React from "react";

export default function HeroSection({
  img,
  children,
}: Readonly<{ img: string; children: React.ReactNode }>) {
  return (
    <section className="relative flex items-center justify-center bg-black w-full min-w-[320px] max-w-300 h-100 rounded-[10px]">
      <Image
        src={img}
        alt="hero backgound"
        className="object-cover rounded-[10px]"
        fill
        priority
      />

      <div className="absolute inset-0 rounded-[10px] bg-black/80" />

      {children}
    </section>
  );
}
