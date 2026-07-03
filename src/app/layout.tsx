import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Living Word A.G Church | ஜீவ வார்த்தை ஏ.ஜி சபை",
  description: "Living Word A.G Church - Besant Nagar, Chennai. A Christ-centered ministry rooted in the living and unchanging Word of God.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body bg-[#0a0a1a] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
