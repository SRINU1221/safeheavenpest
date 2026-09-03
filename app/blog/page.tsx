import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/data/blog';
import { constructMetadata } from '@/lib/metadata';
import CTABanner from '@/components/sections/CTABanner';

export const metadata: Metadata = constructMetadata({
  title: 'Pest Control Blog & Resources | SafeHaven Pest Control',
  description: 'Read the latest tips, guides, and news about pest control, prevention, and property maintenance in Hyderabad.',
});

export default function BlogListingPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1 className="page-header__title">Pest Control Advice & News</h1>
          <p className="page-header__subtitle">
            Expert tips, seasonal guides, and the latest updates from our pest management professionals.
          </p>
        </div>
      </div>

      <section className="section bg-off-white">
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
            {blogPosts.map((post) => (
              <article key={post.id} className="card reveal" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                <Link href={`/blog/${post.slug}`} style={{ position: 'relative', height: '240px', display: 'block', overflow: 'hidden' }}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    style={{ transition: 'transform 0.5s ease' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'var(--color-primary)', color: 'white', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
                    {post.category}
                  </div>
                </Link>
                
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.85rem', color: 'var(--color-gray-500)', marginBottom: '1rem' }}>
                    <span>📅 {post.date}</span>
                    <span>⏱ {post.readTime}</span>
                  </div>
                  
                  <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem', lineHeight: '1.4' }}>
                    <Link href={`/blog/${post.slug}`} style={{ color: 'var(--color-gray-800)', textDecoration: 'none' }}>
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p style={{ color: 'var(--color-gray-600)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1 }}>
                    {post.excerpt}
                  </p>
                  
                  <Link href={`/blog/${post.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', fontWeight: 'bold', fontSize: '0.9rem', textDecoration: 'none' }}>
                    Read Article 
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5-5-5-5"/>
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
