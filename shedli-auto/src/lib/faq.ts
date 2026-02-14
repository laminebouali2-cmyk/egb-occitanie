export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "Combien coûte un remplacement de pare-brise ?",
    answer:
      "Le prix dépend du modèle de votre véhicule et du type de pare-brise (athermique, détecteur de pluie, caméra ADAS…). En moyenne, comptez entre 200 € et 600 €. Si vous êtes couvert par une garantie bris de glace, votre assurance prend en charge la totalité ou une grande partie du coût. Appelez-nous pour un devis gratuit en 2 minutes.",
  },
  {
    question: "Est-ce que mon assurance couvre le remplacement ?",
    answer:
      "Si votre contrat inclut la garantie « bris de glace », oui. La plupart des contrats tous risques la incluent. Nous gérons directement le dossier avec votre assureur : vous n'avez aucune avance de frais à faire. Votre seul reste à charge éventuel est la franchise, qui peut être offerte selon votre contrat.",
  },
  {
    question: "Combien de temps dure l'intervention ?",
    answer:
      "Un remplacement complet prend environ 1 heure. Une réparation d'impact prend 30 minutes. Après le remplacement, un temps de séchage de 2 à 3 heures est recommandé avant de reprendre la route à vitesse normale.",
  },
  {
    question: "Vous intervenez directement chez moi ?",
    answer:
      "Oui, c'est notre spécialité. Nous intervenons à votre domicile, sur votre lieu de travail, ou sur tout parking accessible dans les Yvelines et en Île-de-France. Vous n'avez pas à vous déplacer.",
  },
  {
    question: "Peut-on réparer un impact au lieu de tout remplacer ?",
    answer:
      "Un impact de moins de 2 cm de diamètre, situé hors du champ de vision du conducteur, peut être réparé sans remplacement. Au-delà, ou si la fissure s'est propagée, le remplacement complet est nécessaire. Nous diagnostiquons sur place et vous conseillons honnêtement.",
  },
  {
    question: "Un impact empêche-t-il de passer le contrôle technique ?",
    answer:
      "Oui. Un impact ou une fissure dans la zone de balayage des essuie-glaces est un motif de contre-visite au contrôle technique. Mieux vaut intervenir rapidement : un simple impact non traité peut se transformer en fissure sous l'effet de la température ou des vibrations.",
  },
  {
    question: "Quelles marques de pare-brise utilisez-vous ?",
    answer:
      "Nous posons exclusivement des pare-brises certifiés aux normes européennes (marquage E), de marques reconnues (Pilkington, Saint-Gobain Sekurit, AGC, Fuyao). Collage garanti à vie, vitrages conformes ECE R43.",
  },
];
