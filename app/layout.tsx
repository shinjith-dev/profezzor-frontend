import type { Metadata } from "next";
import "./globals.css";
import { manrope } from "@/utils/fonts";
import Navbar from "@/components/common/Navbar";
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
    <html lang="en" data-mode="light">
      <body className={`h-screen w-screen max-h-screen max-w-screen bg-bg text-fg ${manrope.className}`}>
        <Initial />
        {/* <Navbar />{children} */}
      </body>
    </html>
  );
}
