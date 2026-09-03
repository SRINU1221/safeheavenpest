import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/data/services';
import { constructMetadata } from '@/lib/metadata';
import CTABanner from '@/components/sections/CTABanner';
import TrustBar from '@/components/sections/TrustBar';

export const metadata: Metadata = constructMetadata({
  title: 'Our Pest Control Services',
  description: 'Comprehensive residential and commercial pest control services in Hyderabad. We handle termites, cockroaches, bed bugs, mosquitoes, and more.',
});

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1 className="page-header__title">Our Pest Control Services</h1>
          <p className="page-header__subtitle">
            Professional, targeted, and safe pest management solutions for every type of property.
          </p>
        </div>
      </div>

      <TrustBar />

      {/* Main Content */}
      <section className="section bg-off-white">
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
            {services.map((service) => (
              <article key={service.id} className="card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                <div style={{ position: 'relative', height: '220px' }}>
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div style={{ position: 'absolute', top: '1rem', right: '1rem', width: '40px', height: '40px', background: 'var(--color-white)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', boxShadow: 'var(--shadow-md)' }} aria-hidden="true">
                    {service.icon}
                  </div>
                </div>
                
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 'var(--weight-bold)', marginBottom: '0.75rem', color: 'var(--color-gray-800)' }}>
                    {service.name}
                  </h2>
                  <p style={{ color: 'var(--color-gray-600)', fontSize: '0.875rem', lineHeight: 'var(--leading-relaxed)', marginBottom: '1.5rem', flex: 1 }}>
                    {service.shortDescription}
                  </p>
                  
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {service.signs.slice(0, 3).map((sign, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.8125rem', color: 'var(--color-gray-700)' }}>
                        <span style={{ color: 'var(--color-accent)' }}>•</span> {sign}
                      </li>
                    ))}
                  </ul>

                  <Link href={`/services/${service.slug}`} className="btn btn--outline" style={{ width: '100%', justifyContent: 'center' }}>
                    View Details
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
