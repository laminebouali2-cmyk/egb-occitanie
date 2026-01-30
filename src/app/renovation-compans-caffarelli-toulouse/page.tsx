import type { Metadata } from"next";
import Link from"next/link";
import { ContactSection } from"@/components/ContactSection";

export const metadata: Metadata = {
 title:"Rénovation Compans-Caffarelli Toulouse | Expert Bureaux → Logements",
 description:"Rénovation appartements Compans-Caffarelli Toulouse. Années 70-80, bureaux reconvertis logements, quartier affaires gare Matabiau. Prix 2025 : 1 900-2 600€/m². Devis 06 65 01 58 82.",
 keywords:"rénovation Compans-Caffarelli Toulouse, bureaux logements Toulouse, années 70 80 rénover, quartier affaires Toulouse, prix rénovation Compans, gare Matabiau rénovation",
 alternates: {
 canonical:"https://www.egb-occitanie.fr/renovation-compans-caffarelli-toulouse"
 }
};

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity": [
 {"@type":"Question","name":"Quel prix rénovation Compans-Caffarelli Toulouse 2025 ?","acceptedAnswer": {"@type":"Answer","text":"Prix rénovation Compans-Caffarelli Toulouse 2025 : 1 900-2 600€/m² selon travaux. Rénovation légère années 70-80 : 1 900-2 300€/m². Rénovation complète bureaux→logement : 2 300-2 600€/m² (cloisonnement, cuisine/SDB création, isolation, fenêtres). Pas ABF = coûts -30% vs centre. Exemple 70m² rénovation complète : 133 000-182 000€. Quartier affaires gare Matabiau, transports excellents. Cible jeunes actifs mobilité. Devis gratuit : 06 65 01 58 82."
 }
 }
 ]
};

