import { Metadata } from 'next';
import Image from 'next/image';
import { constructMetadata } from '@/lib/metadata';
import TrustBar from '@/components/sections/TrustBar';
import CTABanner from '@/components/sections/CTABanner';

export const metadata: Metadata = constructMetadata({
  title: 'About SafeHaven Pest Control | Hyderabad Pest Control',
  description: 'Learn about SafeHaven Pest Control, our experienced team, our commitment to safety, and why we are Hyderabad\'s trusted choice for professional pest control.',
});

export default function AboutPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1 className="page-header__title">About SafeHaven Pest Control</h1>
          <p className="page-header__subtitle">
            Dedicated to protecting homes and businesses across Hyderabad through professional, science-based pest management.
          </p>
        </div>
      </div>

      <TrustBar />

      <section className="section bg-white">
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div className="reveal-left">
              <h2 className="section-title">Our Story</h2>
              <div className="prose">
                <p>
                  SafeHaven Pest Control was founded with a single mission: to provide the highest quality, most reliable pest control services in Hyderabad. We recognized a need for a pest management company that prioritized customer education, transparent pricing, and scientifically proven treatment methods over generic spray-and-pray approaches.
                </p>
                <p>
                  Over the years, we have grown from a small local team into one of the region's most trusted pest control providers, serving thousands of residential and commercial properties.
                </p>
                <p>
                  Our success is built on the expertise of our technicians. Every member of our team undergoes rigorous training not only in pest biology and safe chemical application but also in customer service and property respect.
                </p>
              </div>
            </div>
            
            <div className="reveal-right">
              <div style={{ position: 'relative', height: '500px', borderRadius: 'var(--radius-2xl)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)' }}>
                <Image
                  src="/images/about-team.png"
                  alt="SafeHaven Pest Control professional team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-off-white">
        <div className="container">
          <div className="section-header text-center reveal">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">The principles that guide every inspection and treatment we perform.</p>
          </div>

          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {[
              {
                title: 'Safety First',
                icon: '🛡️',
                desc: 'We prioritize the health and safety of your family, pets, employees, and the environment in every treatment protocol we design.',
              },
              {
                title: 'Scientific Approach',
                icon: '🔬',
                desc: 'We rely on Integrated Pest Management (IPM) principles, using an understanding of pest biology to target the source of the problem.',
              },
              {
                title: 'Integrity',
                icon: '🤝',
                desc: 'We provide honest assessments. If you don\'t need a specific treatment, we won\'t recommend it. No hidden fees, no unnecessary upselling.',
              },
              {
                title: 'Continuous Excellence',
                icon: '📈',
                desc: 'The pest control industry evolves, and so do we. We continually invest in training and new technologies to provide the best possible service.',
              }
            ].map((value, idx) => (
              <div key={idx} className="card reveal" style={{ padding: '2rem', textAlign: 'center', transitionDelay: `${idx * 100}ms` }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{value.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-gray-800)' }}>
                  {value.title}
                </h3>
                <p style={{ color: 'var(--color-gray-600)', fontSize: '0.875rem', lineHeight: '1.6' }}>
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
