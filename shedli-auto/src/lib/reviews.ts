export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  vehicle?: string;
  source: "google";
}

export const reviews: Review[] = [
  {
    id: "r1",
    author: "Mehdi B.",
    rating: 5,
    text: "Intervention rapide et soignée. Le technicien est venu directement sur le parking de mon travail. Pare-brise remplacé en moins d'une heure. Je recommande.",
    date: "2026-01-28",
    vehicle: "Peugeot 3008",
    source: "google",
  },
  {
    id: "r2",
    author: "Caroline D.",
    rating: 5,
    text: "Prise en charge assurance gérée de A à Z, je n'ai rien eu à faire. Très professionnel.",
    date: "2026-01-15",
    vehicle: "Renault Clio V",
    source: "google",
  },
  {
    id: "r3",
    author: "Thomas L.",
    rating: 5,
    text: "Réactif, ponctuel, travail propre. Le pare-brise est parfait. Merci Shedli Auto.",
    date: "2026-01-02",
    vehicle: "BMW Série 3",
    source: "google",
  },
  {
    id: "r4",
    author: "Nadia K.",
    rating: 5,
    text: "Impact réparé en 30 minutes devant chez moi. Prix très correct. Service au top.",
    date: "2025-12-18",
    source: "google",
  },
  {
    id: "r5",
    author: "Laurent P.",
    rating: 5,
    text: "Bonne prestation, technicien compétent. Pare-brise commandé et posé en 48h. Le travail est impeccable, rien à redire.",
    date: "2025-12-05",
    vehicle: "Volkswagen Tiguan",
    source: "google",
  },
  {
    id: "r6",
    author: "Sarah M.",
    rating: 5,
    text: "Mon pare-brise s'est fissuré sur l'A13. J'ai appelé le matin, c'était fait l'après-midi. Rien à redire.",
    date: "2025-11-20",
    vehicle: "Toyota Yaris",
    source: "google",
  },
  {
    id: "r7",
    author: "Karim A.",
    rating: 5,
    text: "Deuxième fois que je fais appel à Shedli Auto. Toujours aussi pro. Déplacement à domicile, assurance gérée, pare-brise nickel. Je recommande les yeux fermés.",
    date: "2025-11-05",
    vehicle: "Mercedes Classe A",
    source: "google",
  },
];

export const averageRating =
  Math.round((reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length) * 10) / 10;

export const reviewCount = reviews.length;
