// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ReduxWrapper from "./providers/ReduxProvider"; // Import the ReduxWrapper
import "react-toastify/dist/ReactToastify.css";

import "./globals.css";
import { ToastContainer } from "react-toastify";
import Navbar from "@/components/Navbar/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OperaQc",
  description: "Rahpoo opera24 sass website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com"  />
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600;700&family=Vazirmatn:wght@100..900&display=swap"
            rel="stylesheet"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
      <body className={`${inter.className} font-vazir`}>
        <ToastContainer/>
        <ReduxWrapper>
       {children}
        </ReduxWrapper>
        
      </body>
    </html>
  );
}
