import { SITE } from "@/lib/constants";
import { averageRating, reviewCount } from "@/lib/reviews";

export function StructuredData() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: SITE.name,
    description:
      "Spécialiste du remplacement et de la réparation de pare-brise à domicile dans les Yvelines (78) et en Île-de-France. Intervention mobile sous 24-48h, agréé toutes assurances.",
    url: SITE.url,
    telephone: SITE.phoneHref.replace("tel:", ""),
    email: SITE.email,
    image: `${SITE.url}/images/hero-mechanic.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      postalCode: SITE.address.zip,
      addressRegion: SITE.address.region,
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.8178,
      longitude: 1.9482,
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Yvelines" },
      { "@type": "AdministrativeArea", name: "Île-de-France" },
      ...SITE.zone.cities.map((city) => ({
        "@type": "City",
        name: city,
      })),
    ],
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Credit Card, Insurance",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "17:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: averageRating.toString(),
      reviewCount: reviewCount.toString(),
      bestRating: "5",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services pare-brise",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Remplacement de pare-brise à domicile",
            description:
              "Remplacement complet de pare-brise avec intervention mobile. Vitrages certifiés, garantie 2 ans.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Réparation d'impact pare-brise",
            description:
              "Réparation d'éclats et impacts sur pare-brise sans remplacement. Intervention rapide sur place.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Remplacement vitrage latéral et lunette arrière",
            description:
              "Remplacement de toutes les vitres du véhicule : latérales, custodes, lunette arrière.",
          },
        },
      ],
    },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Combien coûte le remplacement d'un pare-brise ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si vous avez une assurance bris de glace, le remplacement est intégralement pris en charge. Vous ne payez rien : 0 € d'avance, 0 € de franchise dans la majorité des cas. Shedli Auto gère votre dossier assurance de A à Z.",
        },
      },
      {
        "@type": "Question",
        name: "En combien de temps intervenez-vous ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nous intervenons sous 24 à 48h dans tout le département des Yvelines (78). Le remplacement du pare-brise prend environ 1 heure sur place.",
        },
      },
      {
        "@type": "Question",
        name: "Vous déplacez-vous à domicile ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, c'est notre spécialité. Nous intervenons chez vous, sur votre lieu de travail ou sur votre parking. Vous n'avez pas besoin de vous déplacer.",
        },
      },
      {
        "@type": "Question",
        name: "Quelles assurances acceptez-vous ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nous sommes agréés par toutes les compagnies d'assurance : AXA, Macif, MAIF, Matmut, Groupama, MMA, Allianz, et toutes les autres. La prise en charge est directe.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}
