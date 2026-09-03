import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import HeroSection from '@/components/sections/HeroSection';
import TrustBar from '@/components/sections/TrustBar';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutSplit from '@/components/sections/AboutSplit';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import HowItWorks from '@/components/sections/HowItWorks';
import StatsSection from '@/components/sections/StatsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ServiceAreasPreview from '@/components/sections/ServiceAreasPreview';
import BlogPreview from '@/components/sections/BlogPreview';
import FAQSection from '@/components/sections/FAQSection';
import CTABanner from '@/components/sections/CTABanner';
import { generateLocalBusinessSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: `Professional Pest Control Services | ${siteConfig.name}`,
  description:
    'Professional pest-control solutions for homes and businesses in Hyderabad. Request a free inspection and get a customized solution for your pest problem.',
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessSchema()),
        }}
      />
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <AboutSplit />
      <WhyChooseUs />
      <HowItWorks />
      <StatsSection />
      <TestimonialsSection />
      <ServiceAreasPreview />
      <BlogPreview />
      <FAQSection />
      <CTABanner />
    </>
  );
}
