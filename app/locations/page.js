import Link from 'next/link';
import Image from 'next/image';
import content from '../data/content.json';
import '../pages.css';

export const metadata = {
  title: 'Locations | ABA Solutions, LLC',
  description: 'Visit our clinics at Parkville and Owings Mills, MD. We also provide in-home ABA services across 6 Maryland counties.',
};

export default function LocationsPage() {
  const { locations, serviceAreas } = content;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Find Us</span>
          <h1>Our Clinic Locations</h1>
          <p className="page-hero-text">
            Visit us at our clinics or receive services in the comfort of your home. We serve families across 6 Maryland counties.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="location-detail">
            {locations.map((loc, i) => (
              <div key={i} className="card location-detail-card">
                <div className="location-detail-image">
                  <Image
                    src="/images/clinic-interior.png"
                    alt={`${loc.name} clinic`}
                    width={600}
                    height={300}
                    className="location-photo"
                    style={{ objectFit: 'cover', width: '100%', height: '220px', borderRadius: 'var(--radius-lg)' }}
                  />
                </div>
                <h2>{loc.name}</h2>
                <p style={{ color: 'var(--color-text-light)', marginBottom: 'var(--space-6)' }}>{loc.address}</p>
                <Link href="/contact" className="btn btn-primary">
                  Schedule a Visit
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">In-Home Services</span>
            <h2>Service Areas</h2>
            <p>We provide in-home ABA services throughout these Maryland communities.</p>
          </div>
          <div className="area-tags" style={{ justifyContent: 'center' }}>
            {serviceAreas.map((area, i) => (
              <span key={i} className="area-tag">{area}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
