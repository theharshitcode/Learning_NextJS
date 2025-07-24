// import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const inter = Inter({subsets: ["latin"]});


export const metadata = {
  title: "SRMU",
  description: "Welcome to SRMU Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-gray-100 text-gray-900 antialiased ${inter.className}`}
      >
        <Navbar />
        <div className="container mx-auto min-h-[80vh]">
          {children}
          </div>
        <Footer/>
      </body>
    </html>
  );
}
