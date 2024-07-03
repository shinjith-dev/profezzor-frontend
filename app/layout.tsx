import type { Metadata } from "next";
import "./globals.css";

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
      <body className="h-screen w-screen max-h-screen max-w-screen">{children}</body>
    </html>
  );
}
