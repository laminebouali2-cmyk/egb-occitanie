import { SITE } from "@/lib/constants";
import { averageRating, reviewCount } from "@/lib/reviews";

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": SITE.name,
    "description":
      "Spécialiste du remplacement de pare-brise à domicile dans les Yvelines et en Île-de-France.",
    "url": SITE.url,
    "telephone": SITE.phoneHref.replace("tel:", ""),
    "email": SITE.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SITE.address.street,
      "addressLocality": SITE.address.city,
      "postalCode": SITE.address.zip,
      "addressRegion": SITE.address.region,
      "addressCountry": "FR",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.8178,
      "longitude": 1.9482,
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Yvelines" },
      { "@type": "AdministrativeArea", "name": "Île-de-France" },
    ],
    "priceRange": "€€",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        "opens": "08:00",
        "closes": "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "17:00",
      },
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": averageRating.toString(),
      "reviewCount": reviewCount.toString(),
      "bestRating": "5",
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services pare-brise",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Remplacement de pare-brise",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Réparation d'impact",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Remplacement vitrage latéral",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
