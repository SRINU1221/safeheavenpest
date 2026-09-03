'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { pestTypes } from '@/data/services';
import './HeroSection.css';

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="8" cy="8" r="8" fill="currentColor" fillOpacity="0.15"/>
    <path d="M5 8.5L7 10.5L11 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const trustIndicators = [
  'Experienced Technicians',
  'Safe Treatment Methods',
  'Fast Response',
  'Residential & Commercial',
];

export default function HeroSection() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    pest: '',
    location: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      setError('Please fill in your name and phone number.');
      return;
    }
    setSubmitting(true);
    setError('');
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          service: form.pest,
          location: form.location,
          source: 'hero-form',
          message: `Pest: ${form.pest || 'Not specified'}, Location: ${form.location || 'Not specified'}`,
        }),
      });
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please call us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="hero" id="hero" aria-label="Hero section">
      {/* Background Image */}
      <div className="hero__bg">
        <Image
          src="/images/hero-bg.png"
          alt="Professional pest control technician inspecting property"
          fill
          priority
          quality={85}
          className="hero__bg-image"
          sizes="100vw"
        />
        <div className="hero__bg-overlay" />
      </div>

      <div className="container hero__inner">
        {/* Content */}
        <div className="hero__content">
          <p className="hero__eyebrow">Trusted Pest Control Professionals</p>
          <h1 className="hero__headline">
            Protect Your Home & Business From{' '}
            <span className="hero__headline-accent">Unwanted Pests</span>
          </h1>
          <p className="hero__subtext">
            Reliable, effective and professional pest-control solutions designed to keep your property clean, safe and pest-free.
          </p>

          {/* Trust Indicators */}
          <ul className="hero__trust" aria-label="Service benefits">
            {trustIndicators.map((item) => (
              <li key={item} className="hero__trust-item">
                <span className="hero__trust-icon">
                  <CheckIcon />
                </span>
                {item}
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="hero__ctas">
            <Link href="/contact" className="btn btn--primary btn--lg" id="hero-cta-primary">
              Get a Free Inspection
            </Link>
            <a href={`tel:${siteConfig.phoneTel}`} className="btn btn--secondary btn--lg" id="hero-cta-call">
              📞 Call Us Now
            </a>
          </div>
        </div>

        {/* Quote Card */}
        <aside className="hero__card" aria-label="Quick enquiry form">
          <div className="hero__card-header">
            <h2 className="hero__card-title">Need Pest Control?</h2>
            <p className="hero__card-subtitle">Get a callback within 30 minutes</p>
          </div>

          {submitted ? (
            <div className="hero__card-success">
              <div className="hero__card-success-icon">✓</div>
              <h3>We&apos;ll Call You Back!</h3>
              <p>Thank you, {form.name}. Our team will contact you shortly.</p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn--green w-full" style={{ marginTop: '1rem' }}>
                💬 WhatsApp Instead
              </a>
            </div>
          ) : (
            <form className="hero__card-form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="hero-name" className="form-label required">Your Name</label>
                <input
                  id="hero-name"
                  type="text"
                  className={`form-input ${error && !form.name ? 'error' : ''}`}
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  autoComplete="name"
                  suppressHydrationWarning
                />
              </div>
              <div className="form-group">
                <label htmlFor="hero-phone" className="form-label required">Phone Number</label>
                <input
                  id="hero-phone"
                  type="tel"
                  className={`form-input ${error && !form.phone ? 'error' : ''}`}
                  placeholder="+91 XXXXX XXXXX"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required
                  autoComplete="tel"
                  suppressHydrationWarning
                />
              </div>
              <div className="form-group">
                <label htmlFor="hero-pest" className="form-label">Pest Problem</label>
                <select
                  id="hero-pest"
                  className="form-select"
                  value={form.pest}
                  onChange={(e) => setForm({ ...form, pest: e.target.value })}
                  suppressHydrationWarning
                >
                  <option value="">Select pest type</option>
                  {pestTypes.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="hero-location" className="form-label">Your Location</label>
                <input
                  id="hero-location"
                  type="text"
                  className="form-input"
                  placeholder="Area / City"
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                  autoComplete="address-level2"
                  suppressHydrationWarning
                />
              </div>
              {error && <p className="form-error" role="alert">⚠ {error}</p>}
              {/* Honeypot */}
              <input type="text" name="website" style={{ display: 'none' }} tabIndex={-1} aria-hidden="true" />
              <button type="submit" className="btn btn--primary w-full" disabled={submitting} id="hero-form-submit" suppressHydrationWarning>
                {submitting ? (
                  <><span className="spinner" aria-hidden="true" /> Sending...</>
                ) : (
                  'Request a Callback'
                )}
              </button>
              <p className="hero__card-note">
                Or{' '}
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  message us on WhatsApp
                </a>
              </p>
            </form>
          )}
        </aside>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll" aria-hidden="true">
        <span className="hero__scroll-line"></span>
      </div>
    </section>
  );
}
