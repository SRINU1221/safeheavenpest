import { Metadata } from 'next';
import { constructMetadata } from '@/lib/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Terms and Conditions | SafeHaven Pest Control',
  description: 'Terms and Conditions for using SafeHaven Pest Control services.',
  noIndex: true,
});

export default function TermsAndConditions() {
  return (
    <div className="container" style={{ padding: 'var(--space-16) var(--space-4)', maxWidth: '800px' }}>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>Terms and Conditions</h1>
      
      <div className="prose" style={{ color: 'var(--color-gray-700)', lineHeight: '1.8' }}>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-gray-800)' }}>1. Agreement to Terms</h2>
        <p>By accessing our website and utilizing our services, you agree to be bound by these Terms and Conditions and agree that you are responsible for the agreement with any applicable local laws.</p>
        
        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-gray-800)' }}>2. Services</h2>
        <p>SafeHaven Pest Control provides pest control and management services. While we guarantee professional application of all treatments according to industry standards, complete eradication of pests cannot always be guaranteed due to factors outside our control (e.g., structural issues, neighboring properties).</p>
        
        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-gray-800)' }}>3. Customer Responsibilities</h2>
        <p>To ensure effective treatment, customers are expected to:</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', margin: '1rem 0' }}>
          <li>Provide accurate information regarding the pest problem.</li>
          <li>Follow any pre-treatment or post-treatment instructions provided by our technicians.</li>
          <li>Ensure safe access to the property for our technicians.</li>
        </ul>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-gray-800)' }}>4. Liability</h2>
        <p>SafeHaven Pest Control is fully insured. However, we are not liable for incidental or consequential damages resulting from our services, nor for damages resulting from the inherent nature of the property or circumstances beyond our control.</p>
      </div>
    </div>
  );
}
