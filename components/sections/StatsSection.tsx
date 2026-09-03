'use client';

import { useEffect, useRef, useState } from 'react';
import { siteConfig } from '@/config/site';
import './StatsSection.css';

type StatItem = {
  value: string;
  label: string;
  icon: string;
  numericValue: number;
  suffix: string;
};

const stats: StatItem[] = [
  { value: siteConfig.stats.experience, label: 'Years Experience', icon: '🏆', numericValue: 10, suffix: '+' },
  { value: siteConfig.stats.customers, label: 'Customers Served', icon: '👥', numericValue: 5000, suffix: '+' },
  { value: siteConfig.stats.areas, label: 'Service Areas', icon: '📍', numericValue: 20, suffix: '+' },
  { value: siteConfig.stats.satisfaction, label: 'Customer Satisfaction', icon: '⭐', numericValue: 95, suffix: '%' },
];

function useCountUp(target: number, suffix: string, isVisible: boolean, duration = 2000) {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!isVisible || hasRun.current) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setCount(target);
      hasRun.current = true;
      return;
    }
    hasRun.current = true;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isVisible, target, duration]);

  return target >= 1000 ? `${(count / 1000).toFixed(count >= target ? 0 : 1)}k${suffix}` : `${count}${suffix}`;
}

function StatCard({ stat, isVisible }: { stat: StatItem; isVisible: boolean }) {
  const displayValue = useCountUp(stat.numericValue, stat.suffix, isVisible);
  return (
    <div className="stats__card">
      <span className="stats__icon" aria-hidden="true">{stat.icon}</span>
      <strong className="stats__value" aria-label={`${stat.value} ${stat.label}`}>
        {isVisible ? displayValue : '0'}
      </strong>
      <span className="stats__label">{stat.label}</span>
    </div>
  );
}

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section" aria-labelledby="stats-title" ref={ref}>
      <div className="stats-section__bg" aria-hidden="true" />
      <div className="container">
        <div className="stats-section__header">
          <h2 className="stats-section__title" id="stats-title">
            Trusted by Thousands of Customers Across Hyderabad
          </h2>
          <p className="stats-section__subtitle">
            Our track record reflects our commitment to professional, reliable pest management.
          </p>
        </div>
        <div className="stats__grid">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
