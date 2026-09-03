'use client';

import { useState } from 'react';
import { pestTypes } from '@/data/services';
import { siteConfig } from '@/config/site';

interface QuoteFormProps {
  defaultService?: string;
}

export default function QuoteForm({ defaultService = '' }: QuoteFormProps) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    pestType: defaultService,
    propertyType: 'Residential',
    message: '',
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.pestType) {
      setError('Please fill in required fields: Name, Phone, and Pest Type.');
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
          email: form.email,
          service: form.pestType,
          location: form.location,
          source: 'quote-form',
          message: `Property: ${form.propertyType}. Message: ${form.message}`,
        }),
      });
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please call us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
        <div style={{ width: '64px', height: '64px', background: 'var(--color-success)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', margin: '0 auto 1rem' }}>✓</div>
        <h3 style={{ marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Quote Request Sent!</h3>
        <p style={{ color: 'var(--color-gray-500)', marginBottom: '1.5rem' }}>Thank you, {form.name}. One of our pest control experts will contact you shortly to provide a quote.</p>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn--green w-full">
          💬 Chat on WhatsApp Now
        </a>
      </div>
    );
  }

  return (
    <div className="card" style={{ padding: '2rem' }}>
      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Get a Free Quote</h3>
      <p style={{ color: 'var(--color-gray-500)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>Fill out the form below and we'll get back to you within 30 minutes.</p>
      
      <form onSubmit={handleSubmit} noValidate>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
          <div className="form-group">
            <label htmlFor="quote-name" className="form-label required">Your Name</label>
            <input
              id="quote-name"
              type="text"
              className={`form-input ${error && !form.name ? 'error' : ''}`}
              placeholder="Enter your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              suppressHydrationWarning
            />
          </div>
          <div className="form-group">
            <label htmlFor="quote-phone" className="form-label required">Phone Number</label>
            <input
              id="quote-phone"
              type="tel"
              className={`form-input ${error && !form.phone ? 'error' : ''}`}
              placeholder="+91 XXXXX XXXXX"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
              suppressHydrationWarning
            />
          </div>
        </div>

        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
          <div className="form-group">
            <label htmlFor="quote-email" className="form-label">Email Address (Optional)</label>
            <input
              id="quote-email"
              type="email"
              className="form-input"
              placeholder="your@email.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              suppressHydrationWarning
            />
          </div>
          <div className="form-group">
            <label htmlFor="quote-location" className="form-label">Location / Area</label>
            <input
              id="quote-location"
              type="text"
              className="form-input"
              placeholder="e.g. Jubilee Hills"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              suppressHydrationWarning
            />
          </div>
        </div>

        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
          <div className="form-group">
            <label htmlFor="quote-pest" className="form-label required">Pest Type</label>
            <select
              id="quote-pest"
              className={`form-select ${error && !form.pestType ? 'error' : ''}`}
              value={form.pestType}
              onChange={(e) => setForm({ ...form, pestType: e.target.value })}
              required
              suppressHydrationWarning
            >
              <option value="">Select pest type</option>
              {pestTypes.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="quote-property" className="form-label">Property Type</label>
            <select
              id="quote-property"
              className="form-select"
              value={form.propertyType}
              onChange={(e) => setForm({ ...form, propertyType: e.target.value })}
              suppressHydrationWarning
            >
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
            </select>
          </div>
        </div>

        <div className="form-group" style={{ marginBottom: '1.5rem' }}>
          <label htmlFor="quote-message" className="form-label">Additional Details (Optional)</label>
          <textarea
            id="quote-message"
            className="form-textarea"
            placeholder="Tell us more about your pest problem..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            style={{ minHeight: '80px' }}
            suppressHydrationWarning
          />
        </div>

        {error && <p className="form-error" style={{ marginBottom: '1rem' }} role="alert">⚠ {error}</p>}
        
        {/* Honeypot */}
        <input type="text" name="website_url" style={{ display: 'none' }} tabIndex={-1} aria-hidden="true" />
        
        <button type="submit" className="btn btn--primary w-full" disabled={submitting} suppressHydrationWarning>
          {submitting ? (
            <><span className="spinner" aria-hidden="true" style={{ width: '16px', height: '16px' }} /> Sending...</>
          ) : (
            'Get My Free Quote'
          )}
        </button>
      </form>
    </div>
  );
}
