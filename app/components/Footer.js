import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="brand-icon">🧩</span>
              <span>
                <strong>ABA Solutions, LLC</strong>
                <br />
                <small>Applied Behavior Analysis</small>
              </span>
            </div>
            <p className="footer-desc">
              Empowering families across Maryland through evidence-based ABA therapy since 2014.
            </p>
            <a
              href="https://www.facebook.com/ABA-Solutions-LLC-103423395523954/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
            >
              Facebook →
            </a>
          </div>

          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/services">Our Services</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/locations">Clinic Locations</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/portal">Patient Portal</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Our Services</h4>
            <ul className="footer-links">
              <li><Link href="/services">Assessment</Link></li>
              <li><Link href="/services">Parent Training</Link></li>
              <li><Link href="/services">Social Skills Groups</Link></li>
              <li><Link href="/services">FBA/BIP</Link></li>
              <li><Link href="/services">School Consultation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Locations</h4>
            <ul className="footer-links">
              <li><Link href="/locations">The Clinic at Parkville</Link></li>
              <li><Link href="/locations">The Clinic at Owings Mills</Link></li>
            </ul>
            <h4 className="footer-heading" style={{ marginTop: '1.5rem' }}>Careers</h4>
            <ul className="footer-links">
              <li>
                <a href="https://www.indeed.com/cmp/Aba-Solutions,-LLC-1/jobs" target="_blank" rel="noopener noreferrer">
                  View Openings on Indeed →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} ABA Solutions, LLC. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
