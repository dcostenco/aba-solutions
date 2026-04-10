import Link from 'next/link';
import content from './data/content.json';
import './home.css';

export default function Home() {
  const { hero, services, locations, serviceAreas, team, insurance } = content;
  const visibleTeam = team.filter(m => m.bio);

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container hero-container">
          <div className="hero-content">
            <span className="section-label">ABA Therapy in Maryland</span>
            <h1>{hero.title}</h1>
            <p className="hero-text">{hero.subtitle}</p>
            <div className="hero-actions">
              <Link href={hero.ctaLink} className="btn btn-primary btn-lg">
                {hero.cta}
              </Link>
              <Link href="/services" className="btn btn-outline btn-lg">
                Our Services
              </Link>
            </div>
            <div className="hero-trust">
              <div className="hero-trust-item">
                <span className="hero-trust-number">10+</span>
                <span className="hero-trust-label">Years of Experience</span>
              </div>
              <div className="hero-trust-divider"></div>
              <div className="hero-trust-item">
                <span className="hero-trust-number">6</span>
                <span className="hero-trust-label">Counties Served</span>
              </div>
              <div className="hero-trust-divider"></div>
              <div className="hero-trust-item">
                <span className="hero-trust-number">2</span>
                <span className="hero-trust-label">Clinic Locations</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-card-icon" aria-hidden="true">🧩</div>
              <h3>Every Child is Unique</h3>
              <p>We create individualized programs tailored to your child&apos;s specific needs and strengths.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">What We Do</span>
            <h2>Comprehensive ABA Services</h2>
            <p>{services.intro}</p>
          </div>
          <div className="grid-3">
            <div className="card card-interactive service-card">
              <div className="service-icon" aria-hidden="true">📋</div>
              <h3>{services.assessment.title}</h3>
              <p>{services.assessment.description}</p>
              <div className="service-tags">
                {services.assessment.tools.map((tool, i) => (
                  <span key={i} className="badge badge-blue">{tool}</span>
                ))}
              </div>
            </div>
            <div className="card card-interactive service-card">
              <div className="service-icon" aria-hidden="true">🎯</div>
              <h3>{services.treatment.title}</h3>
              <p>{services.treatment.description}</p>
              <div className="service-tags">
                {services.treatment.offerings.slice(0, 5).map((s, i) => (
                  <span key={i} className="badge badge-green">{s}</span>
                ))}
                <span className="badge badge-green">+{services.treatment.offerings.length - 5} more</span>
              </div>
            </div>
            <div className="card card-interactive service-card">
              <div className="service-icon" aria-hidden="true">📅</div>
              <h3>{services.schedule.title}</h3>
              <p>{services.schedule.description}</p>
              <Link href="/contact" className="btn btn-outline mt-auto">
                Schedule a Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Locations</span>
            <h2>Two Clinics Across Maryland</h2>
            <p>Visit us at our state-of-the-art clinics or receive services in the comfort of your home.</p>
          </div>
          <div className="grid-2">
            {locations.map((loc, i) => (
              <div key={i} className="card card-interactive location-card">
                <div className="location-icon" aria-hidden="true">🏥</div>
                <h3>{loc.name}</h3>
                <p className="location-address">{loc.address}</p>
                <Link href="/locations" className="btn btn-outline">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
          <div className="service-areas">
            <h3>Service Areas</h3>
            <div className="area-tags">
              {serviceAreas.map((area, i) => (
                <span key={i} className="area-tag">{area}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview — only show members with bios */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Team</span>
            <h2>Meet Our Experienced Team</h2>
            <p>Our team of Board Certified Behavior Analysts and Registered Behavior Technicians are dedicated to helping your family thrive.</p>
          </div>
          <div className="grid-4">
            {visibleTeam.slice(0, 4).map((member, i) => (
              <div key={i} className="card card-interactive team-card">
                <div className="team-avatar" aria-hidden="true">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h4>{member.name}</h4>
                <p className="team-title">{member.title}</p>
                <span className="badge badge-blue">{member.role}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/about" className="btn btn-outline">
              View Full Team →
            </Link>
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="section-blue">
        <div className="container">
          <div className="insurance-section">
            <div className="insurance-content">
              <span className="section-label">Insurance</span>
              <h2>We Accept Most Major Insurance</h2>
              <ul className="insurance-list">
                {insurance.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <Link href="/contact" className="btn btn-primary">
                Verify Your Coverage
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>We are here to support your family every step of the way. Reach out today to learn how ABA therapy can make a difference for your child.</p>
            <div className="hero-actions justify-center">
              <Link href="/contact" className="btn btn-white btn-lg">Contact Us</Link>
              <Link href="/portal" className="btn btn-outline btn-lg cta-portal-btn">
                Patient Portal
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
