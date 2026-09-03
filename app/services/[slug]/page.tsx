import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { services } from '@/data/services';
import { siteConfig } from '@/config/site';
import { constructMetadata } from '@/lib/metadata';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/seo';
import CTABanner from '@/components/sections/CTABanner';
import QuoteForm from '@/components/forms/QuoteForm';
import './ServicePage.css';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  
  if (!service) {
    return { title: 'Service Not Found' };
  }

  return constructMetadata({
    title: `${service.name} in Hyderabad`,
    description: service.seoDescription,
    image: service.image,
  });
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Home', url: siteConfig.url },
    { name: 'Services', url: `${siteConfig.url}/services` },
    { name: service.name, url: `${siteConfig.url}/services/${service.slug}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateServiceSchema(service.name, service.seoDescription, `${siteConfig.url}/services/${service.slug}`),
            generateBreadcrumbSchema(breadcrumbs)
          ]),
        }}
      />

      {/* Service Hero */}
      <div className="service-hero">
        <div className="service-hero__bg">
          <Image
            src={service.image}
            alt={service.name}
            fill
            className="service-hero__bg-image"
            priority
            sizes="100vw"
          />
          <div className="service-hero__overlay" />
        </div>
        
        <div className="container service-hero__inner">
          <div className="service-hero__content reveal">
            <div className="service-hero__icon" aria-hidden="true">{service.icon}</div>
            <h1 className="service-hero__title">{service.name}</h1>
            <p className="service-hero__subtitle">{service.shortDescription}</p>
          </div>
        </div>
      </div>

      <div className="section bg-off-white">
        <div className="container service-layout">
          {/* Main Content */}
          <div className="service-main">
            <div className="card service-content-card">
              <h2 className="service-heading">About Our {service.name}</h2>
              <div 
                className="service-prose"
                dangerouslySetInnerHTML={{ __html: service.description.replace(/\n/g, '<br />') }}
              />

              <hr className="service-divider" />

              <div className="service-grid-2">
                <div>
                  <h3 className="service-heading-sm">Signs of Infestation</h3>
                  <ul className="service-list">
                    {service.signs.map((sign, idx) => (
                      <li key={idx}>
                        <span className="text-warning">⚠</span> {sign}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="service-heading-sm">Why Professional Help?</h3>
                  <ul className="service-list">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx}>
                        <span className="text-success">✓</span> {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <hr className="service-divider" />

              <h2 className="service-heading">Our Treatment Process</h2>
              <div className="service-process">
                {service.process.map((step, idx) => (
                  <div key={idx} className="service-process-step">
                    <div className="service-process-number">{idx + 1}</div>
                    <div className="service-process-content">
                      <h4>{step.step}</h4>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {service.faqs && service.faqs.length > 0 && (
                <>
                  <hr className="service-divider" />
                  <h2 className="service-heading">Frequently Asked Questions</h2>
                  <div className="service-faqs">
                    {service.faqs.map((faq, idx) => (
                      <div key={idx} className="service-faq-item">
                        <h4>{faq.question}</h4>
                        <p>{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="service-sidebar">
            <div className="service-sidebar-sticky">
              <QuoteForm defaultService={service.name} />
              
              <div className="card service-contact-card">
                <h3>Need Immediate Help?</h3>
                <p>Call our emergency pest control line now.</p>
                <a href={`tel:${siteConfig.phoneTel}`} className="btn btn--secondary w-full">
                  📞 {siteConfig.phone}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <CTABanner />
    </>
  );
}
