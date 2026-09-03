import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '6rem', fontWeight: '900', color: 'var(--color-primary)', lineHeight: '1', marginBottom: '1rem' }}>
        404
      </h1>
      <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-gray-800)', marginBottom: '1rem' }}>
        Page Not Found
      </h2>
      <p style={{ color: 'var(--color-gray-600)', fontSize: '1.125rem', marginBottom: '2rem', maxWidth: '500px' }}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link href="/" className="btn btn--primary">
          Return Home
        </Link>
        <Link href="/contact" className="btn btn--outline">
          Contact Support
        </Link>
      </div>
    </div>
  );
}
