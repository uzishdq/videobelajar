import React from "react";

export default function CourseSkeleton() {
  return (
    <div className="flex flex-col bg-white rounded-xl shadow animate-pulse h-full">
      <div className="w-full h-48 bg-gray-200 rounded-t-xl md:block hidden"></div>
      <div className="flex flex-row md:flex-col gap-4 px-4 py-3 md:px-3 md:py-2 flex-1">
        <div className="w-24 h-24 bg-gray-200 rounded-lg md:hidden shrink-0"></div>
        <div className="flex flex-col justify-between flex-1 gap-2">
          <div className="flex flex-col gap-2">
            <div className="h-5 bg-gray-200 rounded w-3/4"></div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-200"></div>
              <div className="flex flex-col gap-1">
                <div className="h-3 bg-gray-200 rounded w-20"></div>
                <div className="h-2 bg-gray-200 rounded w-16"></div>
              </div>
            </div>
            <div className="hidden md:block h-3 bg-gray-200 rounded w-full mt-2"></div>
          </div>

          <div className="flex justify-between items-center mt-3">
            <div className="h-4 w-20 bg-gray-200 rounded"></div>
            <div className="h-5 w-16 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
