export function SchemaMarkup() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name: 'EGB OCCITANIE',
    legalName: 'EGB OCCITANIE – SAS au capital social variable',
    url: 'https://egb-occitanie.fr',
    logo: 'https://egb-occitanie.fr/logo.png',
    description:
      'Entreprise générale de bâtiment spécialisée dans la construction, rénovation et extension de villas à Toulouse et en Occitanie. 15 ans d\'expérience, 200+ réalisations.',
    telephone: '+33665015882',
    email: 'contact@egb-occitanie.fr',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '18 rue du Lauragais',
      addressLocality: 'Deyme',
      postalCode: '31450',
      addressCountry: 'FR',
      addressRegion: 'Occitanie',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '43.5096',
      longitude: '1.5371',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Toulouse',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Haute-Garonne',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Occitanie',
      },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    priceRange: '€€€',
    sameAs: [
      'https://www.linkedin.com/company/egb-occitanie',
      'https://www.facebook.com/egboccitanie',
      'https://www.instagram.com/egboccitanie',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '25',
      bestRating: '5',
      worstRating: '1',
    },
    founder: {
      '@type': 'Person',
      name: 'Sergiu Lungu',
      jobTitle: 'Dirigeant',
    },
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: '15',
    },
    foundingDate: '2008',
    slogan: 'Nous construisons ce qui dure',
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'SIRET',
      value: '893 232 801 00025',
    },
    vatID: 'FR83893232801',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+33665015882',
      contactType: 'Customer Service',
      areaServed: 'FR',
      availableLanguage: ['French'],
      contactOption: 'TollFree',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services de construction',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Construction de villa neuve',
            description: 'Construction sur-mesure de villas et maisons individuelles à Toulouse',
            provider: {
              '@type': 'Organization',
              name: 'EGB OCCITANIE',
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Rénovation de maison',
            description: 'Rénovation complète et transformation de bâti existant',
            provider: {
              '@type': 'Organization',
              name: 'EGB OCCITANIE',
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Extension de maison',
            description: 'Agrandissement et extension sur-mesure',
            provider: {
              '@type': 'Organization',
              name: 'EGB OCCITANIE',
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Gestion de sinistres',
            description: 'Réparation et reconstruction après sinistre',
            provider: {
              '@type': 'Organization',
              name: 'EGB OCCITANIE',
            },
          },
        },
      ],
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: 'https://egb-occitanie.fr',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
