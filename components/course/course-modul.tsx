"use client";

import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { Button } from "../ui/button";
import { ChevronDown, ChevronUp, Clock } from "lucide-react";

type ModulKey = "modul1" | "modul2" | "modul3" | "modul4";

export default function CourseModul() {
  const [isOpen, setIsOpen] = React.useState<Record<ModulKey, boolean>>({
    modul1: false,
    modul2: false,
    modul3: false,
    modul4: false,
  });

  const handleOpenChange = (key: ModulKey) => (open: boolean) => {
    setIsOpen((prev) => ({
      ...prev,
      [key]: open,
    }));
  };
  return (
    <div>
      <Collapsible
        open={isOpen["modul1"]}
        onOpenChange={handleOpenChange("modul1")}
        className="flex w-full flex-col px-1 py-1 gap-2 rounded-md"
      >
        <div className="flex items-center justify-between gap-4 px-4">
          <h4 className="text-primary text-[18px] font-medium">
            Introduction to Course 1: Foundations of User Experience Design
          </h4>
          <CollapsibleTrigger asChild>
            <Button
              variant="link"
              size="icon"
              className="size-8 text-muted-foreground"
            >
              {isOpen["modul1"] ? <ChevronDown /> : <ChevronUp />}
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="flex flex-col text-base font-medium gap-2 ">
          <div className="flex flex-row items-center justify-between rounded-md border px-5 py-5">
            <p>Jobs in the field of user experience</p>
            <div className="hidden md:flex flex-row items-center justify-between font-normal text-muted-foreground space-x-4">
              <span className="flex gap-1">
                <Clock />
                Video
              </span>
              <span className="flex gap-1">
                <Clock />
                12 Menit
              </span>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between rounded-md border px-5 py-5">
            <p>The basics of user experience design</p>
            <div className="hidden md:flex flex-row items-center justify-between font-normal text-muted-foreground space-x-4">
              <span className="flex gap-1">
                <Clock />
                Video
              </span>
              <span className="flex gap-1">
                <Clock />
                12 Menit
              </span>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between rounded-md border px-5 py-5">
            <p>The product development life cycle</p>
            <div className="hidden md:flex flex-row items-center justify-between font-normal text-muted-foreground space-x-4">
              <span className="flex gap-1">
                <Clock />
                Video
              </span>
              <span className="flex gap-1">
                <Clock />
                12 Menit
              </span>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
