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
  title: "TÜİK Veri Asistanı - WhatsApp'tan TÜİK Verilerine Anında Erişim",
  description: "TÜİK MCP Server ve ChatGPT ile güçlendirilmiş WhatsApp botu. Enflasyon, işsizlik, konut fiyatları ve tüm TÜİK istatistiklerine anında ulaşın, AI destekli analizler alın.",
  keywords: "TÜİK, enflasyon, istatistik, WhatsApp bot, veri analizi, Türkiye istatistik, TÜFE, işsizlik oranı, konut fiyatları, ekonomik veriler",
  authors: [{ name: "TÜİK Veri Asistanı Ekibi" }],
  openGraph: {
    title: "TÜİK Veri Asistanı - WhatsApp'tan TÜİK Verilerine Anında Erişim",
    description: "TÜİK MCP Server ve ChatGPT ile güçlendirilmiş WhatsApp botu. Tüm TÜİK istatistiklerine anında ulaşın.",
    type: "website",
    locale: "tr_TR",
    siteName: "TÜİK Veri Asistanı",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TÜİK Veri Asistanı - WhatsApp Bot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TÜİK Veri Asistanı",
    description: "WhatsApp'tan TÜİK verilerine anında erişim",
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png" },
    ],
  },
  manifest: "/manifest.json",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}