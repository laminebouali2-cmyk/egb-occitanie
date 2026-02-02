import type { Metadata } from"next";
import Link from"next/link";
import { ContactSection } from"@/components/ContactSection";

export const metadata: Metadata = {
 title:"Rénovation Maison Les Carmes Toulouse | Expert Zone ABF & Patrimoine",
 description:"Spécialiste rénovation maison toulousaine Les Carmes. Expert zone ABF, procédure complète gérée. Maisons XVII-XIXe brique rose, conservation patrimoine. 15+ rénovations Les Carmes validées ABF. Devis gratuit 48h.",
 keywords: ["rénovation maison les carmes toulouse","architecte abf les carmes","rénovation patrimoine toulouse","rénovation hôtel particulier toulouse","maison toulousaine les carmes","zone abf toulouse","rénovation centre historique toulouse","architecte des batiments de france toulouse",
 ],
 openGraph: {
 title:"Rénovation Maison Les Carmes | Expert ABF Toulouse",
 description:"Expert rénovation patrimoine Les Carmes. Zone ABF, maisons toulousaines XVII-XIXe. Procédure ABF gérée. Devis gratuit.",
 url:"https://egb-occitanie.fr/renovation-maison-carmes-toulouse",
 },
};

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity": [
 {"@type":"Question","name":"Quel est le prix d'une rénovation aux Carmes Toulouse ?","acceptedAnswer": {"@type":"Answer","text":"Prix rénovation maison Les Carmes Toulouse: 2 800-3 500€/m² selon ampleur travaux et conservation patrimoine. Rénovation complète maison 120m²: 336 000-420 000€. Prix supérieurs vs autres quartiers car: zone ABF (contraintes strictes), conservation éléments patrimoniaux (moulures, parquet ancien, brique rose), artisans spécialisés patrimoine, matériaux traditionnels (chaux, terre cuite), délais longs (instruction ABF +1-2 mois). Ces prix incluent: études architecte DPLG, dossier ABF complet, travaux conservation, finitions haut de gamme."
 }
 },
 {"@type":"Question","name":"Comment obtenir l'autorisation ABF aux Carmes ?","acceptedAnswer": {"@type":"Answer","text":"Procédure ABF Les Carmes Toulouse: 1) Étude préalable avec architecte DPLG (obligatoire zone ABF), 2) Constitution dossier 15 pièces (plans façades, photos, choix matériaux, nuancier couleurs), 3) Dépôt déclaration préalable ou permis mairie, 4) Instruction services urbanisme (1 mois) puis transmission ABF, 5) Avis ABF (1 mois supplémentaire), 6) Décision mairie favorable/défavorable. Délai total: 3-4 mois vs 2 mois hors ABF. Taux acceptation: 85% si dossier bien préparé par architecte expert patrimoine. EGB Occitanie: 100% dossiers ABF Les Carmes validés (15 projets depuis 2010)."
 }
 }
 ]
};

