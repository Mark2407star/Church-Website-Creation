import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

export const metadata: Metadata = {
  title: "Living Word A.G Church | A Place of Grace & Worship",
  description: "Living Word A.G Church — A vibrant community of believers committed to spreading the Gospel of Jesus Christ through worship, fellowship, and prayer.",
  keywords: ["Church", "A.G Church", "Living Word", "Tamil Church", "Christian", "Worship", "Jesus"],
  openGraph: {
    title: "Living Word A.G Church",
    description: "A place of worship, fellowship, and spiritual growth.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <AnimatedBackground />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
