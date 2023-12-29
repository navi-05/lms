import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ConfettiProvider } from "@/components/confetti-provider";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LMS Platform",
  description: "LMS Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={rubik.className}>
          <ConfettiProvider />
          <Toaster richColors />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