export default function RenovationMaisonCarmesToulouse() {
 return (
 <>
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
 />

 {/* Hero Section */}
 <section className="relative py-24 md:py-32 bg-white">
 <div className="container">
 <div className="max-w-4xl">
 <div className="flex items-center gap-4 mb-6">
 <span className="h-[1px] w-12 bg-amber-600" />
 <span className="text-amber-800 text-xs uppercase tracking-[0.3em] font-medium">
 Quartier Les Carmes - Zone ABF
 </span>
 </div>

 <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-8 leading-[1.1]">
 Rénovation Maison
 <br />
 <span className="text-amber-800">Les Carmes Toulouse</span>
 </h1>

 <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed mb-12 max-w-3xl">
 Expert rénovation patrimoine Les Carmes depuis 15 ans. Zone ABF, maisons toulousaines XVII-XIXe.
 100% autorisations ABF obtenues. Conservation brique rose, hôtels particuliers.
 <strong className="font-medium text-gray-900"> Devis gratuit sous 48h.</strong>
 </p>

 <div className="flex flex-col sm:flex-row gap-4 mb-12">
 <Link
 href="/contact"
 className="inline-flex items-center justify-center gap-3 bg-amber-800 text-white px-8 py-4 text-base font-medium hover:bg-amber-900 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
 >
 Étude ABF gratuite
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
 <div className="text-3xl font-light text-amber-900 mb-2">15+</div>
 <div className="text-sm text-gray-600">Rénovations Les Carmes</div>
 </div>
 <div>
 <div className="text-3xl font-light text-amber-900 mb-2">100%</div>
 <div className="text-sm text-gray-600">Autorisations ABF obtenues</div>
 </div>
 <div>
 <div className="text-3xl font-light text-amber-900 mb-2">XVII-XXe</div>
 <div className="text-sm text-gray-600">Patrimoine toulousain</div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Introduction Quartier */}
 <section className="py-20 md:py-28 bg-white">
 <div className="container">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">
 Les Carmes : quartier historique et zone ABF protégée
 </h2>

 <div className="prose prose-lg prose-stone max-w-none">
 <p className="text-lg text-gray-700 leading-relaxed mb-6">
 Le quartier Les Carmes, au cœur du centre historique de Toulouse, est classé <strong>secteur sauvegardé
 depuis 1996 et zone de protection ABF (Architecte des Bâtiments de France)</strong>. Ce quartier médiéval
 abrite un patrimoine architectural exceptionnel : maisons toulousaines XVII-XIXe siècle en brique rose,
 hôtels particuliers, cours intérieures pavées, façades à colombages.
 </p>

 <p className="text-lg text-gray-700 leading-relaxed mb-6">
 Avec seulement <strong>420 maisons réparties sur 18 hectares</strong>, Les Carmes est l'un des quartiers
 les plus recherchés de Toulouse. Prix m² habitable : 4 800-6 500€ (vente), soit +35% vs moyenne Toulouse.
 La construction neuve y est quasi impossible (densité maximale atteinte, protection patrimoine).
 <strong> 95% des projets Les Carmes sont des rénovations de maisons anciennes</strong>.
 </p>

 <p className="text-lg text-gray-700 leading-relaxed mb-8">
 <strong>EGB Occitanie</strong> est expert rénovation patrimoine Les Carmes depuis 2010. Nous avons rénové
 15+ maisons toulousaines dans le quartier avec <strong>100% d'autorisations ABF obtenues</strong> grâce à
 notre collaboration avec des architectes DPLG spécialisés patrimoine et notre connaissance parfaite des
 exigences ABF.
 </p>

 <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
 <h3 className="text-lg font-semibold text-amber-900 mb-3">Pourquoi Les Carmes nécessite un expert ?</h3>
 <ul className="text-base text-amber-900 space-y-2">
 <li> <strong>Zone ABF ultra-stricte:</strong> Avis obligatoire pour toute modification façade, toiture, menuiseries</li>
 <li> <strong>Architecture protégée:</strong> Maisons classées ou inscrites MH nécessitent autorisations spéciales</li>
 <li> <strong>Matériaux imposés:</strong> Brique rose toulousaine, tuiles canal, enduit chaux, menuiseries bois ou alu teintes réglementées</li>
 <li> <strong>Délais longs:</strong> +1-2 mois instruction ABF vs quartier normal (total 3-4 mois)</li>
 <li> <strong>Artisans spécialisés:</strong> Tailleur pierre, restaurateur brique ancienne, menuisier patrimoine</li>
 <li> <strong>Budget élevé:</strong> 2 800-3 500€/m² vs 1 800-2 200€/m² quartiers standards</li>
 </ul>
 </div>

 <h3 className="text-2xl font-light text-gray-900 mt-12 mb-6">
 Typologie architecture Les Carmes
 </h3>

 <div className="grid md:grid-cols-2 gap-6 mb-10">
 <div className="bg-gray-50 p-6 border border-gray-200">
 <h4 className="text-lg font-medium text-gray-900 mb-3">Maisons toulousaines XVII-XVIIIe</h4>
 <ul className="text-sm text-gray-700 space-y-2">
 <li>• Façades brique rose apparente (40-50cm épaisseur)</li>
 <li>• Hauteur 3 niveaux (RDC + 2 étages)</li>
 <li>• Toiture tuiles canal rouges, pente 30-35°</li>
 <li>• Génoise 3-4 rangs (corniche brique sous toit)</li>
 <li>• Menuiseries bois à petits carreaux</li>
 <li>• Cour intérieure pavée (galets Garonne)</li>
 <li>• Escalier pierre ou bois massif</li>
 </ul>
 </div>

 <div className="bg-gray-50 p-6 border border-gray-200">
 <h4 className="text-lg font-medium text-gray-900 mb-3">Hôtels particuliers XIXe</h4>
 <ul className="text-sm text-gray-700 space-y-2">
 <li>• Surface 200-400m² habitables</li>
 <li>• Façades monumentales ordonnancées</li>
 <li>• Hauteur sous plafond 3,20-4,00m</li>
 <li>• Moulures stucs, rosaces plafond</li>
 <li>• Parquets chêne massif à bâtons rompus</li>
 <li>• Cheminées marbre, gypseries</li>
 <li>• Cours d'honneur, dépendances</li>
 </ul>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Procédure ABF Section - CRITIQUE */}
 <section className="py-20 md:py-28 bg-gray-50">
 <div className="container">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12">
 Procédure complète autorisation ABF Les Carmes
 </h2>

 <div className="prose prose-lg prose-stone max-w-none">
 <p className="text-lg text-gray-700 leading-relaxed mb-10">
 Toute modification extérieure d'une maison Les Carmes nécessite l'avis conforme de l'<strong>Architecte
 des Bâtiments de France (ABF)</strong>. Cette procédure stricte protège le patrimoine architectural toulousain
 mais allonge les délais et impose des contraintes matériaux/couleurs.
 <strong> EGB Occitanie maîtrise parfaitement cette procédure</strong> (15 dossiers validés).
 </p>

 <div className="space-y-8">
 {/* Étape 1 */}
 <div className="bg-white border-2 border-amber-200 p-8 rounded">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-14 h-14 rounded-full bg-amber-600 text-white flex items-center justify-center text-xl font-light flex-shrink-0">
 1
 </div>
 <div>
 <h3 className="text-2xl font-medium text-gray-900 mb-2">Étude préalable avec architecte DPLG</h3>
 <p className="text-amber-800 font-medium">Durée: 4-6 semaines | Obligatoire zone ABF</p>
 </div>
 </div>

 <div className="space-y-4 text-gray-700">
 <p className="leading-relaxed">
 Collaboration avec <strong>architecte DPLG expert patrimoine</strong> (obligatoire zone ABF,
 même si rénovation intérieure). L'architecte réalise : relevé précis façades existantes,
 plans projet conformes exigences ABF, perspectives 3D insertion environnement,
 nuancier couleurs réglementaires, choix matériaux traditionnels.
 </p>

 <div className="bg-amber-50 p-5 rounded">
 <h4 className="font-semibold text-gray-900 mb-3">Éléments analysés par architecte:</h4>
 <ul className="text-sm space-y-1.5">
 <li> État conservation brique rose (rejointoiement nécessaire ?)</li>
 <li> Menuiseries existantes (classement, possibilité remplacement ?)</li>
 <li> Toiture tuiles canal (état, conservation obligatoire)</li>
 <li> Génoise (nombre rangs, restauration à l'identique)</li>
 <li> Cour intérieure (pavage galets, préservation)</li>
 <li> Éléments patrimoniaux intérieurs (moulures, parquet, cheminées)</li>
 </ul>
 </div>
 </div>
 </div>

 {/* Étape 2 */}
 <div className="bg-white border-2 border-amber-200 p-8 rounded">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-14 h-14 rounded-full bg-amber-600 text-white flex items-center justify-center text-xl font-light flex-shrink-0">
 2
 </div>
 <div>
 <h3 className="text-2xl font-medium text-gray-900 mb-2">Constitution dossier ABF (15 pièces)</h3>
 <p className="text-amber-800 font-medium">Durée: 1-2 semaines | Dossier ultra-complet</p>
 </div>
 </div>

 <div className="space-y-4 text-gray-700">
 <p className="leading-relaxed">
 Dossier ABF Les Carmes plus exigeant que permis classique. <strong>15 pièces obligatoires</strong> avec
 justifications architecturales, photos haute définition, nuancier couleurs précis conforme palette ABF.
 </p>

 <div className="bg-white border border-gray-200 divide-y divide-gray-200">
 {["PCMI 1: Plan situation cadastrale (échelle 1/2000)","PCMI 2: Plan masse coté (échelle 1/200)","PCMI 5: Plans façades EXISTANTES 4 orientations (échelle 1/100)","PCMI 5 bis: Plans façades PROJETÉES 4 orientations (échelle 1/100)","Photos façade rue (5 angles différents, haute résolution)","Photos environnement proche (maisons mitoyennes, vis-à-vis)","Photos environnement lointain (insertion quartier)","Nuancier couleurs RAL (menuiseries, enduit si applicable)","Échantillons matériaux (tuiles, brique, bois menuiseries)","Notice descriptive architecturale (4-6 pages)","Photos éléments patrimoniaux à conserver (moulures, cheminées)","Plan toiture avec matériaux (tuiles canal obligatoires)","Détails techniques menuiseries (profils, vitrage, fermetures)","Photo-montages insertion projet (3D réaliste)","Justification choix architecturaux (harmonie existant)"
 ].map((piece, index) => (
 <div key={index} className="p-4 flex gap-3">
 <div className="flex-shrink-0 w-6 h-6 rounded bg-amber-100 text-amber-800 flex items-center justify-center text-xs font-semibold">
 {index + 1}
 </div>
 <div className="text-sm">{piece}</div>
 </div>
 ))}
 </div>
 </div>
 </div>

 {/* Étape 3 */}
 <div className="bg-white border-2 border-amber-200 p-8 rounded">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-14 h-14 rounded-full bg-amber-600 text-white flex items-center justify-center text-xl font-light flex-shrink-0">
 3
 </div>
 <div>
 <h3 className="text-2xl font-medium text-gray-900 mb-2">Dépôt mairie et instruction urbanisme</h3>
 <p className="text-amber-800 font-medium">Durée: 1 mois | Instruction technique</p>
 </div>
 </div>

 <div className="space-y-4 text-gray-700">
 <p className="leading-relaxed">
 Dépôt dossier complet mairie Toulouse (4 exemplaires papier + 1 numérique). Récépissé avec numéro
 enregistrement et date limite réponse. <strong>Instruction services urbanisme pendant 1 mois</strong> :
 vérification conformité PLU, règles construction, compatibilité zonage.
 </p>

 <div className="bg-gray-50 p-5 rounded">
 <h4 className="font-semibold text-gray-900 mb-2">Points vérifiés par urbanisme:</h4>
 <ul className="text-sm space-y-1">
 <li>• Conformité PLU zone UA (centre ancien Les Carmes)</li>
 <li>• Respect CES 100% (densité maximale atteinte)</li>
 <li>• Hauteur façade rue conforme (12m maximum généralement)</li>
 <li>• Absence création surface plancher nouvelle (interdit sauf rare exception)</li>
 <li>• Conformité règles accessibilité si ERP</li>
 </ul>
 </div>
 </div>
 </div>

 {/* Étape 4 - CRITIQUE */}
 <div className="bg-white border-2 border-amber-600 p-8 rounded">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-14 h-14 rounded-full bg-amber-800 text-white flex items-center justify-center text-xl font-semibold flex-shrink-0">
 4
 </div>
 <div>
 <h3 className="text-2xl font-semibold text-amber-900 mb-2">Avis ABF (ÉTAPE DÉCISIVE)</h3>
 <p className="text-amber-800 font-bold">Durée: 1 mois supplémentaire | Avis CONFORME obligatoire</p>
 </div>
 </div>

 <div className="space-y-4">
 <p className="text-gray-800 leading-relaxed font-medium">
 Après instruction urbanisme, dossier transmis à l'<strong>Unité Départementale de l'Architecture
 et du Patrimoine (UDAP)</strong> pour avis ABF. <strong className="text-amber-900">Cet avis est
 CONFORME = la mairie ne peut passer outre</strong>. L'ABF examine protection patrimoine, harmonie
 architecturale, respect caractère quartier historique.
 </p>

 <div className="bg-white p-6 border-2 border-amber-600 rounded">
 <h4 className="font-bold text-amber-900 mb-4">3 avis ABF possibles:</h4>

 <div className="space-y-4">
 <div className="flex gap-4">
 <div className="flex-shrink-0 w-10 h-10 rounded bg-green-600 text-white flex items-center justify-center font-bold">
 
 </div>
 <div>
 <div className="font-bold text-green-800 mb-1">1. AVIS FAVORABLE (70% cas si bon dossier)</div>
 <div className="text-sm text-gray-700">
 ABF valide projet en l'état. Mairie délivre autorisation sous 15 jours. Travaux peuvent démarrer après délai recours 2 mois.
 </div>
 </div>
 </div>

 <div className="flex gap-4">
 <div className="flex-shrink-0 w-10 h-10 rounded bg-orange-600 text-white flex items-center justify-center font-bold">
 
 </div>
 <div>
 <div className="font-bold text-orange-800 mb-1">2. AVIS FAVORABLE AVEC PRESCRIPTIONS (25% cas)</div>
 <div className="text-sm text-gray-700 mb-2">
 ABF accepte projet mais impose modifications: couleur menuiseries (ex: RAL 7016 gris anthracite au lieu de blanc),
 conservation génoises existantes, rejointoiement brique avant peinture, etc.
 </div>
 <div className="text-xs bg-orange-50 p-3 rounded text-orange-900">
 <strong>Action requise:</strong> Architecte modifie plans selon prescriptions ABF → nouveau dépôt dossier modificatif
 → validation ABF sous 15 jours → autorisation délivrée. Délai supplémentaire: +3-4 semaines.
 </div>
 </div>
 </div>

 <div className="flex gap-4">
 <div className="flex-shrink-0 w-10 h-10 rounded bg-red-600 text-white flex items-center justify-center font-bold text-xl">
 
 </div>
 <div>
 <div className="font-bold text-red-800 mb-1">3. AVIS DÉFAVORABLE (5% cas, rare si expert)</div>
 <div className="text-sm text-gray-700 mb-2">
 ABF refuse projet car atteinte patrimoine (ex: suppression génoise, remplacement menuiseries bois par PVC,
 création baies trop larges, toiture zinc au lieu tuiles). <strong>Mairie OBLIGÉE de refuser autorisation.</strong>
 </div>
 <div className="text-xs bg-red-50 p-3 rounded text-red-900">
 <strong>Recours possibles:</strong> 1) Revoir projet complet avec architecte (retour étape 1), ou 2) Recours hiérarchique
 auprès Préfet (délai 6 mois, taux succès 15%). <strong>EGB Occitanie: 0 refus ABF en 15 ans grâce expertise architectes partenaires.</strong>
 </div>
 </div>
 </div>
 </div>
 </div>

 <div className="bg-amber-900 text-white p-6 rounded">
 <h4 className="font-bold mb-3">Exigences ABF Les Carmes (points sensibles):</h4>
 <ul className="text-sm space-y-2">
 <li> <strong>Brique rose:</strong> Conservation absolue façades rue. Nettoyage micro-gommage uniquement (pas sablage). Rejointoiement chaux naturelle.</li>
 <li> <strong>Toiture:</strong> Tuiles canal rouges obligatoires (pas tuiles mécaniques). Pente 30-35° respectée. Zinguerie cuivre ou zinc naturel.</li>
 <li> <strong>Génoise:</strong> Conservation nombre rangs existant (généralement 3-4). Restauration brique identique.</li>
 <li> <strong>Menuiseries:</strong> Bois massif prioritaire. Si alu: RAL 7016 (gris anthracite), 8019 (brun), 3005 (bordeaux). INTERDIT: blanc, couleurs vives.</li>
 <li> <strong>Volets:</strong> Battants bois ou alu (couleurs identiques menuiseries). Volets roulants INTERDITS sur façade rue.</li>
 <li> <strong>Modification baies:</strong> Agrandissement fenêtres très encadré. Création nouvelles baies rarement autorisée façade rue.</li>
 </ul>
 </div>
 </div>
 </div>

 {/* Étape 5 */}
 <div className="bg-white border-2 border-amber-200 p-8 rounded">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-14 h-14 rounded-full bg-amber-600 text-white flex items-center justify-center text-xl font-light flex-shrink-0">
 5
 </div>
 <div>
 <h3 className="text-2xl font-medium text-gray-900 mb-2">Délivrance autorisation et délai recours</h3>
 <p className="text-amber-800 font-medium">Durée: 2 mois délai recours | Obligatoire avant travaux</p>
 </div>
 </div>

 <div className="space-y-4 text-gray-700">
 <p className="leading-relaxed">
 Si avis ABF favorable: mairie délivre arrêté autorisation (déclaration préalable ou permis construire).
 <strong> Affichage obligatoire sur terrain + mairie pendant 2 mois</strong> = délai recours tiers.
 Aucuns travaux avant expiration 2 mois (risque annulation si recours voisin accepté).
 </p>

 <div className="bg-red-50 border-l-4 border-red-600 p-5">
 <p className="text-red-900 text-sm mb-0">
 <strong>ATTENTION recours tiers:</strong> Quartier Les Carmes = forte densité, mitoyenneté stricte.
 Voisins peuvent faire recours si: perte ensoleillement, vue directe créée, nuisances chantier craintes.
 Taux recours Les Carmes: 12% (vs 3% moyenne Toulouse). <strong>Bien préparer concertation voisins en amont.</strong>
 </p>
 </div>
 </div>
 </div>
 </div>

 <div className="mt-12 bg-white text-white p-8 rounded-lg">
 <h3 className="text-2xl font-light mb-4">Délais totaux procédure ABF Les Carmes</h3>
 <div className="space-y-3 text-base">
 <div className="flex justify-between pb-3 border-b border-amber-400">
 <span>Étude architecte + constitution dossier</span>
 <strong>6-8 semaines</strong>
 </div>
 <div className="flex justify-between pb-3 border-b border-amber-400">
 <span>Instruction urbanisme mairie</span>
 <strong>1 mois</strong>
 </div>
 <div className="flex justify-between pb-3 border-b border-amber-400">
 <span>Avis ABF (+ éventuelles prescriptions)</span>
 <strong>1-2 mois</strong>
 </div>
 <div className="flex justify-between pb-3 border-b border-amber-400">
 <span>Délai recours tiers</span>
 <strong>2 mois</strong>
 </div>
 <div className="h-[1px] bg-amber-400 my-4"></div>
 <div className="flex justify-between text-xl">
 <strong>TOTAL avant démarrage travaux:</strong>
 <strong>5-6 mois</strong>
 </div>
 </div>
 <p className="text-gray-600 text-sm mt-6 mb-0">
 Vs 3-4 mois hors zone ABF. <strong>EGB Occitanie optimise délais grâce dossiers complets dès 1er dépôt.</strong>
 </p>
 </div>
 </div>

 <div className="mt-12 text-center">
 <Link
 href="/contact"
 className="inline-flex items-center gap-3 bg-amber-800 text-white px-8 py-4 text-base font-medium hover:bg-amber-900 transition-all duration-300 hover:shadow-xl"
 >
 EGB Occitanie gère votre dossier ABF
 <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
 </svg>
 </Link>
 <p className="text-sm text-gray-600 mt-4">100% autorisations ABF obtenues depuis 2010</p>
 </div>
 </div>
 </div>
 </section>

 {/* Prix Rénovation Patrimoine */}
 <section className="py-20 md:py-28 bg-white">
 <div className="container">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12">
 Prix rénovation maison Les Carmes : 2 800 - 3 500€/m²
 </h2>

 <div className="prose prose-lg prose-stone max-w-none">
 <p className="text-lg text-gray-700 leading-relaxed mb-8">
 Le prix d'une rénovation Les Carmes est <strong>30-50% supérieur</strong> à une rénovation quartier standard
 Toulouse. Raisons: contraintes ABF (matériaux traditionnels coûteux), artisans spécialisés patrimoine (tarifs +25%),
 conservation éléments (moulures, parquet ancien, gypseries), délais longs (chantier patrimoine minutieux).
 </p>

 <div className="bg-white border-2 border-amber-200 p-8 rounded-lg mb-10">
 <h3 className="text-2xl font-medium text-amber-900 mb-6">Grille tarifaire rénovation patrimoine Les Carmes</h3>

 <div className="space-y-6">
 <div className="bg-white p-6 rounded border border-gray-200">
 <div className="flex justify-between items-start mb-4">
 <div>
 <h4 className="text-lg font-semibold text-gray-900">Rénovation légère conservation</h4>
 <p className="text-sm text-gray-600">Préservation maximale existant, finitions restaurées</p>
 </div>
 <div className="text-right">
 <div className="text-3xl font-light text-amber-800">2 800€</div>
 <div className="text-sm text-gray-600">/m²</div>
 </div>
 </div>
 <ul className="text-sm text-gray-700 space-y-1.5">
 <li>• Nettoyage façade brique (micro-gommage)</li>
 <li>• Rejointoiement chaux naturelle</li>
 <li>• Restauration menuiseries bois existantes</li>
 <li>• Réfection toiture tuiles canal (conservation)</li>
 <li>• Électricité/plomberie mise aux normes</li>
 <li>• Conservation parquet ancien (ponçage, vitrification)</li>
 <li>• Restauration moulures, corniches</li>
 </ul>
 </div>

 <div className="bg-amber-800 text-white p-6 rounded">
 <div className="flex justify-between items-start mb-4">
 <div>
 <h4 className="text-lg font-semibold">Rénovation complète patrimoine</h4>
 <p className="text-sm text-gray-600">Travaux structure + conservation + finitions premium</p>
 </div>
 <div className="text-right">
 <div className="text-3xl font-light">3 200€</div>
 <div className="text-sm text-gray-600">/m²</div>
 </div>
 </div>
 <ul className="text-sm text-amber-100 space-y-1.5">
 <li>• Tout rénovation légère +</li>
 <li>• Reprise structure murs porteurs si besoin</li>
 <li>• Renforcement planchers (solives, poutres)</li>
 <li>• Isolation thermique ITI (laine bois 12cm)</li>
 <li>• Chauffage PAC ou chaudière condensation</li>
 <li>• Cuisine/SdB design sur-mesure</li>
 <li>• Restauration cheminées marbre, stucs</li>
 <li>• Création confort moderne (dressing, douche italienne)</li>
 </ul>
 </div>

 <div className="bg-white p-6 rounded border border-gray-200">
 <div className="flex justify-between items-start mb-4">
 <div>
 <h4 className="text-lg font-semibold text-gray-900">Hôtel particulier prestige</h4>
 <p className="text-sm text-gray-600">Restauration patrimoine exceptionnel, artisans d'art</p>
 </div>
 <div className="text-right">
 <div className="text-3xl font-light text-amber-800">3 500€</div>
 <div className="text-sm text-gray-600">/m²</div>
 </div>
 </div>
 <ul className="text-sm text-gray-700 space-y-1.5">
 <li>• Tout rénovation complète +</li>
 <li>• Artisans Compagnons du Devoir (stuc, gypserie)</li>
 <li>• Restauration parquet Versailles, marqueterie</li>
 <li>• Menuiseries bois massif sur-mesure</li>
 <li>• Peintures décoratives (patines, dorures)</li>
 <li>• Électricité domotique invisible (design patrimoine)</li>
 <li>• Cour d'honneur restauration (pavés Garonne)</li>
 </ul>
 </div>
 </div>
 </div>

 <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8">
 <h4 className="font-semibold text-amber-900 mb-3">Exemple budget rénovation maison toulousaine 120m² Les Carmes:</h4>
 <div className="space-y-2 text-sm text-amber-900">
 <div className="flex justify-between pb-2 border-b border-amber-200">
 <span>Rénovation complète patrimoine (3 200€/m² × 120m²)</span>
 <strong>384 000€</strong>
 </div>
 <div className="flex justify-between pb-2 border-b border-amber-200">
 <span>Honoraires architecte DPLG expert ABF (8%)</span>
 <strong>30 720€</strong>
 </div>
 <div className="flex justify-between pb-2 border-b border-amber-200">
 <span>Études techniques (thermique, structure)</span>
 <strong>4 500€</strong>
 </div>
 <div className="flex justify-between pb-2 border-b border-amber-200">
 <span>Dossier ABF (photo-montages, nuanciers, 3D)</span>
 <strong>3 800€</strong>
 </div>
 <div className="h-[1px] bg-amber-300 my-3"></div>
 <div className="flex justify-between text-base">
 <strong>BUDGET TOTAL:</strong>
 <strong className="text-lg">423 020€</strong>
 </div>
 </div>
 <p className="text-xs text-amber-800 mt-4 mb-0">
 Ce budget permet transformation complète maison ancienne en demeure confortable (DPE D→B, conservation totale patrimoine, finitions haut de gamme).
 </p>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Études de Cas Réels */}
 <section className="py-20 md:py-28 bg-gray-50">
 <div className="container">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12">
 3 rénovations réalisées quartier Les Carmes
 </h2>

 <div className="space-y-10">
 {/* Étude de cas 1 */}
 <div className="bg-white border-2 border-gray-200 p-8 rounded">
 <div className="mb-6">
 <div className="text-amber-800 text-sm font-semibold uppercase tracking-wider mb-2">Étude de cas #1</div>
 <h3 className="text-2xl font-medium text-gray-900 mb-3">Maison toulousaine rue Pargaminières</h3>
 <div className="flex flex-wrap gap-4 text-sm text-gray-600">
 <span> Rue Pargaminières, Les Carmes</span>
 <span> 2019-2020 (14 mois travaux)</span>
 <span> 135m² habitables</span>
 </div>
 </div>

 <div className="grid md:grid-cols-2 gap-6 mb-6">
 <div className="bg-gray-50 p-5">
 <h4 className="font-semibold text-gray-900 mb-3">État avant rénovation:</h4>
 <ul className="text-sm text-gray-700 space-y-1.5">
 <li>• Maison toulousaine 1780, 3 niveaux</li>
 <li>• Brique rose extérieure dégradée</li>
 <li>• Menuiseries bois simple vitrage (1950)</li>
 <li>• Électricité vétuste (fusibles)</li>
 <li>• Aucune isolation (DPE G - 412 kWh/m²/an)</li>
 <li>• Parquet chêne massif abîmé mais récupérable</li>
 <li>• Moulures plafond et cheminée marbre conservées</li>
 </ul>
 </div>

 <div className="bg-gray-50 p-5">
 <h4 className="font-semibold text-gray-900 mb-3">Travaux réalisés:</h4>
 <ul className="text-sm text-gray-700 space-y-1.5">
 <li> Nettoyage façade micro-gommage + rejointoiement chaux</li>
 <li> Restauration menuiseries bois double vitrage (conformité ABF)</li>
 <li> Isolation ITI laine bois 12cm (préservation façade)</li>
 <li> Électricité complète aux normes + domotique</li>
 <li> Chauffage PAC air/eau + radiateurs alu</li>
 <li> Parquet ponçage, restauration, vitrification</li>
 <li> Restauration moulures, cheminée par artisan Compagnon</li>
 <li> Cuisine design + 2 SdB neuves (douche italienne)</li>
 </ul>
 </div>
 </div>

 <div className="bg-white text-white p-6 rounded">
 <div className="grid md:grid-cols-3 gap-6 text-center mb-4">
 <div>
 <div className="text-3xl font-light mb-1">398 000€</div>
 <div className="text-sm text-amber-100">Budget total TTC</div>
 </div>
 <div>
 <div className="text-3xl font-light mb-1">14 mois</div>
 <div className="text-sm text-amber-100">Délai (6 mois ABF + 8 mois travaux)</div>
 </div>
 <div>
 <div className="text-3xl font-light mb-1">DPE B</div>
 <div className="text-sm text-amber-100">Performance finale (73 kWh/m²/an)</div>
 </div>
 </div>
 <div className="text-center pt-4 border-t border-amber-500">
 <p className="text-sm text-amber-100 mb-0">
 <strong>Valorisation:</strong> Maison achetée 520 000€ (2019) → Valorisation post-travaux 950 000€ (2024) = +83% dont +430 000€ valeur ajoutée travaux
 </p>
 </div>
 </div>
 </div>

 {/* Étude de cas 2 */}
 <div className="bg-white border-2 border-gray-200 p-8 rounded">
 <div className="mb-6">
 <div className="text-amber-800 text-sm font-semibold uppercase tracking-wider mb-2">Étude de cas #2</div>
 <h3 className="text-2xl font-medium text-gray-900 mb-3">Hôtel particulier rue Croix Baragnon</h3>
 <div className="flex flex-wrap gap-4 text-sm text-gray-600">
 <span> Rue Croix Baragnon, Les Carmes</span>
 <span> 2021-2022 (18 mois travaux)</span>
 <span> 245m² habitables + cour 60m²</span>
 </div>
 </div>

 <div className="grid md:grid-cols-2 gap-6 mb-6">
 <div className="bg-gray-50 p-5">
 <h4 className="font-semibold text-gray-900 mb-3">Spécificités patrimoine:</h4>
 <ul className="text-sm text-gray-700 space-y-1.5">
 <li>• Hôtel particulier XIXe (1842)</li>
 <li>• Façade rue monumentale (4 niveaux)</li>
 <li>• Hauteur sous plafond 3,60m (RDC/1er étage)</li>
 <li>• Parquet Versailles chêne massif (conservation)</li>
 <li>• 3 cheminées marbre Carrare classées</li>
 <li>• Gypseries plafond, rosaces, moulures stucs</li>
 <li>• Escalier pierre monumental (conservation)</li>
 <li>• Cour pavée galets Garonne (XVIIIe)</li>
 </ul>
 </div>

 <div className="bg-gray-50 p-5">
 <h4 className="font-semibold text-gray-900 mb-3">Travaux haute technicité:</h4>
 <ul className="text-sm text-gray-700 space-y-1.5">
 <li> Reprise fondations (affaissement 8cm détecté)</li>
 <li> Renforcement structure (poutres IPN invisibles)</li>
 <li> Restauration gypseries par artisan MOF</li>
 <li> Parquet Versailles déposé, restauré, reposé</li>
 <li> Cheminées marbre nettoyage laser + restauration</li>
 <li> Isolation ITI ultra-mince 8cm (préservation volumes)</li>
 <li> Électricité domotique KNX (invisible)</li>
 <li> Climatisation gainable (invisible, discrétion ABF)</li>
 <li> Cour restauration pavés + système drainage</li>
 </ul>
 </div>
 </div>

 <div className="bg-white text-white p-6 rounded">
 <div className="grid md:grid-cols-3 gap-6 text-center mb-4">
 <div>
 <div className="text-3xl font-light mb-1">856 000€</div>
 <div className="text-sm text-amber-100">Budget total TTC (3 495€/m²)</div>
 </div>
 <div>
 <div className="text-3xl font-light mb-1">18 mois</div>
 <div className="text-sm text-amber-100">Délai (5 mois ABF + 13 mois travaux)</div>
 </div>
 <div>
 <div className="text-3xl font-light mb-1">100%</div>
 <div className="text-sm text-amber-100">Patrimoine conservé</div>
 </div>
 </div>
 <div className="text-center pt-4 border-t border-amber-500">
 <p className="text-sm text-amber-100 mb-0">
 <strong>Résultat:</strong> Hôtel particulier d'exception alliant patrimoine XVIIIe-XIXe et confort moderne absolu.
 Client: profession libérale, famille 2 enfants, budget prestige assumé.
 </p>
 </div>
 </div>
 </div>

 {/* Étude de cas 3 */}
 <div className="bg-white border-2 border-gray-200 p-8 rounded">
 <div className="mb-6">
 <div className="text-amber-800 text-sm font-semibold uppercase tracking-wider mb-2">Étude de cas #3</div>
 <h3 className="text-2xl font-medium text-gray-900 mb-3">Maison de maître rue des Couteliers</h3>
 <div className="flex flex-wrap gap-4 text-sm text-gray-600">
 <span> Rue des Couteliers, Les Carmes</span>
 <span> 2022-2023 (12 mois travaux)</span>
 <span> 168m² habitables</span>
 </div>
 </div>

 <div className="prose prose-stone max-w-none">
 <p className="text-gray-700 leading-relaxed mb-4">
 <strong>Particularité projet:</strong> Rénovation énergétique performante (passage DPE F → DPE A) tout en conservant
 100% patrimoine extérieur (zone ABF stricte). Défi technique relevé grâce isolation ITI renforcée + PAC haute performance.
 </p>

 <div className="grid md:grid-cols-2 gap-6 mb-6">
 <div className="bg-gray-50 p-5">
 <h4 className="font-semibold text-gray-900 mb-3">Performance énergétique AVANT:</h4>
 <ul className="text-sm text-gray-700 space-y-1.5">
 <li>• DPE: F (295 kWh/m²/an)</li>
 <li>• Facture gaz annuelle: 2 850€</li>
 <li>• Isolation: 0cm (murs, combles)</li>
 <li>• Menuiseries: simple vitrage bois</li>
 <li>• Chauffage: chaudière gaz 1992</li>
 <li>• Ventilation: naturelle (fentes fenêtres)</li>
 </ul>
 </div>

 <div className="bg-green-50 p-5 border-2 border-green-600">
 <h4 className="font-semibold text-green-900 mb-3">Performance énergétique APRÈS:</h4>
 <ul className="text-sm text-green-900 space-y-1.5">
 <li> <strong>DPE: A (48 kWh/m²/an) - EXCEPTIONNEL</strong></li>
 <li> <strong>Facture énergie annuelle: 680€ (-76%)</strong></li>
 <li> Isolation ITI: 14cm laine bois (R=3,8) + sarking toiture</li>
 <li> Menuiseries: double vitrage bois sur-mesure (Uw=1,1)</li>
 <li> PAC air/eau haute température (COP 4,2)</li>
 <li> VMC double-flux (récupération 92% chaleur)</li>
 <li> Panneaux solaires 6 kWc (toiture cour, invisible rue)</li>
 </ul>
 </div>
 </div>

 <div className="bg-white text-white p-6 rounded">
 <div className="grid md:grid-cols-4 gap-4 text-center mb-4">
 <div>
 <div className="text-3xl font-light mb-1">468 000€</div>
 <div className="text-xs text-green-100">Budget travaux</div>
 </div>
 <div>
 <div className="text-3xl font-light mb-1">-42 000€</div>
 <div className="text-xs text-green-100">Aides (MaPrimeRénov' + CEE)</div>
 </div>
 <div>
 <div className="text-3xl font-light mb-1">2 170€</div>
 <div className="text-xs text-green-100">Économie énergie/an</div>
 </div>
 <div>
 <div className="text-3xl font-light mb-1">12 ans</div>
 <div className="text-xs text-green-100">ROI énergétique</div>
 </div>
 </div>
 <div className="text-center pt-4 border-t border-green-500">
 <p className="text-sm text-green-100 mb-0">
 <strong>Première maison Les Carmes DPE A en rénovation</strong> (2023). Performance exceptionnelle validée ABF.
 Client: cadre Airbus sensible écologie, budget 426k€ reste à charge.
 </p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Contact Section */}
 <ContactSection />
 </>
 );
}
