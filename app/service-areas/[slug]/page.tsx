import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locations } from '@/data/locations';
import { services } from '@/data/services';
import { siteConfig } from '@/config/site';
import { constructMetadata } from '@/lib/metadata';
import { generateBreadcrumbSchema } from '@/lib/seo';
import CTABanner from '@/components/sections/CTABanner';
import QuoteForm from '@/components/forms/QuoteForm';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);
  
  if (!location) {
    return { title: 'Location Not Found' };
  }

  return constructMetadata({
    title: `Pest Control in ${location.name} | SafeHaven Pest Control`,
    description: location.metaDescription,
  });
}

export async function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.slug,
  }));
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);

  if (!location) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Home', url: siteConfig.url },
    { name: 'Service Areas', url: `${siteConfig.url}/service-areas` },
    { name: location.name, url: `${siteConfig.url}/service-areas/${location.slug}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)),
        }}
      />

      <div className="page-header" style={{ background: 'var(--color-primary-dark)' }}>
        <div className="container">
          <div style={{ display: 'inline-block', padding: '0.25rem 0.75rem', background: 'var(--color-accent)', color: 'white', fontSize: '0.875rem', fontWeight: 'bold', borderRadius: 'var(--radius-full)', marginBottom: '1rem' }}>
            Local Service Area
          </div>
          <h1 className="page-header__title" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Professional Pest Control in {location.name}
          </h1>
          <p className="page-header__subtitle">
            Reliable, effective pest management services for homes and businesses in and around {location.name}.
          </p>
        </div>
      </div>

      <section className="section bg-off-white">
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: '1fr 380px', gap: '3rem', alignItems: 'start' }}>
            
            {/* Main Content */}
            <div>
              <div className="card" style={{ padding: '3rem', marginBottom: '2rem' }}>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 'bold', color: 'var(--color-gray-800)', marginBottom: '1.5rem' }}>
                  Trusted Pest Management in {location.name}
                </h2>
                <div style={{ color: 'var(--color-gray-600)', lineHeight: '1.8', fontSize: '1rem', marginBottom: '2rem' }}>
                  <p style={{ marginBottom: '1rem' }}>{location.description}</p>
                  <p>
                    We understand the unique pest challenges faced by residents and businesses in {location.name}. Whether you are near {location.landmarks[0]} or {location.landmarks[1]}, our rapid response team is just a call away. We utilize safe, approved treatment methods that ensure minimal disruption to your daily life or business operations.
                  </p>
                </div>

                <hr style={{ border: 'none', borderTop: '1px solid var(--color-gray-200)', margin: '2rem 0' }} />

                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-gray-800)', marginBottom: '1.5rem' }}>
                  Services We Offer in {location.name}
                </h3>
                
                <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  {services.map(service => (
                    <div key={service.id} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', background: 'var(--color-off-white)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-gray-100)' }}>
                      <div style={{ width: '32px', height: '32px', background: 'var(--color-white)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)' }}>
                        {service.icon}
                      </div>
                      <span style={{ fontWeight: '500', color: 'var(--color-gray-800)', fontSize: '0.9rem' }}>
                        {service.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside style={{ position: 'sticky', top: 'calc(var(--header-height) + 2rem)' }}>
              <QuoteForm />
              
              <div className="card" style={{ marginTop: '1.5rem', padding: '2rem', textAlign: 'center', background: 'var(--color-primary-ultra-light)', border: '1px solid var(--color-primary-light)' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 'bold', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
                  Local Emergency?
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-gray-600)', marginBottom: '1.25rem' }}>
                  Our {location.name} team can be there today.
                </p>
                <a href={`tel:${siteConfig.phoneTel}`} className="btn btn--secondary w-full">
                  📞 Call Now
                </a>
              </div>
            </aside>
            
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
