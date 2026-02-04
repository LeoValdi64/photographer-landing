import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alexis Morgan Photography | Professional Portrait, Wedding & Commercial Photographer",
  description: "Award-winning photographer specializing in portraits, weddings, and commercial photography. Over 10 years of experience capturing life's most precious moments with artistry and passion.",
  keywords: ["photographer", "photography", "portrait photography", "wedding photographer", "commercial photography", "Los Angeles photographer", "professional photographer"],
  authors: [{ name: "Alexis Morgan" }],
  openGraph: {
    title: "Alexis Morgan Photography",
    description: "Capturing life's most precious moments with artistry and passion",
    type: "website",
    locale: "en_US",
    siteName: "Alexis Morgan Photography",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexis Morgan Photography",
    description: "Capturing life's most precious moments with artistry and passion",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
