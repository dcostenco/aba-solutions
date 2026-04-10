import Link from 'next/link';
import '../pages.css';

export const metadata = {
  title: 'Terms of Service | ABA Solutions, LLC',
  description: 'Terms of service for using the ABA Solutions website and patient portal.',
};

export default function TermsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Legal</span>
          <h1>Terms of Service</h1>
          <p className="page-hero-text">
            Please review these terms before using our website and patient portal.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2>Acceptance of Terms</h2>
          <p>By accessing and using the ABA Solutions website and patient portal, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>

          <h2>Use of Services</h2>
          <p>Our website provides information about ABA therapy services. The patient portal provides secure access to appointment scheduling, document sharing, and intake forms. You agree to use these services only for their intended purposes.</p>

          <h2>Patient Portal</h2>
          <p>Access to the patient portal requires authentication via Google or Microsoft OAuth with mandatory two-factor authentication. You are responsible for maintaining the security of your account credentials. You must not share your login information with unauthorized individuals.</p>

          <h2>Medical Disclaimer</h2>
          <p>The information provided on this website is for general informational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have.</p>

          <h2>Limitation of Liability</h2>
          <p>ABA Solutions, LLC provides this website and patient portal on an &quot;as is&quot; basis. We make no warranties regarding the availability or accuracy of the services provided through our digital platforms.</p>

          <h2>Contact</h2>
          <p>For questions about these terms, please <Link href="/contact">contact us</Link>.</p>

          <p className="color-muted text-sm mt-8">Last updated: {new Date().getFullYear()}</p>
        </div>
      </section>
    </>
  );
}
