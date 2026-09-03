import { Metadata } from 'next';
import { constructMetadata } from '@/lib/metadata';
import HowItWorks from '@/components/sections/HowItWorks';
import FAQSection from '@/components/sections/FAQSection';
import CTABanner from '@/components/sections/CTABanner';

export const metadata: Metadata = constructMetadata({
  title: 'Our Process | SafeHaven Pest Control',
  description: 'Discover how SafeHaven Pest Control inspects, treats, and protects your home or business through our proven 4-step pest management process.',
});

export default function ProcessPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1 className="page-header__title">Our 4-Step Pest Control Process</h1>
          <p className="page-header__subtitle">
            A systematic, evidence-based approach designed to eradicate active infestations and prevent future returns.
          </p>
        </div>
      </div>

      <HowItWorks />

      <section className="section bg-white">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Detailed Breakdown</span>
            <h2 className="section-title">
              What To Expect <span>During Service</span>
            </h2>
            <p className="section-subtitle">
              Transparency at every step so you know exactly how we safeguard your family and property.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            <div className="card reveal" style={{ padding: '2rem' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
                Step 1: Thorough Property Inspection & Species ID
              </h3>
              <p style={{ color: 'var(--color-gray-600)', lineHeight: '1.6' }}>
                Our licensed technician inspects critical entry points, nesting cavities, moisture sources, and hidden harborages. We identify the exact pest species to determine target vulnerabilities.
              </p>
            </div>

            <div className="card reveal" style={{ padding: '2rem' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
                Step 2: Custom Treatment Plan Formulation
              </h3>
              <p style={{ color: 'var(--color-gray-600)', lineHeight: '1.6' }}>
                We present a customized treatment protocol explaining the exact chemicals or bait formulations used, safety guidelines, and timeline expected for complete elimination.
              </p>
            </div>

            <div className="card reveal" style={{ padding: '2rem' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
                Step 3: Targeted Application & Exclusion
              </h3>
              <p style={{ color: 'var(--color-gray-600)', lineHeight: '1.6' }}>
                Using advanced micro-encapsulated sprays, gel baits, and physical barrier sealing, we treat infested zones directly without disturbing your daily routines.
              </p>
            </div>

            <div className="card reveal" style={{ padding: '2rem' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
                Step 4: Monitoring, Documentation & Guarantee
              </h3>
              <p style={{ color: 'var(--color-gray-600)', lineHeight: '1.6' }}>
                We provide a comprehensive service report with sanitation tips, seal structural access points, and offer scheduled re-inspections under our service warranty.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
      <CTABanner />
    </>
  );
}
