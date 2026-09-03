import Image from 'next/image';
import Link from 'next/link';
import './AboutSplit.css';

const highlights = [
  '10+ years of professional pest management experience',
  'Trained and certified pest control technicians',
  'Residential and commercial solutions',
  'Transparent process and clear customer communication',
];

export default function AboutSplit() {
  return (
    <section className="section about-split" id="about-preview" aria-labelledby="about-split-title">
      <div className="container about-split__inner">
        <div className="about-split__image-side reveal-left">
          <div className="about-split__image-wrap">
            <Image
              src="/images/about-team.png"
              alt="SafeHaven Pest Control professional pest control technicians"
              fill
              className="about-split__image"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
          <div className="about-split__badge">
            <span className="about-split__badge-number">10+</span>
            <span className="about-split__badge-label">Years of Professional Service</span>
          </div>
        </div>

        <div className="about-split__content reveal-right">
          <span className="section-label">About SafeHaven Pest Control</span>
          <h2 className="section-title" id="about-split-title">
            Professional Pest Management <span>You Can Trust</span>
          </h2>
          <p className="about-split__text">
            SafeHaven Pest Control is a professional pest-control company providing reliable pest management services for residential and commercial properties across Hyderabad. Our approach is built on thorough inspection, evidence-based treatment, and genuine customer service.
          </p>
          <p className="about-split__text">
            We understand that every property and pest situation is different. That&apos;s why we begin with a detailed inspection before recommending any treatment, ensuring the solution we provide is appropriate for the specific pest issue and property type.
          </p>
          <p className="about-split__text">
            Whether you are dealing with a household pest problem or require an ongoing commercial pest management program, our team is committed to delivering professional service that meets your expectations.
          </p>

          <ul className="about-split__highlights" aria-label="Key highlights">
            {highlights.map((item) => (
              <li key={item} className="about-split__highlight-item">
                <span className="about-split__highlight-icon" aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <Link href="/about" className="btn btn--dark" id="about-learn-more">
            Learn About Us
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8H13M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