export default function RenovationCompansCaffarelliToulouse() {
 return (
 <>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

 {/* Hero Section */}
 <section className="relative py-24 md:py-32 bg-white">
 <div className="container">
 <div className="max-w-4xl">
 <div className="flex items-center gap-4 mb-6">
 <span className="h-[1px] w-12 bg-amber-600" />
 <span className="text-amber-800 text-xs uppercase tracking-[0.3em] font-medium">
 Quartier Affaires Gare Matabiau
 </span>
 </div>

 <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-8 leading-[1.1]">
 Rénovation Bureaux & Logements
 <br />
 <span className="text-amber-800">Compans-Caffarelli</span>
 </h1>

 <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed mb-12 max-w-3xl">
 Expert rénovation appartements et reconversion bureaux→logements. Quartier affaires années 70-80,
 gare Matabiau 5 min. Pas ABF = coûts -30% vs centre historique. Transports excellents.
 <strong className="font-medium text-gray-900"> Devis gratuit sous 48h.</strong>
 </p>

 <div className="flex flex-col sm:flex-row gap-4 mb-12">
 <Link
 href="/contact"
 className="inline-flex items-center justify-center gap-3 bg-amber-800 text-white px-8 py-4 text-base font-medium hover:bg-amber-900 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
 >
 Demander un devis
 <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
 </svg>
 </Link>

 <a
 href="tel:+33665015882"
 className="inline-flex items-center justify-center gap-3 border-2 border-amber-800 text-amber-900 px-8 py-4 text-base font-medium hover:bg-amber-50 transition-all duration-300"
 >
 <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
 </svg>
 06 65 01 58 82
 </a>
 </div>

 <div className="grid grid-cols-3 gap-8 pt-8 border-t border-amber-200">
 <div>
 <div className="text-3xl font-light text-amber-900 mb-2">70-80</div>
 <div className="text-sm text-gray-600">Immeubles années</div>
 </div>
 <div>
 <div className="text-3xl font-light text-amber-900 mb-2">Gare 5min</div>
 <div className="text-sm text-gray-600">Matabiau TGV</div>
 </div>
 <div>
 <div className="text-3xl font-light text-amber-900 mb-2">-30%</div>
 <div className="text-sm text-gray-600">Coûts vs centre</div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Introduction Quartier */}
 <section className="py-20 md:py-28 bg-gray-50">
 <div className="container">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">
 Compans-Caffarelli : quartier affaires et reconversion résidentielle
 </h2>

 <div className="prose prose-lg prose-stone max-w-none">
 <p className="text-lg text-gray-700 leading-relaxed mb-6">
 Le quartier Compans-Caffarelli, au nord de la gare Matabiau, est <strong>le quartier d'affaires historique
 de Toulouse</strong>. Développé dans les années 1970-1980 avec immeubles tertiaires, bureaux, sièges sociaux,
 il connaît depuis 2010 une <strong>mutation progressive vers résidentiel</strong> : reconversion bureaux en
 logements, construction résidences neuves, gentrification jeunes actifs mobilité.
 </p>

 <p className="text-lg text-gray-700 leading-relaxed mb-6">
 <strong>Atout majeur : proximité gare Matabiau</strong> (5 min à pied) = connexion TGV Paris 4h, métro ligne B,
 bus multiples, aéroport Blagnac 20 min. Quartier plébiscité par <strong>jeunes actifs mobilité professionnelle</strong>
 (déplacements Paris fréquents, mutations, télétravail flexible). Vie de quartier dynamique en semaine (commerces,
 restaurants midi), calme le week-end.
 </p>

 <p className="text-lg text-gray-700 leading-relaxed mb-8">
 <strong>EGB Occitanie</strong> : expert rénovation Compans-Caffarelli depuis 2012. Spécialité : <strong>reconversion
 bureaux anciens en logements modernes</strong> (cloisonnement, création cuisine/SDB, isolation thermique/phonique).
 12+ projets réalisés, optimisation espaces années 70-80 (plafonds hauts, volumes généreux), DPE amélioré E→B.
 </p>

 <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
 <h3 className="text-lg font-semibold text-amber-900 mb-3">Pourquoi Compans-Caffarelli pour investissement/habitation ?</h3>
 <ul className="text-base text-amber-900 space-y-2">
 <li><strong>Transports exceptionnels:</strong> Gare Matabiau TGV 5 min, métro B, Paris 4h, aéroport 20 min</li>
 <li><strong>Prix attractifs:</strong> Achat 3 000-3 500€/m² (vs 5 490€ Capitole), rénovation 1 900-2 600€/m²</li>
 <li><strong>Pas ABF:</strong> Liberté rénovation totale, coûts -30% vs centre historique protégé</li>
 <li><strong>Cible jeunes actifs:</strong> Mobilité professionnelle, déplacements fréquents, télétravail</li>
 <li><strong>Rentabilité 4-5% brut:</strong> Location meublée courte/moyenne durée actifs mobilité</li>
 <li><strong>Reconversion bureaux:</strong> Opportunités bureaux anciens → logements optimisés surface</li>
 </ul>
 </div>

 <h3 className="text-2xl font-light text-gray-900 mt-12 mb-6">
 Typologie immobilier Compans-Caffarelli
 </h3>

 <div className="grid md:grid-cols-2 gap-6 mb-10">
 <div className="bg-white p-6 border-2 border-amber-200 rounded">
 <h4 className="text-lg font-medium text-gray-900 mb-3">Immeubles résidentiels années 70-80</h4>
 <ul className="text-sm text-gray-700 space-y-2">
 <li>• Surface appartements 50-90m² (T2-T3-T4)</li>
 <li>• Architecture béton fonctionnelle, balcons</li>
 <li>• Isolation faible origine (simple vitrage, DPE E-F-G)</li>
 <li>• Hauteur sous plafond 2,50-2,70m standard</li>
 <li>• Parkings sous-sol sécurisés</li>
 <li>• Charges copropriété modérées 150-250€/mois</li>
 <li>• Rénovation prioritaire: isolation, fenêtres, DPE</li>
 </ul>
 </div>

 <div className="bg-white p-6 border-2 border-amber-200 rounded">
 <h4 className="text-lg font-medium text-gray-900 mb-3">Bureaux reconvertibles logements</h4>
 <ul className="text-sm text-gray-700 space-y-2">
 <li>• Plateaux bureaux 80-150m² cloisonnables</li>
 <li>• Hauteur plafond 2,80-3,20m (gain volume)</li>
 <li>• Grandes baies vitrées lumière naturelle</li>
 <li>• SDB/cuisine à créer (espaces techniques vides)</li>
 <li>• Isolation phonique renforcer (open-space bruyant)</li>
 <li>• Potentiel optimisation: 2-3 logements par plateau</li>
 <li>• Prix achat bureaux: 2 000-2 800€/m² (vs 3 500€ logement)</li>
 </ul>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Prix Rénovation */}
 <section className="py-20 md:py-28 bg-white">
 <div className="container">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12">
 Prix rénovation Compans-Caffarelli : 1 900 - 2 600€/m²
 </h2>

 <div className="prose prose-lg prose-stone max-w-none">
 <p className="text-lg text-gray-700 leading-relaxed mb-8">
 Prix rénovation Compans-Caffarelli <strong>30% inférieur vs centre historique</strong> (Capitole, Carmes)
 grâce absence contraintes ABF. Matériaux standards autorisés (PVC/alu fenêtres, isolation extérieure),
 pas honoraires architecte patrimoine, délais courts 1 mois déclaration préalable vs 3-4 mois ABF.
 </p>

 <div className="bg-white border-2 border-amber-200 p-8 rounded-lg mb-10">
 <h3 className="text-2xl font-medium text-amber-900 mb-6">Grille tarifaire rénovation Compans-Caffarelli 2025</h3>

 <div className="space-y-6">
 <div className="bg-white p-6 rounded border border-gray-200">
 <div className="flex justify-between items-start mb-4">
 <div>
 <h4 className="text-lg font-semibold text-gray-900">Rénovation légère années 70-80</h4>
 <p className="text-sm text-gray-600">Peinture, sols, électricité, cuisine/SDB basiques</p>
 </div>
 <div className="text-right">
 <div className="text-3xl font-light text-amber-800">2 000€</div>
 <div className="text-sm text-gray-600">/m²</div>
 </div>
 </div>
 <ul className="text-sm text-gray-700 space-y-1.5">
 <li>• Peinture murs/plafonds complète</li>
 <li>• Sols parquet flottant stratifié 30-50€/m²</li>
 <li>• Électricité remise normes partielle</li>
 <li>• Cuisine équipée basique 8-12k€</li>
 <li>• SDB simple douche 6-10k€</li>
 <li>• Isolation fenêtres PVC basiques 300-500€/unité</li>
 </ul>
 </div>

 <div className="bg-amber-50 p-6 rounded border-2 border-amber-600">
 <div className="flex justify-between items-start mb-4">
 <div>
 <h4 className="text-lg font-semibold text-amber-900">Rénovation complète optimisation moderne</h4>
 <p className="text-sm text-amber-800">Isolation, fenêtres, cuisine/SDB modernes, électricité totale</p>
 </div>
 <div className="text-right">
 <div className="text-3xl font-light text-amber-900">2 400€</div>
 <div className="text-sm text-amber-800">/m²</div>
 </div>
 </div>
 <ul className="text-sm text-amber-900 space-y-1.5">
 <li>• Isolation combles + murs intérieur 10cm</li>
 <li>• Fenêtres PVC double vitrage phonique 400-600€/unité</li>
 <li>• Cuisine équipée moderne 15-25k€</li>
 <li>• SDB complète douche italienne 12-18k€</li>
 <li>• Électricité + plomberie complètes normes</li>
 <li>• Parquet massif ou stratifié haut gamme</li>
 <li>• Peinture, finitions modernes</li>
 <li>• VMC double flux si possible</li>
 </ul>
 </div>

 <div className="bg-white p-6 rounded border border-gray-200">
 <div className="flex justify-between items-start mb-4">
 <div>
 <h4 className="text-lg font-semibold text-gray-900">Reconversion bureau → logement</h4>
 <p className="text-sm text-gray-600">Cloisonnement, création cuisine/SDB, isolation, aménagement complet</p>
 </div>
 <div className="text-right">
 <div className="text-3xl font-light text-amber-800">2 600€</div>
 <div className="text-sm text-gray-600">/m²</div>
 </div>
 </div>
 <ul className="text-sm text-gray-700 space-y-1.5">
 <li>• Cloisonnement création pièces (BA13, placo)</li>
 <li>• Création cuisine complète (plomberie, électricité, gaz)</li>
 <li>• Création SDB avec évacuations (WC, douche, lavabo)</li>
 <li>• Isolation phonique renforcée (murs, plafonds)</li>
 <li>• Chauffage individuel installation (radiateurs, chaudière)</li>
 <li>• Menuiseries intérieures (portes, placards)</li>
 <li>• Sols parquet, peintures, finitions habitabilité</li>
 </ul>
 </div>
 </div>
 </div>

 <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8">
 <h4 className="font-semibold text-amber-900 mb-3">Exemple budget appartement 70m² rénovation complète:</h4>
 <div className="space-y-2 text-sm text-amber-900">
 <div className="flex justify-between pb-2 border-b border-amber-200">
 <span>Rénovation complète optimisation (2 400€/m² × 70m²)</span>
 <strong>168 000€</strong>
 </div>
 <div className="flex justify-between pb-2 border-b border-amber-200">
 <span>Amélioration DPE E→B (bonus isolation, PAC)</span>
 <strong>12 000€</strong>
 </div>
 <div className="flex justify-between pb-2 border-b border-amber-200">
 <span>Aides MaPrimeRénov' + Bonus Métropole</span>
 <strong>-8 000€</strong>
 </div>
 <div className="h-[1px] bg-amber-300 my-3"></div>
 <div className="flex justify-between text-base">
 <strong>BUDGET NET:</strong>
 <strong className="text-lg">172 000€</strong>
 </div>
 </div>
 <p className="text-xs text-amber-800 mt-4 mb-0">
 Investissement total : Achat 70m² 231k€ (3 300€/m²) + Rénovation 172k€ + Frais 20k€ = 423k€.
 Valorisation post-rénovation : 490-530k€ = plus-value 67-107k€. Rentabilité locative : 4-5% brut.
 </p>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Reconversion Bureaux Section */}
 <section className="py-20 md:py-28 bg-gray-50">
 <div className="container">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12">
 Reconversion bureaux → logements : opportunité Compans-Caffarelli
 </h2>

 <div className="prose prose-lg prose-stone max-w-none">
 <p className="text-lg text-gray-700 leading-relaxed mb-10">
 Nombreux <strong>bureaux années 70-80 obsolètes</strong> (open-space anciens, isolation faible, équipements
 vétustes) disponibles à prix attractifs 2 000-2 800€/m² (vs 3 500€/m² logements résidentiels).
 <strong>Reconversion bureaux→logements = opportunité investissement</strong> avec optimisation surface et
 création valeur (+25-35% valorisation post-travaux).
 </p>

 <div className="space-y-8">
 <div className="bg-white border-2 border-amber-200 p-8 rounded">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-14 h-14 rounded-full bg-amber-600 text-white flex items-center justify-center text-xl font-light flex-shrink-0">
 1
 </div>
 <div>
 <h3 className="text-2xl font-medium text-gray-900 mb-2">Vérification faisabilité reconversion</h3>
 <p className="text-amber-800 font-medium">Diagnostic structure, PLU, copropriété</p>
 </div>
 </div>

 <div className="space-y-4 text-gray-700">
 <p className="leading-relaxed">
 <strong>Étape cruciale AVANT achat bureau</strong> : vérifier faisabilité reconversion usage
 commercial→habitation. 3 points bloquants potentiels : 1) PLU autorisation changement destination,
 2) Copropriété règlement acceptation logements (souvent refusé immeubles 100% bureaux), 3) Structure
 adaptée (évacuations eaux usées étages, ventilation naturelle).
 </p>

 <div className="bg-amber-50 p-5 rounded">
 <h4 className="font-semibold text-gray-900 mb-3">Checklist faisabilité reconversion bureau:</h4>
 <ul className="text-sm space-y-2">
 <li> <strong>PLU Toulouse:</strong> Vérifier zone UD/UC autorise logements (majorité Compans OK)</li>
 <li> <strong>Règlement copropriété:</strong> Clause acceptation habitation ou 100% bureaux interdit ?</li>
 <li> <strong>Évacuations:</strong> Canalisations eaux usées verticales présentes ? (SDB/cuisine création)</li>
 <li> <strong>Ventilation:</strong> Fenêtres ouvrantes suffisantes ? VMC possible ?</li>
 <li> <strong>Surface minimale:</strong> 28m² minimum logement décent + hauteur 2,20m (OK années 70-80)</li>
 <li> <strong>Charges copropriété:</strong> Charges bureaux ≠ logements, renégociation tantièmes ?</li>
 </ul>
 </div>
 </div>
 </div>

 <div className="bg-white border-2 border-amber-200 p-8 rounded">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-14 h-14 rounded-full bg-amber-600 text-white flex items-center justify-center text-xl font-light flex-shrink-0">
 2
 </div>
 <div>
 <h3 className="text-2xl font-medium text-gray-900 mb-2">Travaux reconversion type (bureau 100m² → 2 T3)</h3>
 <p className="text-amber-800 font-medium">Cloisonnement, création cuisine/SDB, isolation</p>
 </div>
 </div>

 <div className="space-y-4 text-gray-700">
 <p className="leading-relaxed">
 Bureau plateau 100m² typique (rectangle 10×10m, 3 fenêtres façade) peut se diviser en <strong>2 appartements
 T3 45-50m²</strong> chacun avec optimisation intelligente cloisonnement. Gain valorisation : achat bureau
 280k€ (2 800€/m²) → 2 T3 vendus 380k€ (190k€ chacun) = +100k€ avant travaux.
 </p>

 <div className="bg-white border border-gray-200 p-5">
 <h4 className="font-semibold text-gray-900 mb-3">Budget travaux reconversion bureau 100m² → 2 T3 50m²:</h4>
 <div className="text-sm space-y-2">
 <div className="flex justify-between pb-2 border-b border-gray-200">
 <span>Cloisonnement création 2 logements (BA13, isolation phonique)</span>
 <strong>15 000€</strong>
 </div>
 <div className="flex justify-between pb-2 border-b border-gray-200">
 <span>2 Cuisines équipées modernes 15k€ chacune</span>
 <strong>30 000€</strong>
 </div>
 <div className="flex justify-between pb-2 border-b border-gray-200">
 <span>2 SDB complètes création plomberie 12k€ chacune</span>
 <strong>24 000€</strong>
 </div>
 <div className="flex justify-between pb-2 border-b border-gray-200">
 <span>Électricité adaptation usage habitation (tableaux, prises)</span>
 <strong>12 000€</strong>
 </div>
 <div className="flex justify-between pb-2 border-b border-gray-200">
 <span>Chauffage individuel 2 logements (radiateurs, chaudières)</span>
 <strong>16 000€</strong>
 </div>
 <div className="flex justify-between pb-2 border-b border-gray-200">
 <span>Menuiseries intérieures (8 portes, 4 placards)</span>
 <strong>8 000€</strong>
 </div>
 <div className="flex justify-between pb-2 border-b border-gray-200">
 <span>Sols parquet, peintures, finitions 100m²</span>
 <strong>18 000€</strong>
 </div>
 <div className="flex justify-between pb-2 border-b border-gray-200">
 <span>Isolation phonique renforcée (murs mitoyens, plafonds)</span>
 <strong>12 000€</strong>
 </div>
 <div className="flex justify-between pb-2 border-b border-gray-200">
 <span>Honoraires maîtrise œuvre 10%</span>
 <strong>13 500€</strong>
 </div>
 <div className="h-[1px] bg-gray-300 my-3"></div>
 <div className="flex justify-between text-base font-bold">
 <span>TOTAL TRAVAUX:</span>
 <span className="text-lg text-amber-800">148 500€</span>
 </div>
 </div>
 <div className="mt-4 text-xs bg-green-50 p-3 rounded text-green-900">
 <strong>Rentabilité opération:</strong> Achat 280k€ + Travaux 148k€ + Frais 30k€ = 458k€ investissement.
 Revente 2 T3 380k€ (190k€ chacun, 3 800€/m²) = PERTE -78k€ revente immédiate. <strong>MAIS location
 2 T3 1 200€/mois = 14 400€/an = rentabilité 3,1% nette.</strong> Stratégie : location long terme
 jeunes actifs mobilité gare Matabiau.
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 <ContactSection />
 </>
 );
}
