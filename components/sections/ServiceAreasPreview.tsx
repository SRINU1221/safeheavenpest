import Link from 'next/link';
import { siteConfig } from '@/config/site';
import './ServiceAreasPreview.css';

const MapPinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

export default function ServiceAreasPreview() {
  // Show a subset of areas for the homepage preview
  const displayAreas = siteConfig.serviceAreas.slice(0, 8);

  return (
    <section className="section service-areas-preview" id="service-areas" aria-labelledby="areas-title">
      <div className="container service-areas-preview__inner">
        <div className="service-areas-preview__content reveal-left">
          <span className="section-label" style={{ color: 'var(--color-accent-light)' }}>Where We Work</span>
          <h2 className="section-title" id="areas-title" style={{ color: 'var(--color-white)' }}>
            Proudly Serving <span style={{ color: 'var(--color-accent-light)' }}>Hyderabad</span>
          </h2>
          <p className="service-areas-preview__subtitle">
            We provide fast, reliable pest control services to residential and commercial properties across Hyderabad and surrounding areas. Our local technicians can reach you quickly when you need us most.
          </p>
          
          <ul className="service-areas-preview__list">
            {displayAreas.map((area) => (
              <li key={area.slug} className="service-areas-preview__item">
                <MapPinIcon />
                {area.name}
              </li>
            ))}
          </ul>
          
          <div className="service-areas-preview__actions">
            <Link href="/service-areas" className="btn btn--secondary">
              View All Service Areas
            </Link>
          </div>
        </div>
        
        <div className="service-areas-preview__map-side reveal-right">
          <div className="service-areas-preview__map-card">
            <div className="service-areas-preview__map-overlay">
              <div className="service-areas-preview__map-marker">
                <div className="service-areas-preview__map-pulse"></div>
                <MapPinIcon />
              </div>
              <div className="service-areas-preview__map-info">
                <h3>SafeHaven Pest Control</h3>
                <p>Fast response across Hyderabad</p>
              </div>
            </div>
            {/* A real map embed could go here, for now we use a styled representation */}
            <div className="service-areas-preview__map-pattern"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
