import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arden Dubiel Portfolio",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-darkpurple">
        <Header/>
        {children}</body>
    </html>
  );
}
