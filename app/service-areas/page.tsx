import { Metadata } from 'next';
import Link from 'next/link';
import { locations } from '@/data/locations';
import { constructMetadata } from '@/lib/metadata';
import CTABanner from '@/components/sections/CTABanner';

export const metadata: Metadata = constructMetadata({
  title: 'Service Areas | SafeHaven Pest Control',
  description: 'View all the areas in and around Hyderabad where SafeHaven Pest Control provides professional residential and commercial pest control services.',
});

export default function ServiceAreasPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1 className="page-header__title">Our Service Areas</h1>
          <p className="page-header__subtitle">
            Providing reliable, professional pest control services across Hyderabad.
          </p>
        </div>
      </div>

      <section className="section bg-white">
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
            {locations.map((location) => (
              <div key={location.id} className="card reveal" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-gray-800)', margin: '0 0 1rem' }}>
                  {location.name}
                </h2>
                <p style={{ color: 'var(--color-gray-600)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1 }}>
                  {location.description}
                </p>
                <div style={{ marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--color-gray-500)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Key Areas:</span>
                  <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', color: 'var(--color-gray-600)', fontSize: '0.85rem' }}>
                    {location.landmarks.map((landmark, idx) => (
                      <li key={idx} style={{ marginBottom: '0.25rem' }}>{landmark}</li>
                    ))}
                  </ul>
                </div>
                <Link href={`/service-areas/${location.slug}`} className="btn btn--outline" style={{ justifyContent: 'center' }}>
                  View Location Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
