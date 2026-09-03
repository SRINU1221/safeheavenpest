'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
      <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-gray-800)', marginBottom: '1rem' }}>
        Something went wrong!
      </h2>
      <p style={{ color: 'var(--color-gray-600)', fontSize: '1.125rem', marginBottom: '2rem', maxWidth: '500px' }}>
        We apologize for the inconvenience. An unexpected error has occurred.
      </p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button
          onClick={() => reset()}
          className="btn btn--primary"
        >
          Try again
        </button>
        <Link href="/" className="btn btn--outline">
          Return Home
        </Link>
      </div>
    </div>
  );
}
