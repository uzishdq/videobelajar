import React from "react";

export default function MyCourseSekeleton() {
  return (
    <div className="w-full border rounded-md animate-pulse">
      <div className="flex items-center justify-between p-3 bg-secondary/50 border-b">
        <div className="h-4 w-40 rounded bg-muted" />
        <div className="h-6 w-20 rounded-full bg-muted" />
      </div>
      <div className="flex flex-col md:flex-row p-3 gap-3">
        <div className="w-full md:w-60 h-40 rounded-lg bg-muted shrink-0" />
        <div className="flex flex-col gap-3 w-full">
          <div className="h-5 w-3/4 rounded bg-muted" />
          <div className="h-4 w-full rounded bg-muted hidden md:block" />
          <div className="flex items-center gap-2">
            <div className="size-9 md:size-12 rounded-lg bg-muted" />
            <div className="flex flex-col gap-1">
              <div className="h-4 w-32 rounded bg-muted" />
              <div className="h-3 w-40 rounded bg-muted" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-4 w-20 rounded bg-muted" />
            <div className="h-4 w-24 rounded bg-muted" />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-3 p-3 bg-secondary/50 border-t">
        <div className="flex items-center gap-2 w-full">
          <div className="h-4 w-28 rounded bg-muted" />
          <div className="h-2 w-full rounded-full bg-muted" />
        </div>
        <div className="h-9 w-full md:w-40 rounded-md bg-muted" />
      </div>
    </div>
  );
}
