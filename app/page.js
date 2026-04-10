import Link from 'next/link';
import Image from 'next/image';
import content from './data/content.json';
import './home.css';

export default function Home() {
  const { hero, services, locations, serviceAreas, team, insurance } = content;
  const visibleTeam = team.filter(m => m.bio);

  return (
    <>
      {/* Hero — full-width image inspired by verbalbeginnings.com */}
      <section className="hero-photo">
        <div className="hero-photo-bg">
          <Image
            src="/images/hero-therapy.png"
            alt="ABA therapist working with a child on puzzle activities"
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className="hero-photo-overlay"></div>
        </div>
        <div className="container hero-photo-content">
          <span className="section-label hero-label">ABA Therapy in Maryland</span>
          <h1>{hero.title}</h1>
          <p className="hero-text">{hero.subtitle}</p>
          <div className="hero-actions">
            <Link href={hero.ctaLink} className="btn btn-primary btn-lg">
              {hero.cta}
            </Link>
            <Link href="/services" className="btn btn-white btn-lg">
              Our Services
            </Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-number">10+</span>
              <span className="hero-stat-label">Years of Experience</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">6</span>
              <span className="hero-stat-label">Counties Served</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">2</span>
              <span className="hero-stat-label">Clinic Locations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Cards — VB-inspired 3-column CTA bar */}
      <section className="quick-cards-section">
        <div className="container">
          <div className="grid-3">
            <Link href="/about" className="quick-card">
              <span className="quick-card-icon">👨‍👩‍👧‍👦</span>
              <h3>About Us</h3>
              <p>Meet our experienced BCBA and RBT team</p>
              <span className="quick-card-arrow">→</span>
            </Link>
            <Link href="/services" className="quick-card quick-card-primary">
              <span className="quick-card-icon">🎯</span>
              <h3>Our Services</h3>
              <p>Assessment, treatment, and parent training</p>
              <span className="quick-card-arrow">→</span>
            </Link>
            <Link href="/contact" className="quick-card">
              <span className="quick-card-icon">📞</span>
              <h3>Contact Us</h3>
              <p>Schedule a call to get started today</p>
              <span className="quick-card-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services — photo + text side-by-side */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">What We Do</span>
            <h2>Comprehensive ABA Services</h2>
            <p>{services.intro}</p>
          </div>
          <div className="split-section">
            <div className="split-image">
              <Image
                src="/images/clinic-interior.png"
                alt="ABA Solutions clinic interior"
                width={560}
                height={400}
                className="rounded-img"
              />
            </div>
            <div className="split-content">
              <div className="service-item">
                <span className="service-number">01</span>
                <div>
                  <h3>{services.assessment.title}</h3>
                  <p>{services.assessment.description}</p>
                  <div className="service-tags">
                    {services.assessment.tools.map((tool, i) => (
                      <span key={i} className="badge badge-blue">{tool}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="service-item">
                <span className="service-number">02</span>
                <div>
                  <h3>{services.treatment.title}</h3>
                  <p>{services.treatment.description}</p>
                </div>
              </div>
              <div className="service-item">
                <span className="service-number">03</span>
                <div>
                  <h3>{services.schedule.title}</h3>
                  <p>{services.schedule.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment offerings grid */}
      <section className="section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Programs</span>
            <h2>Treatment Services</h2>
          </div>
          <div className="offerings-home-grid">
            {services.treatment.offerings.map((offering, i) => (
              <div key={i} className="offering-card">
                <span className="offering-check" aria-hidden="true">✓</span>
                <span>{offering}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/services" className="btn btn-primary">View All Services →</Link>
          </div>
        </div>
      </section>

      {/* Locations with clinic photo */}
      <section className="section">
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

      {/* Team — with actual photos */}
      <section className="section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Team</span>
            <h2>Meet Our Leadership</h2>
            <p>Experienced BCBAs and RBTs dedicated to helping your family thrive.</p>
          </div>
          <div className="team-feature-grid">
            {visibleTeam.slice(0, 2).map((member, i) => {
              const photoMap = {
                'Holly Bennett': '/images/holly-bennett.jpg',
                'Ludmila Costenco': '/images/ludmila-costenco.png',
                'Lauren Nittinger': '/images/lauren-nittinger.png',
                'Amy Furlow': '/images/amy-furlow.jpg',
                'Ashley Holdridge': '/images/ashley-holdridge.jpg',
                'Wendy Moreira': '/images/wendy-moreira.png',
                'Katy Noll': '/images/katy-noll.png',
              };
              const hasPhoto = photoMap[member.name];
              return (
                <div key={i} className="team-feature-card">
                  <div className="team-feature-photo">
                    {hasPhoto ? (
                      <Image
                        src={hasPhoto}
                        alt={member.name}
                        width={280}
                        height={320}
                        className="team-photo-img"
                        style={{ objectFit: 'cover', objectPosition: 'top' }}
                      />
                    ) : (
                      <div className="team-avatar-lg" aria-hidden="true">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                  </div>
                  <div className="team-feature-info">
                    <h3>{member.name}</h3>
                    <p className="team-feature-title">{member.title}</p>
                    <span className="badge badge-blue">{member.role}</span>
                    <p className="team-feature-bio">{member.bio.slice(0, 200)}...</p>
                    <Link href="/about" className="btn btn-outline">Read More</Link>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Link href="/about" className="btn btn-outline">View Full Team →</Link>
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
