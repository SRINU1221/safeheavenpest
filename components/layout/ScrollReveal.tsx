'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const handleReveal = () => {
      const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
      
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: '100px 0px 100px 0px' }
      );

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If element is already visible in viewport or near top, reveal immediately
        if (rect.top <= window.innerHeight + 100) {
          el.classList.add('visible');
        } else {
          observer?.observe(el);
        }
      });
    };

    // Run immediately and after a short timeout to catch dynamic route renders
    handleReveal();
    const timer = setTimeout(handleReveal, 100);

    return () => {
      clearTimeout(timer);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [pathname]);

  return null;
}
