import type { Metadata } from "next";
import { Inter, Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import FluidBackground from "@/components/ui/FluidBackground";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="font-manrope text-text bg-background min-h-screen overflow-x-hidden">
        <FluidBackground />
        <div style={{ 
          transform: 'scale(0.93)', 
          transformOrigin: 'top center',
          width: '107.52%',
          marginLeft: '-3.76%'
        }}>
          {children}
        </div>
      </body>
    </html>
  );
}
