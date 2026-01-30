"use client";

import Link from "next/link";

export function RenovateurFooter() {
  return (
    <footer className="rnv-footer">
      <div className="rnv-container">
        <div className="rnv-footer-content">
          {/* Logo & Description */}
          <div className="footer-brand">
            <Link href="/renovateur-ia" className="rnv-logo">
              <div className="rnv-logo-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 20.0391 3 19.5304 3 19V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="rnv-logo-text">Renovateur</span>
              <span className="rnv-logo-badge">IA</span>
            </Link>
            <p className="footer-description">
              Planifiez votre renovation avec l&apos;intelligence artificielle.
              Estimation, planning et mise en relation artisans.
            </p>
          </div>

          {/* Links */}
          <div className="footer-links">
            <div className="footer-column">
              <h4>Produit</h4>
              <ul>
                <li><a href="#features">Fonctionnalites</a></li>
                <li><a href="#pricing">Tarifs</a></li>
                <li><a href="#how-it-works">Comment ca marche</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Entreprise</h4>
              <ul>
                <li><Link href="/">EGB Occitanie</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/avis">Temoignages</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <ul>
                <li><Link href="/mentions-legales">Mentions legales</Link></li>
                <li><Link href="/politique-confidentialite">Confidentialite</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="rnv-footer-bottom">
          <p>&copy; {new Date().getFullYear()} EGB Occitanie. Tous droits reserves.</p>
          <p className="powered-by">
            Propulse par <strong>EGB Occitanie</strong> - Construction &amp; Renovation Premium a Toulouse
          </p>
        </div>
      </div>
    </footer>
  );
}
