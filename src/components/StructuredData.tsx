export function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": "https://egb-occitanie.fr/#organization",
    "name": "EGB Occitanie",
    "alternateName": "Entreprise Générale de Bâtiment Occitanie",
    "description": "Maîtres d'œuvre de projets d'exception à Toulouse et en Occitanie. Construction neuve, rénovation, extension de villas et maisons haut de gamme.",
    "url": "https://egb-occitanie.fr",
    "telephone": "+33665015882",
    "email": "contact@egb-occitanie.fr",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3 Rue de l'équipement",
      "addressLocality": "Castanet-Tolosan",
      "postalCode": "31320",
      "addressCountry": "FR",
      "addressRegion": "Occitanie"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "43.5528",
      "longitude": "1.4647"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Toulouse"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Haute-Garonne"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Occitanie"
      }
    ],
    "priceRange": "€€€",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.linkedin.com/company/egb-occitanie",
      "https://www.facebook.com/egboccitanie",
      "https://www.instagram.com/egboccitanie"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services de construction",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Construction de villa neuve",
            "description": "Construction de villas sur-mesure à Toulouse et en Occitanie. Architectes partenaires, délais respectés, garantie décennale.",
            "provider": {
              "@id": "https://egb-occitanie.fr/#organization"
            },
            "areaServed": "Toulouse, Haute-Garonne, Occitanie",
            "url": "https://egb-occitanie.fr/construction-villa-toulouse"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Rénovation de maison",
            "description": "Rénovation complète de maisons et appartements à Toulouse. Expertise maisons toulousaines en brique, rénovation énergétique.",
            "provider": {
              "@id": "https://egb-occitanie.fr/#organization"
            },
            "areaServed": "Toulouse, Haute-Garonne, Occitanie",
            "url": "https://egb-occitanie.fr/renovation-maison-toulouse"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Extension de maison",
            "description": "Extension et agrandissement de maisons à Toulouse. Surélévation, véranda, extension bois. Permis de construire géré.",
            "provider": {
              "@id": "https://egb-occitanie.fr/#organization"
            },
            "areaServed": "Toulouse, Haute-Garonne, Occitanie",
            "url": "https://egb-occitanie.fr/extension-maison-toulouse"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Travaux après sinistre",
            "description": "Remise en état après sinistre (dégâts des eaux, incendie). Gestion assurance, travaux de rénovation.",
            "provider": {
              "@id": "https://egb-occitanie.fr/#organization"
            },
            "areaServed": "Toulouse, Haute-Garonne, Occitanie"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "9",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": "https://egb-occitanie.fr"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
