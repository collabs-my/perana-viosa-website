import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Preloader } from "@/components/ui/preloader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Perana Viosa | Multidimensional Marketing Agency",
  description: "Get a complete C-level marketing team for less than the cost of one mediocre hire—with guaranteed results in 90 days or we work for free until you get them.",
  keywords: "fractional CMO, marketing agency, startup marketing, small business marketing, marketing strategy",
  authors: [{ name: "Perana Viosa" }],
  icons: {
    icon: "/Favicon.svg",
    shortcut: "/Favicon.svg",
    apple: "/Favicon.svg",
  },
  openGraph: {
    title: "Perana Viosa | Multidimensional Marketing Agency",
    description: "Get a complete C-level marketing team for less than the cost of one mediocre hire—with guaranteed results in 90 days or we work for free until you get them.",
    type: "website",
    locale: "en_US",
    images: ["/logo.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Perana Viosa | Multidimensional Marketing Agency",
    description: "Get a complete C-level marketing team for less than the cost of one mediocre hire—with guaranteed results in 90 days or we work for free until you get them.",
    images: ["/logo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
