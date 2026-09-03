import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blog';
import { siteConfig } from '@/config/site';
import { constructMetadata } from '@/lib/metadata';
import { generateBreadcrumbSchema } from '@/lib/seo';
import CTABanner from '@/components/sections/CTABanner';
import QuoteForm from '@/components/forms/QuoteForm';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) {
    return { title: 'Article Not Found' };
  }

  return constructMetadata({
    title: `${post.title} | SafeHaven Pest Control Blog`,
    description: post.excerpt,
    image: post.image,
  });
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Home', url: siteConfig.url },
    { name: 'Blog', url: `${siteConfig.url}/blog` },
    { name: post.title, url: `${siteConfig.url}/blog/${post.slug}` },
  ];

  // Article schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    image: `${siteConfig.url}${post.image}`,
    datePublished: new Date(post.date).toISOString(),
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/images/logo.png`,
      }
    },
    description: post.excerpt,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleSchema, generateBreadcrumbSchema(breadcrumbs)]),
        }}
      />

      <div className="page-header" style={{ paddingBottom: '2rem' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', padding: '0.25rem 0.75rem', background: 'var(--color-accent)', color: 'white', fontSize: '0.875rem', fontWeight: 'bold', borderRadius: 'var(--radius-full)', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
            {post.category}
          </div>
          <h1 className="page-header__title" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1.5rem' }}>
            {post.title}
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
            <span>📅 {post.date}</span>
            <span style={{ width: '4px', height: '4px', background: 'currentColor', borderRadius: '50%' }}></span>
            <span>⏱ {post.readTime}</span>
          </div>
        </div>
      </div>

      <section className="section bg-white" style={{ paddingTop: '0' }}>
        <div className="container">
          {/* Featured Image */}
          <div style={{ position: 'relative', width: '100%', height: '500px', borderRadius: 'var(--radius-2xl)', overflow: 'hidden', marginTop: '-3rem', marginBottom: '3rem', boxShadow: 'var(--shadow-xl)', zIndex: 2 }}>
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>

          <div className="grid" style={{ gridTemplateColumns: '1fr 380px', gap: '4rem', alignItems: 'start' }}>
            {/* Article Content */}
            <article>
              <div 
                className="prose" 
                style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--color-gray-700)' }}
                dangerouslySetInnerHTML={{ __html: post.content }} 
              />
              
              <hr style={{ border: 'none', borderTop: '1px solid var(--color-gray-200)', margin: '3rem 0' }} />
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link href="/blog" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                  Back to Articles
                </Link>
                
                {/* Simple Share Buttons (visual only) */}
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button aria-label="Share on Facebook" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--color-gray-100)', color: 'var(--color-gray-600)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer' }}>
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                  </button>
                  <button aria-label="Share on Twitter" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--color-gray-100)', color: 'var(--color-gray-600)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer' }}>
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
                  </button>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside style={{ position: 'sticky', top: 'calc(var(--header-height) + 2rem)' }}>
              <div className="card" style={{ padding: '2rem', marginBottom: '2rem', background: 'var(--color-primary-ultra-light)', border: '1px solid var(--color-primary-light)' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 'bold', color: 'var(--color-primary)', marginBottom: '1rem', fontSize: '1.25rem' }}>
                  Need Professional Help?
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-600)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                  If you're dealing with a pest infestation mentioned in this article, don't wait. Contact our experts for a safe, effective solution.
                </p>
                <a href={`tel:${siteConfig.phoneTel}`} className="btn btn--primary w-full" style={{ marginBottom: '0.75rem', justifyContent: 'center' }}>
                  Call {siteConfig.phone}
                </a>
                <Link href="/contact" className="btn btn--outline-primary w-full" style={{ justifyContent: 'center' }}>
                  Request a Quote
                </Link>
              </div>

              <div className="card" style={{ padding: '1.5rem' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 'bold', color: 'var(--color-gray-800)', marginBottom: '1rem', fontSize: '1.125rem' }}>
                  Related Articles
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {blogPosts.filter(p => p.id !== post.id).slice(0, 3).map(related => (
                    <Link key={related.id} href={`/blog/${related.slug}`} style={{ display: 'flex', gap: '1rem', textDecoration: 'none' }}>
                      <div style={{ position: 'relative', width: '80px', height: '80px', borderRadius: 'var(--radius-md)', overflow: 'hidden', flexShrink: 0 }}>
                        <Image src={related.image} alt={related.title} fill className="object-cover" sizes="80px" />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h4 style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--color-gray-800)', marginBottom: '0.25rem', lineHeight: '1.3' }}>
                          {related.title}
                        </h4>
                        <span style={{ fontSize: '0.75rem', color: 'var(--color-gray-500)' }}>{related.date}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
