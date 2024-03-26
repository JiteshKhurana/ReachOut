import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import Nav from "@/app/components/custom/Nav";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { cn } from "@/lib/utils";

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
    <html lang="en" className="dark">
      <UserProvider>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <Nav />
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
