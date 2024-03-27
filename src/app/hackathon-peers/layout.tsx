import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hackathon Peers",
  description: "Ride Together, Innovate Together - That's ReachOut.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
