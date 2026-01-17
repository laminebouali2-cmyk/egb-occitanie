import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a1a1a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://egb-occitanie.fr"),
  title: {
    default: "EGB Occitanie | Construction & Rénovation en Occitanie",
    template: "%s | EGB Occitanie",
  },
  description:
    "Entreprise générale de bâtiment en Occitanie. Construction neuve, rénovation et extension. Expertise technique, maîtrise des délais, excellence d'exécution depuis 15 ans.",
  keywords: [
    "construction Occitanie",
    "entreprise bâtiment Toulouse",
    "constructeur maison Occitanie",
    "rénovation Toulouse",
    "extension maison",
    "maître d'œuvre Occitanie",
    "entreprise générale bâtiment",
    "construction neuve Toulouse",
  ],
  authors: [{ name: "EGB Occitanie" }],
  creator: "EGB Occitanie",
  publisher: "EGB Occitanie",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://egb-occitanie.fr",
    siteName: "EGB Occitanie",
    title: "EGB Occitanie | Construction & Rénovation en Occitanie",
    description:
      "Entreprise générale de bâtiment en Occitanie. Construction neuve, rénovation et extension depuis 15 ans.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EGB Occitanie - Construction Premium en Occitanie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EGB Occitanie | Construction & Rénovation",
    description:
      "Entreprise générale de bâtiment en Occitanie. Construction neuve, rénovation et extension.",
    images: ["/og-image.jpg"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-white text-neutral-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
