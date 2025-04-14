import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import ClientRoot from "./ClientRoot";

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased grid place-items-center box-border overflow-x-hidden font-[family-name:var(--font-geist-sans)]`}
      >
        <ClientRoot>
          {children}
        </ClientRoot>
      </body>
    </html>
  );
}
