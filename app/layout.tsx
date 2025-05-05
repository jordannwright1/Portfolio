import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import StarsCanvas from "@/components/main/StarBackground";
import NavBar from "@/components/main/NavBar";


const inter = Inter({subsets: ['latin']})


export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio site for JW",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
