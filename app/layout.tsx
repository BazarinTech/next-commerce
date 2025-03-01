import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import Topbar from "@/components/Topbar";
import Bottombar from "@/components/Bottombar";
import Topbar2 from "@/components/Topbar2";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home",
  description: "Discover the future of e-commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased grid place-items-center font-[family-name:var(--font-geist-sans)]`}
      >
        <div className="max-w-6xl w-full">
          <Topbar />
          <Topbar2 />
          <div className="min-h-screen">
            {children}
          </div>
          <Bottombar />
        </div>
      </body>
    </html>
  );
}
