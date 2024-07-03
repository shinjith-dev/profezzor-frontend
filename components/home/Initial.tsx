"use client"
import { kaushanScript } from "@/utils/fonts";
import { useEffect, useRef } from "react";

export default function Initial() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setTimeout(() => {
      if (ref.current) {
        ref.current.classList.remove("initial-entry")
        ref.current.classList.add("initial-exit")
      }
    }, 1000)
  }, [])

  return <div className="w-full h-full flex items-center initial-entry justify-center"><h1 ref={ref} className={`${kaushanScript.className} text-9xl`}>Profezzor</h1></div>
}
