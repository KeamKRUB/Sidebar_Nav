import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sidebar",
  description: "Sidebar by KeamKung",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="layout">
      <Sidebar />
      {children}
      </div>

      </body>
    </html>
  );
}
