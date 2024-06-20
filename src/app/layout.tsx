import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Creativity's Funeral",
  description: "AI web app using Gemini to list ideas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-dot-black/[0.1] dark:bg-dot-white/[0.1] dark:bg-black">{children}</body>
    </html>
  );
}
