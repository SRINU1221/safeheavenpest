'use client';

import { useState, useEffect } from 'react';
import { testimonials } from '@/data/testimonials';
import './TestimonialsSection.css';

const StarRating = ({ rating }: { rating: number }) => (
  <div className="testimonials__stars" aria-label={`Rated ${rating} out of 5 stars`}>
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        width="18"
        height="18"
        viewBox="0 0 20 20"
        fill={i < rating ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="1.5"
        className={i < rating ? 'text-warning' : 'text-gray-300'}
        aria-hidden="true"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isHovering) return;
    
    const interval = setInterval(() => {
      setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isHovering]);

  const handlePrevious = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  const handleNext = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  return (
    <section className="section testimonials-section" id="testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Customer Reviews</span>
          <h2 className="section-title" id="testimonials-title">
            What Our Clients <span>Say About Us</span>
          </h2>
          <p className="section-subtitle">
            Don&apos;t just take our word for it. Read what our satisfied customers have to say about our pest control services.
          </p>
        </div>

        <div 
          className="testimonials__carousel reveal delay-200"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="testimonials__track-container">
            <div 
              className="testimonials__track"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonials__slide" aria-hidden={testimonial.id !== testimonials[activeIndex].id.toString()}>
                  <div className="testimonials__card">
                    <StarRating rating={testimonial.rating} />
                    <blockquote className="testimonials__quote">
                      "{testimonial.review}"
                    </blockquote>
                    <div className="testimonials__author">
                      <div className="testimonials__avatar" aria-hidden="true">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="testimonials__author-info">
                        <cite className="testimonials__author-name">{testimonial.name}</cite>
                        <span className="testimonials__author-location">{testimonial.location}</span>
                        <span className="testimonials__author-service">{testimonial.service}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="testimonials__controls">
            <button 
              className="testimonials__btn" 
              onClick={handlePrevious}
              aria-label="Previous testimonial"
              suppressHydrationWarning
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            
            <div className="testimonials__dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`testimonials__dot ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === activeIndex ? "true" : "false"}
                  suppressHydrationWarning
                />
              ))}
            </div>

            <button 
              className="testimonials__btn" 
              onClick={handleNext}
              aria-label="Next testimonial"
              suppressHydrationWarning
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
