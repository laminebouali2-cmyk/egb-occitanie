import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyPhoneBar } from "@/components/layout/StickyPhoneBar";
import { StructuredData } from "@/components/seo/StructuredData";
import { SITE } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default:
      "Shedli Auto | Remplacement Pare-Brise Yvelines (78) — Intervention Mobile",
    template: "%s | Shedli Auto — Pare-Brise Yvelines",
  },
  description:
    "Pare-brise fissuré dans les Yvelines (78) ? Shedli Auto intervient chez vous à domicile. Agréé toutes assurances, 0 € d'avance, collage garanti à vie. Appelez le 06 28 43 88 44.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: SITE.name,
    images: [
      {
        url: "/images/hero-mechanic.jpg",
        width: 1920,
        height: 2880,
        alt: "Shedli Auto — Remplacement de pare-brise à domicile dans les Yvelines",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <a href="#main-content" className="skip-to-content">
          Aller au contenu
        </a>
        <StructuredData />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <StickyPhoneBar />
      </body>
    </html>
  );
}
