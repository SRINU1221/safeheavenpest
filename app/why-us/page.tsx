import { Metadata } from 'next';
import { constructMetadata } from '@/lib/metadata';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import StatsSection from '@/components/sections/StatsSection';
import CTABanner from '@/components/sections/CTABanner';

export const metadata: Metadata = constructMetadata({
  title: 'Why Choose Us | SafeHaven Pest Control',
  description: 'Learn why home and business owners across Hyderabad trust SafeHaven Pest Control for safe, effective, and guaranteed pest management services.',
});

export default function WhyUsPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1 className="page-header__title">Why Choose SafeHaven Pest Control</h1>
          <p className="page-header__subtitle">
            Science-backed treatments, certified technicians, transparent pricing, and 100% satisfaction guarantee.
          </p>
        </div>
      </div>

      <WhyChooseUs />

      <section className="section bg-white">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Our Differentiators</span>
            <h2 className="section-title">
              What Sets Us <span>Apart</span>
            </h2>
            <p className="section-subtitle">
              We go beyond standard pest control to deliver long-term protection and complete peace of mind.
            </p>
          </div>

          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="card reveal" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🌱</div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem', color: 'var(--color-gray-800)' }}>
                Eco-Friendly & Safe Solutions
              </h3>
              <p style={{ color: 'var(--color-gray-600)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                We prioritize eco-responsible, odorless gel and targeted treatments that are completely safe for children, pets, elderly family members, and the environment.
              </p>
            </div>

            <div className="card reveal" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎓</div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem', color: 'var(--color-gray-800)' }}>
                Government-Certified Experts
              </h3>
              <p style={{ color: 'var(--color-gray-600)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                Our technician team undergoes continuous training in Entomology, Integrated Pest Management (IPM), and regulatory chemical safety procedures.
              </p>
            </div>

            <div className="card reveal" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⏱️</div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem', color: 'var(--color-gray-800)' }}>
                Prompt Same-Day Inspection
              </h3>
              <p style={{ color: 'var(--color-gray-600)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                Pest emergencies require fast action. We offer rapid dispatch and same-day property inspections throughout Hyderabad.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
}
