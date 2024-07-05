import type { Metadata } from "next";
import "./globals.css";
import { manrope } from "@/utils/fonts";
import Navbar from "@/components/common/navbar";
import Initial from "@/components/home/Initial";

export const metadata: Metadata = {
  title: "Profezzor",
  description: "All in one learning solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`max-w-screen h-screen max-h-screen w-screen bg-bg text-fg ${manrope.className}`}
      >
        <Initial />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
