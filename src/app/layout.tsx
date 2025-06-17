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
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/Favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon-57x57.png", sizes: "57x57" },
      { url: "/apple-touch-icon-60x60.png", sizes: "60x60" },
      { url: "/apple-touch-icon-72x72.png", sizes: "72x72" },
      { url: "/apple-touch-icon-76x76.png", sizes: "76x76" },
      { url: "/apple-touch-icon-114x114.png", sizes: "114x114" },
      { url: "/apple-touch-icon-120x120.png", sizes: "120x120" },
      { url: "/apple-touch-icon-144x144.png", sizes: "144x144" },
      { url: "/apple-touch-icon-152x152.png", sizes: "152x152" },
      { url: "/apple-touch-icon-180x180.png", sizes: "180x180" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Perana Viosa | Multidimensional Marketing Agency",
    description: "Get a complete C-level marketing team for less than the cost of one mediocre hire—with guaranteed results in 90 days or we work for free until you get them.",
    type: "website",
    locale: "en_US",
    url: "https://perana-viosa.vercel.app",
    siteName: "Perana Viosa",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Perana Viosa - Multidimensional Marketing Agency",
      },
      {
        url: "/logo.svg",
        width: 800,
        height: 600,
        alt: "Perana Viosa Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Perana Viosa | Multidimensional Marketing Agency",
    description: "Get a complete C-level marketing team for less than the cost of one mediocre hire—with guaranteed results in 90 days or we work for free until you get them.",
    images: ["/og-image.png"],
    creator: "@perana_viosa",
    site: "@perana_viosa",
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
