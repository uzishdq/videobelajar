import HeroCard from "@/components/card/hero-card";
import React from "react";

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen flex-col items-center px-7 py-5 md:px-6 md:py-16 space-y-6 md:space-y-16">
      <HeroCard />
      <HeroCard />
      <HeroCard />
    </main>
  );
}
