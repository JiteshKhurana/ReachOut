import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import Navbar from "./components/custom/Nav";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "ReachOut",
  description: "Ride Together, Innovate Together - That's ReachOut.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className="bg-background dark">
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
