"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const services = [
  {
    id: "construction",
    number: "01",
    title: "Construction Neuve",
    description: "Maisons individuelles, bâtiments tertiaires, locaux professionnels. De la conception à la livraison clés en main.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200",
    href: "/expertise#construction",
    features: ["Maisons individuelles", "Bâtiments tertiaires", "Locaux commerciaux"],
  },
  {
    id: "renovation",
    number: "02",
    title: "Rénovation",
    description: "Restructuration complète ou partielle. Redonner vie à vos espaces avec exigence et savoir-faire.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200",
    href: "/expertise#renovation",
    features: ["Rénovation intérieure", "Réhabilitation", "Mise aux normes"],
  },
  {
    id: "extension",
    number: "03",
    title: "Extension",
    description: "Agrandissement harmonieux de votre habitat. Dans le respect de l'existant et des normes actuelles.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
    href: "/expertise#extension",
    features: ["Surélévation", "Extension latérale", "Aménagement combles"],
  },
];

export function Domaines() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="section bg-white">
      <div className="container">
        {/* Header */}
        <motion.div
          className="max-w-2xl mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-overline mb-4 block">Nos expertises</span>
          <h2 className="mb-6">
            Trois domaines,
            <br />
            <span className="text-neutral-400">une même exigence</span>
          </h2>
          <p className="text-lead">
            Chaque projet bénéficie de notre expertise technique et de notre engagement qualité,
            quelle que soit son envergure.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-20 md:space-y-32">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
  isInView,
}: {
  service: (typeof services)[0];
  index: number;
  isInView: boolean;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center ${
        isEven ? "" : "lg:flex-row-reverse"
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      {/* Image */}
      <Link
        href={service.href}
        className={`relative aspect-[4/3] overflow-hidden group ${
          isEven ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url('${service.image}')` }}
        />
        <div className="absolute inset-0 bg-neutral-900/20 transition-opacity duration-300 group-hover:opacity-0" />

        {/* Number overlay */}
        <span className="absolute bottom-6 right-6 text-8xl font-light text-white/20">
          {service.number}
        </span>
      </Link>

      {/* Content */}
      <div className={`${isEven ? "lg:order-2" : "lg:order-1"}`}>
        <span className="text-overline text-neutral-400 mb-4 block">{service.number}</span>
        <h3 className="text-3xl md:text-4xl font-normal mb-4">{service.title}</h3>
        <p className="text-lg text-neutral-500 mb-8 leading-relaxed">
          {service.description}
        </p>

        {/* Features list */}
        <ul className="space-y-3 mb-8">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3 text-neutral-600">
              <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full" />
              {feature}
            </li>
          ))}
        </ul>

        <Link
          href={service.href}
          className="inline-flex items-center gap-2 text-neutral-900 font-medium group/link"
        >
          En savoir plus
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}
