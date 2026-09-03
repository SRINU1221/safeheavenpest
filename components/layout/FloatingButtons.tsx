'use client';

import { siteConfig } from '@/config/site';
import './FloatingButtons.css';

export default function FloatingButtons() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  return (
    <>
      {/* WhatsApp Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn floating-btn--whatsapp"
        aria-label="Chat with us on WhatsApp"
        id="whatsapp-floating-btn"
      >
        <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 2.003C6.476 2.003 2 6.479 2 11.993c0 1.777.465 3.447 1.27 4.9L2.003 22l5.26-1.276c1.402.766 3.008 1.21 4.72 1.21 5.515 0 9.991-4.476 9.991-9.99C21.974 6.483 17.508 2.003 12 2.003zm0 18.267c-1.584 0-3.063-.43-4.33-1.18l-.31-.185-3.12.757.783-3.032-.203-.315A8.645 8.645 0 013.355 12c0-4.772 3.873-8.645 8.645-8.645 4.771 0 8.645 3.873 8.645 8.644 0 4.772-3.874 8.271-8.645 8.271z"/>
        </svg>
        <span className="floating-btn__label">WhatsApp</span>
      </a>

      {/* Call Floating Button */}
      <a
        href={`tel:${siteConfig.phoneTel}`}
        className="floating-btn floating-btn--call"
        aria-label={`Call us at ${siteConfig.phone}`}
        id="call-floating-btn"
      >
        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 013.6 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.56a16 16 0 006.29 6.29l1.94-1.94a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
        </svg>
        <span className="floating-btn__label">Call Now</span>
      </a>

      {/* Mobile Bottom Action Bar */}
      <div className="mobile-action-bar" aria-label="Quick contact actions">
        <a href={`tel:${siteConfig.phoneTel}`} className="mobile-action-bar__btn mobile-action-bar__btn--call" id="mobile-call-btn">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 013.6 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.56a16 16 0 006.29 6.29l1.94-1.94a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
          </svg>
          <span>Call</span>
        </a>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mobile-action-bar__btn mobile-action-bar__btn--whatsapp" id="mobile-whatsapp-btn">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 2C6.476 2 2 6.479 2 11.993c0 1.777.465 3.447 1.27 4.9L2 22l5.26-1.276c1.402.766 3.008 1.21 4.72 1.21 5.515 0 9.991-4.476 9.991-9.99C21.971 6.483 17.508 2 12 2z"/>
          </svg>
          <span>WhatsApp</span>
        </a>
        <a href="/contact" className="mobile-action-bar__btn mobile-action-bar__btn--quote" id="mobile-quote-btn">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
          </svg>
          <span>Get Quote</span>
        </a>
      </div>
    </>
  );
}
