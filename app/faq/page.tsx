import { Metadata } from 'next';
import { faqs } from '@/data/testimonials';
import { constructMetadata } from '@/lib/metadata';
import { generateFAQSchema } from '@/lib/seo';
import CTABanner from '@/components/sections/CTABanner';
import FAQSection from '@/components/sections/FAQSection';

export const metadata: Metadata = constructMetadata({
  title: 'Frequently Asked Questions | SafeHaven Pest Control',
  description: 'Find answers to common questions about our pest control methods, safety, pricing, and service areas in Hyderabad.',
});

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqs)),
        }}
      />
      
      <div className="page-header">
        <div className="container">
          <h1 className="page-header__title">Frequently Asked Questions</h1>
          <p className="page-header__subtitle">
            Everything you need to know about our pest control services and how we work.
          </p>
        </div>
      </div>

      {/* Reusing the homepage FAQ section which contains the accordion logic */}
      {/* We can style it slightly differently via its container if needed */}
      <div style={{ paddingTop: 'var(--space-12)' }}>
        <FAQSection />
      </div>

      <CTABanner />
    </>
  );
}
