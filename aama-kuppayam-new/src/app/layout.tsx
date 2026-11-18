import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aama Kuppayam | Elegance Woven with Love",
  description: "Handcrafted women's wear celebrating South Asian artisanal traditions. Bespoke silhouettes in pure organic silks, gentle kasavu handlooms, and regal emerald tones.",
  keywords: ["women's fashion", "handcrafted", "kasavu", "anarkali", "bridal", "traditional wear", "indian ethnic wear"],
  authors: [{ name: "Aama Kuppayam" }],
  creator: "Aama Kuppayam",
  publisher: "Aama Kuppayam",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://aamakuppayam.com",
    title: "Aama Kuppayam | Elegance Woven with Love",
    description: "Handcrafted women's wear celebrating South Asian artisanal traditions.",
    siteName: "Aama Kuppayam",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aama Kuppayam | Elegance Woven with Love",
    description: "Handcrafted women's wear celebrating South Asian artisanal traditions.",
  },
};

export const viewport: Viewport = {
  themeColor: "#042217",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full bg-surface font-body-md text-on-surface antialiased flex flex-col">
        <Header />
        <main className="w-full pt-28 bg-surface flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}