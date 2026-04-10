import Link from 'next/link';
import '../pages.css';

export const metadata = {
  title: 'Privacy Policy | ABA Solutions, LLC',
  description: 'Privacy policy for ABA Solutions, LLC. Learn how we protect your personal and health information.',
};

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Legal</span>
          <h1>Privacy Policy</h1>
          <p className="page-hero-text">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2>Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you fill out a contact form, create a patient portal account, or communicate with us. This may include your name, email address, phone number, and health-related information necessary for treatment.</p>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to provide and improve our ABA therapy services, communicate with you about appointments and treatment, and comply with legal obligations. We never sell your personal information to third parties.</p>

          <h2>HIPAA Compliance</h2>
          <p>As a healthcare provider, we comply with the Health Insurance Portability and Accountability Act (HIPAA). All protected health information (PHI) is encrypted at rest and in transit. Access to PHI is restricted to authorized personnel only, and all access is logged for audit purposes.</p>

          <h2>Data Security</h2>
          <p>We implement industry-standard security measures to protect your information, including encryption, access controls, and regular security assessments. Our patient portal uses multi-factor authentication to ensure only authorized users can access health records.</p>

          <h2>Contact Us</h2>
          <p>If you have questions about this privacy policy, please <Link href="/contact">contact us</Link>.</p>

          <p className="color-muted text-sm mt-8">Last updated: {new Date().getFullYear()}</p>
        </div>
      </section>
    </>
  );
}
