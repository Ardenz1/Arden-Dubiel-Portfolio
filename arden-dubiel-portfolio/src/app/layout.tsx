import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arden Dubiel",
  description: "Portfolio of Arden Dubiel, including web design, UI/UX projects, and digital creative work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
