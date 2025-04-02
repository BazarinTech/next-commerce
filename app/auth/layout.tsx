import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="max-w-6xl w-full">
        <div className="min-h-screen">
          {children}
        </div>
      </div>
  );
}
