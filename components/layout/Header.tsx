'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site';
import './Header.css';

const ShieldIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M14 2L4 6.5V13C4 18.55 8.33 23.74 14 25C19.67 23.74 24 18.55 24 13V6.5L14 2Z" fill="currentColor" fillOpacity="0.15"/>
    <path d="M14 2L4 6.5V13C4 18.55 8.33 23.74 14 25C19.67 23.74 24 18.55 24 13V6.5L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M10 13.5L12.5 16L18 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);



export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  return (
    <>
      <header className={`header ${isScrolled ? 'header--scrolled' : ''}`} role="banner">
        <div className="container header__inner">
          {/* Logo */}
          <Link href="/" className="header__logo" aria-label="SafeHaven Pest Control — Home">
            <span className="header__logo-icon">
              <ShieldIcon />
            </span>
            <span className="header__logo-text">
              SafeHaven<span>Pest</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="header__nav" aria-label="Main navigation">
            {siteConfig.nav.map((item) => (
              <div key={item.label} className="header__nav-item">
                <Link
                  href={item.href}
                  className={`header__nav-link ${pathname === item.href ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="header__actions">
            <a href={`tel:${siteConfig.phoneTel}`} className="header__phone" aria-label={`Call us: ${siteConfig.phone}`}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M14.5 11.5C14.5 11.77 14.44 12.04 14.31 12.3C14.18 12.56 14.01 12.8 13.79 13.03C13.42 13.43 13.01 13.62 12.57 13.62C12.36 13.62 12.13 13.57 11.89 13.46C11.65 13.35 11.41 13.21 11.18 13.03C10.94 12.84 10.71 12.63 10.5 12.41C9.83 11.72 9.23 10.98 8.69 10.19C8.16 9.4 7.71 8.61 7.37 7.83C7.03 7.05 6.86 6.31 6.86 5.6C6.86 5.4 6.9 5.19 6.98 4.99C7.06 4.79 7.19 4.6 7.37 4.42C7.59 4.19 7.83 4.08 8.08 4.08C8.17 4.08 8.27 4.1 8.35 4.14C8.44 4.18 8.52 4.24 8.58 4.33L9.69 5.9C9.75 5.98 9.79 6.06 9.82 6.13C9.85 6.2 9.87 6.27 9.87 6.33C9.87 6.41 9.84 6.49 9.78 6.57C9.72 6.65 9.64 6.73 9.54 6.81L9.21 7.16C9.16 7.21 9.14 7.27 9.14 7.34C9.14 7.37 9.15 7.4 9.16 7.44C9.18 7.48 9.19 7.51 9.2 7.54C9.26 7.65 9.37 7.79 9.53 7.96C9.7 8.13 9.87 8.31 10.06 8.48C10.26 8.65 10.45 8.82 10.63 8.98C10.8 9.14 10.93 9.25 11.05 9.31C11.07 9.32 11.1 9.33 11.14 9.34C11.18 9.35 11.22 9.36 11.26 9.36C11.34 9.36 11.4 9.33 11.45 9.28L11.78 8.94C11.88 8.84 11.97 8.76 12.05 8.71C12.13 8.65 12.2 8.62 12.28 8.62C12.34 8.62 12.41 8.64 12.48 8.67C12.56 8.7 12.63 8.74 12.71 8.8L14.26 9.93C14.35 9.99 14.41 10.06 14.45 10.15C14.48 10.24 14.5 10.33 14.5 10.43V11.5Z" fill="currentColor"/>
              </svg>
              {siteConfig.phone}
            </a>
            <Link href="/contact" className="btn btn--primary btn--sm">
              Get Free Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`header__hamburger ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            suppressHydrationWarning
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div
        id="mobile-nav"
        className={`mobile-nav ${mobileOpen ? 'open' : ''}`}
        aria-hidden={!mobileOpen}
        role="dialog"
        aria-label="Mobile navigation"
      >
        <div className="mobile-nav__overlay" onClick={() => setMobileOpen(false)} />
        <div className="mobile-nav__panel">
          <div className="mobile-nav__header">
            <Link href="/" className="header__logo" onClick={() => setMobileOpen(false)}>
              <span className="header__logo-icon">
                <ShieldIcon />
              </span>
              <span className="header__logo-text">
                SafeHaven<span>Pest</span>
              </span>
            </Link>
            <button
              className="mobile-nav__close"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              suppressHydrationWarning
            >
              ✕
            </button>
          </div>

          <nav className="mobile-nav__links" aria-label="Mobile navigation">
            {siteConfig.nav.map((item) => (
              <div key={item.label} className="mobile-nav__item">
                <Link
                  href={item.href}
                  className={`mobile-nav__link ${pathname === item.href ? 'active' : ''}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>

          <div className="mobile-nav__ctas">
            <a href={`tel:${siteConfig.phoneTel}`} className="btn btn--dark w-full">
              📞 {siteConfig.phone}
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn--green w-full">
              💬 WhatsApp Us
            </a>
            <Link href="/contact" className="btn btn--primary w-full" onClick={() => setMobileOpen(false)}>
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
