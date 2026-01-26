export function generateCanonicalUrl(path: string): string {
  const baseUrl = 'https://egb-occitanie.fr';
  return `${baseUrl}${path}`;
}

export function generateMetadata(params: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  imageUrl?: string;
}) {
  const { title, description, path, keywords, imageUrl } = params;
  const canonical = generateCanonicalUrl(path);
  const ogImage = imageUrl || '/og-image.jpg';

  return {
    title,
    description,
    keywords: keywords || [],
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'EGB Occitanie',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'fr_FR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
