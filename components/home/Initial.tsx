"use client";
import { kaushanScript } from "@/utils/fonts";
import { useEffect, useRef } from "react";

export default function Initial() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (ref.current) {
        ref.current.classList.remove("initial-entry");
        ref.current.classList.remove("text-5xl");
        ref.current.classList.remove("sm:text-7xl");
        ref.current.classList.remove("md:text-9xl");
        ref.current.classList.add("initial-exit");
        ref.current.classList.add("text-xl");
        ref.current.classList.add("sm:text-2xl");
        ref.current.classList.add("md:text-3xl");
      }

      setTimeout(() => {
        if (ref.current?.parentElement) {
          ref.current.parentElement.classList.add("hidden");
        }
      }, 500);
    }, 500);
  }, []);

  return (
    <div className="initial-parent absolute left-0 top-0 z-[1000] flex h-full w-full items-center justify-center bg-background transition-all duration-300">
      <h1
        ref={ref}
        className={`${kaushanScript.className} initial-entry text-5xl sm:text-7xl md:text-9xl transition-all duration-300`}
      >
        Profezzor
      </h1>
    </div>
  );
}
