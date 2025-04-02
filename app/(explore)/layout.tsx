import "@/styles/globals.css";
import Topbar2 from "@/components/Topbar2";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-6xl w-full">
      <Topbar2 />
      <div className="min-h-screen">
        {children}
      </div>
    </div>
  );
}
