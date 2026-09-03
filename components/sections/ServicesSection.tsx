import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/data/services';
import './ServicesSection.css';

export default function ServicesSection() {
  return (
    <section className="section services-section" id="services" aria-labelledby="services-title">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">What We Do</span>
          <h2 className="section-title" id="services-title">
            Complete Pest Control <span>Solutions</span>
          </h2>
          <p className="section-subtitle">
            From common household pests to complex commercial infestations, our trained professionals provide targeted solutions for a wide range of pest problems.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <article
              key={service.id}
              className={`service-card reveal delay-${Math.min((index % 4 + 1) * 100, 400)}`}
              aria-label={service.name}
            >
              <div className="service-card__image-wrap">
                <Image
                  src={service.image}
                  alt={`${service.name} — professional pest control`}
                  fill
                  className="service-card__image"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  loading="lazy"
                />
                <div className="service-card__image-overlay" />
                <div className="service-card__icon" aria-hidden="true">
                  {service.icon}
                </div>
              </div>
              <div className="service-card__body">
                <h3 className="service-card__name">{service.name}</h3>
                <p className="service-card__desc">{service.shortDescription}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="service-card__link"
                  aria-label={`Learn more about ${service.name}`}
                >
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8H13M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="services-section__cta reveal">
          <Link href="/services" className="btn btn--outline">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
