import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import QueryProvider from "@/components/QueryProvider";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "blogpizza 🍕",
  description: "enjoy each delight! a slice a day!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryProvider>
      <html lang="en">
        <body
          className={cn("min-h-screen antialiased grainy", inter.className)}
        >
          <Header />
          {children}
        </body>
      </html>
    </QueryProvider>
  );
}
