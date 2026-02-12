import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://egb-occitanie.fr";
  const currentDate = new Date();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/construction-villa-toulouse`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/renovation-maison-toulouse`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/extension-maison-toulouse`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/renovation-energetique-toulouse`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/renovation-maison-carmes-toulouse`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.92,
    },
    {
      url: `${baseUrl}/construction-villa-cote-pavee-toulouse`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.92,
    },
    {
      url: `${baseUrl}/construction-villa-castanet-tolosan`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.92,
    },
    {
      url: `${baseUrl}/construction-villa-ramonville`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.92,
    },
    {
      url: `${baseUrl}/construction-villa-balma`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.92,
    },
    {
      url: `${baseUrl}/construction-villa-colomiers`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.92,
    },
    {
      url: `${baseUrl}/construction-villa-blagnac`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.92,
    },
    {
      url: `${baseUrl}/construction-villa-tournefeuille`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.92,
    },
    {
      url: `${baseUrl}/construction-villa-lunion`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.92,
    },
    {
      url: `${baseUrl}/renovation-arnaud-bernard-toulouse`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${baseUrl}/renovation-busca-toulouse`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${baseUrl}/renovation-capitole-toulouse`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${baseUrl}/renovation-compans-caffarelli-toulouse`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${baseUrl}/renovation-minimes-toulouse`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${baseUrl}/renovation-rangueil-toulouse`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${baseUrl}/renovation-saint-aubin-dupuy-toulouse`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${baseUrl}/renovation-saint-cyprien-toulouse`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${baseUrl}/renovation-saint-etienne-toulouse`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${baseUrl}/expertise`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projets`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/professionnels`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/calculateur-prix`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/avis`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/politique-confidentialite`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
