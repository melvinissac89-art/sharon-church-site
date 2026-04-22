import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
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
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="font-sans text-text bg-background min-h-screen">
        {children}
      </body>
    </html>
  );
}
