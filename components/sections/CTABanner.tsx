import Link from 'next/link';
import { siteConfig } from '@/config/site';
import './CTABanner.css';

export default function CTABanner() {
  return (
    <section className="cta-banner" aria-label="Call to action">
      <div className="container">
        <div className="cta-banner__inner reveal">
          <div className="cta-banner__content">
            <h2 className="cta-banner__title">
              Experiencing a Pest Problem?
            </h2>
            <p className="cta-banner__subtitle">
              Don&apos;t wait for the infestation to grow. Contact our professional team for a fast, effective solution.
            </p>
          </div>
          <div className="cta-banner__actions">
            <Link href="/contact" className="btn btn--primary btn--lg">
              Get a Free Inspection
            </Link>
            <a href={`tel:${siteConfig.phoneTel}`} className="btn btn--secondary btn--lg">
              📞 {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
