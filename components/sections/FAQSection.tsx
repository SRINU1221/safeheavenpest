'use client';

import { useState } from 'react';
import Link from 'next/link';
import { faqs } from '@/data/testimonials';
import './FAQSection.css';

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={`faq-accordion__icon ${open ? 'open' : ''}`}
    aria-hidden="true"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  // Show only first 6 FAQs on homepage
  const displayFaqs = faqs.slice(0, 6);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section faq-section" id="faq" aria-labelledby="faq-title">
      <div className="container faq-section__inner">
        <div className="faq-section__content reveal-left">
          <span className="section-label">Common Questions</span>
          <h2 className="section-title" id="faq-title">
            Frequently Asked <span>Questions</span>
          </h2>
          <p className="section-subtitle">
            Find answers to common questions about our pest control services, treatment processes, and safety protocols.
          </p>
          <div className="faq-section__actions">
            <Link href="/faq" className="btn btn--outline">
              View All FAQs
            </Link>
          </div>
        </div>

        <div className="faq-accordion reveal-right delay-200">
          {displayFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-accordion__item ${isOpen ? 'active' : ''}`}
              >
                <button
                  className="faq-accordion__trigger"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  suppressHydrationWarning
                >
                  <span className="faq-accordion__question">{faq.question}</span>
                  <ChevronIcon open={isOpen} />
                </button>
                <div 
                  id={`faq-answer-${index}`}
                  className="faq-accordion__panel"
                  hidden={!isOpen}
                >
                  <div className="faq-accordion__answer">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
