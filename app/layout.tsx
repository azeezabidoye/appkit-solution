import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";

const inter = Inter({ subsets: ["latin"] });

import { headers } from "next/headers";
import ContextProvider from "@/context";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Appkit solution",
  description: "Powered by Reown",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const cookies = headers().get("cookie");

  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider cookies={cookies}>{children}</ContextProvider>
      </body>
    </html>
  );
}
