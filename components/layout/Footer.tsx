import Link from 'next/link';
import { siteConfig } from '@/config/site';
import './Footer.css';

const ShieldIcon = () => (
  <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M14 2L4 6.5V13C4 18.55 8.33 23.74 14 25C19.67 23.74 24 18.55 24 13V6.5L14 2Z" fill="currentColor" fillOpacity="0.2"/>
    <path d="M14 2L4 6.5V13C4 18.55 8.33 23.74 14 25C19.67 23.74 24 18.55 24 13V6.5L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M10 13.5L12.5 16L18 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Service Areas', href: '/service-areas' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact Us', href: '/contact' },
];

const serviceLinks = [
  { label: 'Termite Control', href: '/services/termite-control' },
  { label: 'Cockroach Control', href: '/services/cockroach-control' },
  { label: 'Bed Bug Control', href: '/services/bed-bug-control' },
  { label: 'Mosquito Control', href: '/services/mosquito-control' },
  { label: 'Rodent Control', href: '/services/rodent-control' },
  { label: 'Ant Control', href: '/services/ant-control' },
  { label: 'Commercial Pest Control', href: '/services/commercial-pest-control' },
];

export default function Footer() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      {/* CTA Banner */}
      <div className="footer__cta">
        <div className="container footer__cta-inner">
          <div className="footer__cta-content">
            <h2 className="footer__cta-title">Ready to Protect Your Property?</h2>
            <p className="footer__cta-subtitle">
              Contact SafeHaven Pest Control today for a free inspection and customized pest management solution.
            </p>
          </div>
          <div className="footer__cta-actions">
            <Link href="/contact" className="btn btn--primary btn--lg">
              Get Free Inspection
            </Link>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn--green btn--lg">
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer__main">
        <div className="container footer__grid">
          {/* Column 1: Brand */}
          <div className="footer__col footer__col--brand">
            <Link href="/" className="footer__logo" aria-label="SafeHaven Pest Control Home">
              <span className="footer__logo-icon">
                <ShieldIcon />
              </span>
              <span className="footer__logo-text">
                SafeHaven<span>Pest</span>
              </span>
            </Link>
            <p className="footer__tagline">
              Professional pest-control solutions for homes and businesses. Reliable, effective, and safety-focused pest management across Hyderabad.
            </p>
            <div className="footer__social">
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer__social-link">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer__social-link">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="footer__social-link">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="footer__social-link">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.99 2.003C6.476 2.003 2 6.479 2 11.993c0 1.777.465 3.447 1.27 4.9L2.003 22l5.26-1.276c1.402.766 3.008 1.21 4.72 1.21 5.515 0 9.991-4.476 9.991-9.99C22.974 6.483 17.508 2.003 12 2.003h-.01zm0 18.267c-1.584 0-3.063-.43-4.33-1.18l-.31-.185-3.12.757.783-3.032-.203-.315C3.851 15.15 3.355 13.619 3.355 12 3.355 7.228 7.228 3.355 12 3.355c4.771 0 8.645 3.873 8.645 8.644 0 4.772-3.874 8.271-8.656 8.271z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer__col">
            <h3 className="footer__heading">Quick Links</h3>
            <ul className="footer__links">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer__link">
                    <span className="footer__link-arrow">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="footer__col">
            <h3 className="footer__heading">Our Services</h3>
            <ul className="footer__links">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer__link">
                    <span className="footer__link-arrow">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="footer__col">
            <h3 className="footer__heading">Contact Us</h3>
            <ul className="footer__contact">
              <li className="footer__contact-item">
                <span className="footer__contact-icon" aria-hidden="true">📞</span>
                <div>
                  <span className="footer__contact-label">Phone</span>
                  <a href={`tel:${siteConfig.phoneTel}`} className="footer__contact-value">
                    {siteConfig.phone}
                  </a>
                </div>
              </li>
              <li className="footer__contact-item">
                <span className="footer__contact-icon" aria-hidden="true">💬</span>
                <div>
                  <span className="footer__contact-label">WhatsApp</span>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="footer__contact-value">
                    Chat with us
                  </a>
                </div>
              </li>
              <li className="footer__contact-item">
                <span className="footer__contact-icon" aria-hidden="true">✉️</span>
                <div>
                  <span className="footer__contact-label">Email</span>
                  <a href={`mailto:${siteConfig.email}`} className="footer__contact-value">
                    {siteConfig.email}
                  </a>
                </div>
              </li>
              <li className="footer__contact-item">
                <span className="footer__contact-icon" aria-hidden="true">📍</span>
                <div>
                  <span className="footer__contact-label">Address</span>
                  <span className="footer__contact-value footer__contact-value--text">
                    {siteConfig.address}
                  </span>
                </div>
              </li>
              <li className="footer__contact-item">
                <span className="footer__contact-icon" aria-hidden="true">🕐</span>
                <div>
                  <span className="footer__contact-label">Hours</span>
                  <span className="footer__contact-value footer__contact-value--text">
                    {siteConfig.businessHours.weekdays}<br/>
                    {siteConfig.businessHours.sunday}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copyright">
            © {currentYear} SafeHaven Pest Control. All rights reserved.
          </p>
          <div className="footer__legal-links">
            <Link href="/privacy-policy" className="footer__legal-link">Privacy Policy</Link>
            <span aria-hidden="true">·</span>
            <Link href="/terms-and-conditions" className="footer__legal-link">Terms & Conditions</Link>
            <span aria-hidden="true">·</span>
            <Link href="/sitemap.xml" className="footer__legal-link">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
