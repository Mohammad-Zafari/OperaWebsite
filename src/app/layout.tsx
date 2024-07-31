// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ReduxWrapper from "./providers/ReduxProvider";
import { GoogleOAuthProvider } from '@react-oauth/google';
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
      <body className={inter.className}>
        <ToastContainer />
        <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
          <ReduxWrapper>
            {children}
          </ReduxWrapper>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
