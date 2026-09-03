import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { constructMetadata } from '@/lib/metadata';
import QuoteForm from '@/components/forms/QuoteForm';

export const metadata: Metadata = constructMetadata({
  title: 'Contact Us | SafeHaven Pest Control',
  description: 'Get in touch with SafeHaven Pest Control for a free quote or inspection. Call us, chat on WhatsApp, or send us a message.',
});

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1 className="page-header__title">Contact Us</h1>
          <p className="page-header__subtitle">
            Need pest control? We are here to help. Reach out to us for a free quote, inspection, or any questions.
          </p>
        </div>
      </div>

      <section className="section bg-off-white">
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: '1fr 1.5fr', gap: '4rem' }}>
            {/* Contact Info */}
            <div className="reveal-left">
              <h2 className="section-title" style={{ marginBottom: '2rem' }}>Get In Touch</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div className="card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ width: '48px', height: '48px', background: 'var(--color-primary-ultra-light)', color: 'var(--color-primary)', borderRadius: 'var(--radius-full)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>
                    📞
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 'bold', fontSize: '1.125rem', marginBottom: '0.25rem' }}>Call Us Directly</h3>
                    <p style={{ color: 'var(--color-gray-500)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Available during business hours</p>
                    <a href={`tel:${siteConfig.phoneTel}`} style={{ color: 'var(--color-primary)', fontWeight: 'bold', fontSize: '1.25rem', textDecoration: 'none' }}>
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ width: '48px', height: '48px', background: 'rgba(37, 211, 102, 0.1)', color: '#25d366', borderRadius: 'var(--radius-full)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>
                    💬
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 'bold', fontSize: '1.125rem', marginBottom: '0.25rem' }}>WhatsApp Us</h3>
                    <p style={{ color: 'var(--color-gray-500)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Fastest way to get a response</p>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#25d366', fontWeight: 'bold', fontSize: '1.125rem', textDecoration: 'none' }}>
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ width: '48px', height: '48px', background: 'var(--color-primary-ultra-light)', color: 'var(--color-primary)', borderRadius: 'var(--radius-full)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>
                    📍
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 'bold', fontSize: '1.125rem', marginBottom: '0.25rem' }}>Our Location</h3>
                    <p style={{ color: 'var(--color-gray-600)', fontSize: '0.875rem', lineHeight: '1.5' }}>
                      {siteConfig.address}
                    </p>
                  </div>
                </div>

                <div className="card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ width: '48px', height: '48px', background: 'var(--color-primary-ultra-light)', color: 'var(--color-primary)', borderRadius: 'var(--radius-full)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>
                    🕐
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 'bold', fontSize: '1.125rem', marginBottom: '0.25rem' }}>Business Hours</h3>
                    <p style={{ color: 'var(--color-gray-600)', fontSize: '0.875rem', lineHeight: '1.5' }}>
                      {siteConfig.businessHours.weekdays}
                      <br />
                      {siteConfig.businessHours.sunday}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="reveal-right">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
