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
      "Shedli Auto | Remplacement Pare-Brise Yvelines — Intervention Mobile",
    template: "%s | Shedli Auto",
  },
  description:
    "Pare-brise fissuré dans les Yvelines ? Shedli Auto intervient chez vous sous 24-48h. Prise en charge assurance, devis gratuit. Appelez le 06 28 43 88 44.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
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
