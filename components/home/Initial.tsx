"use client";
import { kaushanScript } from "@/utils/fonts";
import { useEffect, useRef } from "react";

export default function Initial() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (ref.current) {
        ref.current.classList.remove("initial-entry");
        ref.current.classList.add("initial-exit");
      }

      setTimeout(() => {
        if (ref.current?.parentElement) {
          ref.current.parentElement.classList.add("hidden");
        }
      }, 500);
    }, 500);
  }, []);

  return (
    <div className="initial-parent absolute left-0 top-0 z-[1000] flex h-full w-full items-center justify-center bg-bg transition-all duration-300">
      <h1
        ref={ref}
        className={`${kaushanScript.className} initial-entry text-9xl transition-all duration-300`}
      >
        Profezzor
      </h1>
    </div>
  );
}
