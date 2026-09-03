import { Metadata } from 'next';
import { constructMetadata } from '@/lib/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Privacy Policy | SafeHaven Pest Control',
  description: 'Privacy Policy for SafeHaven Pest Control.',
  noIndex: true,
});

export default function PrivacyPolicy() {
  return (
    <div className="container" style={{ padding: 'var(--space-16) var(--space-4)', maxWidth: '800px' }}>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>Privacy Policy</h1>
      
      <div className="prose" style={{ color: 'var(--color-gray-700)', lineHeight: '1.8' }}>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-gray-800)' }}>1. Introduction</h2>
        <p>At SafeHaven Pest Control, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.</p>
        
        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-gray-800)' }}>2. Data We Collect</h2>
        <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', margin: '1rem 0' }}>
          <li><strong>Identity Data</strong> includes first name, last name.</li>
          <li><strong>Contact Data</strong> includes billing address, service address, email address and telephone numbers.</li>
          <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
        </ul>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-gray-800)' }}>3. How We Use Your Data</h2>
        <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', margin: '1rem 0' }}>
          <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., providing pest control services).</li>
          <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
          <li>Where we need to comply with a legal obligation.</li>
        </ul>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-gray-800)' }}>4. Contact Us</h2>
        <p>If you have any questions about this privacy policy or our privacy practices, please contact us at our primary email address or phone number provided on our contact page.</p>
      </div>
    </div>
  );
}
