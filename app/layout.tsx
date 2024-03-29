import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { SwrProvider } from "@/contexts/SWRContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  manifest: "/manifest.json",
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
      <body className={inter.className}>
        <SwrProvider>{children}</SwrProvider>
      </body>
    </html>
  );
}
