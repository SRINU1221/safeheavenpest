import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/data/blog';
import './BlogPreview.css';

export default function BlogPreview() {
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section className="section blog-preview" id="blog" aria-labelledby="blog-title">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Latest Articles</span>
          <h2 className="section-title" id="blog-title">
            Pest Control <span>Tips & Advice</span>
          </h2>
          <p className="section-subtitle">
            Expert guidance on identifying, preventing, and managing pest problems at home and in the workplace.
          </p>
        </div>

        <div className="blog-preview__grid">
          {recentPosts.map((post, index) => (
            <article
              key={post.id}
              className={`blog-preview__card card reveal delay-${(index + 1) * 100}`}
            >
              <Link href={`/blog/${post.slug}`} className="blog-preview__image-link" aria-label={post.title}>
                <div className="blog-preview__image-wrap">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="blog-preview__category-badge">{post.category}</div>
                </div>
              </Link>

              <div className="blog-preview__body">
                <div className="blog-preview__meta">
                  <span>📅 {post.date}</span>
                  <span className="blog-preview__meta-dot" aria-hidden="true" />
                  <span>⏱ {post.readTime}</span>
                </div>

                <h3 className="blog-preview__title">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                <p className="blog-preview__excerpt">{post.excerpt}</p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="blog-preview__read-more"
                  aria-label={`Read article: ${post.title}`}
                >
                  Read Article
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12l5-5-5-5" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-preview__footer reveal">
          <Link href="/blog" className="btn btn--outline">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
