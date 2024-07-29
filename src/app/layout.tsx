// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ReduxWrapper from "./providers/ReduxProvider"; // Import the ReduxWrapper
import "react-toastify/dist/ReactToastify.css";

import "./globals.css";
import { ToastContainer } from "react-toastify";


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
      <link href="https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v30.1.0/dist/font-face.css" rel="stylesheet" type="text/css" />

      </head>
      <body className={inter.className} style={{fontFamily:"Vazir , sans-serif"}}>
        <ToastContainer/>
        <ReduxWrapper>
       {children}
        </ReduxWrapper>
        
      </body>
    </html>
  );
}
