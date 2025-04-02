
import "@/styles/globals.css";
import Topbar from "@/components/Topbar";
import Bottombar from "@/components/Bottombar";

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
