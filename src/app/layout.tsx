import type { Metadata } from "next";
import { Inter, Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import FluidBackground from "@/components/ui/FluidBackground";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import { getItem } from "@/lib/markdown";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sharon Fellowship Church",
  description: "A place of worship, fellowship, and spiritual growth.",
  openGraph: {
    title: "Sharon Fellowship Church",
    description: "Join us in worship and community.",
    url: "https://yourdomain.com",
    siteName: "Sharon Fellowship Church",
    type: "website"
  }
};

import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const liveContent = getItem("settings", "live")

  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="font-manrope text-text bg-background min-h-screen overflow-x-hidden">
        <FluidBackground />
        <AnnouncementBar />
        <Navbar liveUrl={liveContent?.youtube_link} />
        <div className="relative w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 flex flex-col gap-0">
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </div>
        <WhatsAppButton />
      </body>
    </html>
  );
}

