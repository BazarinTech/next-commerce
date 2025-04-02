import "@/styles/globals.css";


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
