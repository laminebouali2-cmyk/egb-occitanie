import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { StructuredData } from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-playfair",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1C1917",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://egb-occitanie.fr"),
  title: {
    default: "EGB Occitanie | Construction Villa Toulouse - Rénovation Haut de Gamme Haute-Garonne",
    template: "%s | EGB Occitanie",
  },
  description:
    "Constructeur villa neuve & rénovation haut de gamme à Toulouse. 15 ans d'expertise, 5+ architectes partenaires, 0 retard de chantier, garantie décennale. Devis gratuit sous 48h. Construction, rénovation, extension sur-mesure en Haute-Garonne.",
  keywords: [
    "construction villa toulouse",
    "constructeur maison toulouse",
    "rénovation toulouse",
    "rénovation haut de gamme toulouse",
    "construction neuve haute-garonne",
    "extension maison toulouse",
    "architecte toulouse",
    "maître d'œuvre toulouse",
    "entreprise bâtiment toulouse",
    "villa sur-mesure toulouse",
    "rénovation maison toulousaine",
    "construction occitanie",
  ],
  authors: [{ name: "EGB Occitanie" }],
  creator: "EGB Occitanie",
  publisher: "EGB Occitanie",
  alternates: {
    canonical: "https://egb-occitanie.fr",
  },
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
    title: "EGB Occitanie | Constructeur Villa & Rénovation Premium Toulouse",
    description:
      "Spécialiste construction villa neuve et rénovation haut de gamme à Toulouse. 15 ans d'expertise, 5+ architectes, 0 retard, garantie décennale. Devis gratuit 48h.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EGB Occitanie - Constructeur Villa Premium Toulouse & Haute-Garonne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EGB Occitanie | Constructeur Villa Toulouse - Rénovation Premium",
    description:
      "Construction villa neuve & rénovation haut de gamme à Toulouse. 15 ans d'expertise, 5+ architectes, 0 retard. Devis gratuit 48h.",
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
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <StructuredData />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
