import Link from 'next/link';
import content from '../data/content.json';
import '../pages.css';

export const metadata = {
  title: 'Services | ABA Solutions, LLC',
  description: 'Comprehensive ABA therapy services including assessment, treatment planning, parent training, social skills groups, and more across Maryland.',
};

export default function ServicesPage() {
  const { services } = content;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-label">What We Offer</span>
          <h1>Our Services</h1>
          <p className="page-hero-text">{services.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-detail">
            <div className="service-detail-icon">📋</div>
            <div>
              <h2>{services.assessment.title}</h2>
              <p>{services.assessment.description}</p>
              <p><strong>Assessment tools we use:</strong></p>
              <div className="service-tags" style={{ marginTop: '0.5rem' }}>
                {services.assessment.tools.map((tool, i) => (
                  <span key={i} className="badge badge-blue">{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <div className="service-detail">
            <div className="service-detail-icon">🎯</div>
            <div>
              <h2>{services.treatment.title}</h2>
              <p>{services.treatment.description}</p>
              <p><strong>Services we provide in the home and community:</strong></p>
              <div className="offerings-grid">
                {services.treatment.offerings.map((offering, i) => (
                  <div key={i} className="offering-item">
                    <span className="offering-check">✓</span>
                    {offering}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-detail">
            <div className="service-detail-icon">📅</div>
            <div>
              <h2>{services.schedule.title}</h2>
              <p>{services.schedule.description}</p>
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                Get Started →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Questions About Our Services?</h2>
            <p>We would love to discuss how we can support your family. Reach out today for a consultation.</p>
            <Link href="/contact" className="btn btn-white btn-lg">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
