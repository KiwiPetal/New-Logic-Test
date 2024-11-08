import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./components/sidebar";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-bg flex flex-row desktop:gap p">
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
