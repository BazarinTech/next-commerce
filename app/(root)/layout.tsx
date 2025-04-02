
import "@/styles/globals.css";
import Topbar from "@/components/Topbar";
import Bottombar from "@/components/Bottombar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modern Ecommerce Workflow",
  description: "A modern ecommerce workflow, that allows users to create, manage and sell products online. using cloud -based infrastructure and scalable architecture."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-6xl w-full">
      <Topbar />
      <div className="min-h-screen">
        {children}
      </div>
      <Bottombar />
    </div>
);
}
