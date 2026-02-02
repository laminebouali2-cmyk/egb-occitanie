'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Quel est le budget moyen pour une rénovation complète à Toulouse ?",
    answer: "Le budget d'une rénovation complète varie généralement entre 800€ et 1500€ par m² selon la nature des travaux. Pour une maison de 100m², comptez entre 80 000€ et 150 000€. Ce prix inclut la démolition, la rénovation structurelle, l'isolation, les menuiseries, l'électricité, la plomberie, les revêtements et les finitions. Nous établissons un devis détaillé gratuit adapté à votre projet spécifique."
  },
  {
    question: "Combien de temps durent les travaux de construction ou rénovation ?",
    answer: "La durée dépend de l'ampleur du projet : une rénovation partielle prend 4 à 8 semaines, une rénovation complète 3 à 6 mois, et une construction neuve 10 à 14 mois. Nous établissons un planning précis dès le démarrage et vous informons régulièrement de l'avancement. Notre objectif est de respecter les délais convenus tout en garantissant une qualité irréprochable."
  },
  {
    question: "Quelles sont les démarches administratives nécessaires ?",
    answer: "Les démarches varient selon votre projet : une déclaration préalable de travaux suffit pour des modifications de façade ou une extension jusqu'à 20m², tandis qu'un permis de construire est obligatoire pour les constructions neuves ou extensions supérieures à 20m². Nous vous accompagnons dans toutes ces démarches en préparant et déposant les dossiers auprès de la mairie de Toulouse et des communes environnantes."
  },
  {
    question: "Avez-vous besoin d'un architecte pour mon projet ?",
    answer: "L'intervention d'un architecte est obligatoire pour les constructions de plus de 150m² de surface de plancher. Pour les projets inférieurs, elle est facultative mais recommandée pour optimiser l'espace et la conception. EGB Occitanie travaille avec un réseau d'architectes partenaires qualifiés qui peuvent intervenir sur votre projet selon vos besoins et votre budget."
  },
  {
    question: "Quelles garanties proposez-vous sur vos travaux ?",
    answer: "Nous offrons toutes les garanties légales : la garantie de parfait achèvement (1 an) pour les désordres apparents, la garantie biennale (2 ans) pour les équipements, et la garantie décennale (10 ans) pour les dommages compromettant la solidité de l'ouvrage. Nous sommes couverts par une assurance décennale et responsabilité civile professionnelle. Tous nos artisans sont qualifiés RGE."
  },
  {
    question: "Comment puis-je suivre l'avancement de mon projet ?",
    answer: "Nous privilégions la transparence totale : vous recevez un planning détaillé en début de chantier, des points réguliers avec votre chef de projet dédié, un accès à un espace client en ligne pour consulter photos et documents, et des réunions de chantier hebdomadaires. Vous pouvez nous contacter à tout moment par téléphone, email ou via notre formulaire de contact."
  },
  {
    question: "Intervenez-vous uniquement sur Toulouse ou dans toute l'Occitanie ?",
    answer: "Notre zone d'intervention principale couvre Toulouse et sa métropole (dans un rayon de 30km). Nous intervenons également sur l'ensemble de la Haute-Garonne et les départements limitrophes de l'Occitanie pour des projets d'envergure. N'hésitez pas à nous contacter pour vérifier si nous pouvons intervenir dans votre commune, nous étudions chaque demande avec attention."
  },
  {
    question: "Proposez-vous un service clé en main ?",
    answer: "Oui, nous proposons une offre complète clé en main comprenant : l'étude de faisabilité, la conception et les plans, les démarches administratives, la coordination de tous les corps de métier, le suivi de chantier quotidien, et la livraison finale. Vous n'avez qu'un seul interlocuteur pour l'ensemble du projet, de la première rencontre jusqu'à la remise des clés. C'est notre engagement qualité."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate FAQPage schema markup
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      {/* Schema markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Questions Fréquentes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Retrouvez les réponses aux questions les plus courantes sur nos services
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <svg className="w-5 h-5 text-stone-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: "auto", 
                      opacity: 1,
                      transition: {
                        height: { duration: 0.3 },
                        opacity: { duration: 0.25, delay: 0.05 }
                      }
                    }}
                    exit={{ 
                      height: 0, 
                      opacity: 0,
                      transition: {
                        height: { duration: 0.3 },
                        opacity: { duration: 0.2 }
                      }
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center bg-white rounded-xl shadow-md border border-gray-200 p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Vous ne trouvez pas la réponse à votre question ?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos interrogations 
            et vous accompagner dans votre projet de construction ou rénovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Nous Contacter
            </Link>
            <Link
              href="tel:+33561000000"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-lg border-2 border-primary hover:bg-primary hover:text-white transition-colors duration-200"
            >
              05 61 00 00 00
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { FAQ };
