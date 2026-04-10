'use client';
import Link from 'next/link';
import '../pages.css';

export default function PortalPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Secure Access</span>
          <h1>Patient Portal</h1>
          <p className="page-hero-text">
            Access your appointments, documents, and intake forms securely.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="portal-container">
          <div className="card portal-card">
            <div className="portal-icon">🔐</div>
            <h2>Sign In</h2>
            <p style={{ color: 'var(--color-text-light)', marginBottom: 'var(--space-6)' }}>
              Sign in with your Google or Microsoft account. Two-factor authentication is required for your security.
            </p>

            <button
              className="btn btn-primary btn-lg"
              style={{ width: '100%', marginBottom: 'var(--space-3)' }}
              onClick={() => alert('Supabase OAuth integration coming in Phase 2')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '0.5rem' }}>
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>

            <button
              className="btn btn-outline btn-lg"
              style={{ width: '100%' }}
              onClick={() => alert('Supabase OAuth integration coming in Phase 2')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '0.5rem' }}>
                <path d="M11.4 24H0V11.4h11.4V24zM24 24H12.6V11.4H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z"/>
              </svg>
              Continue with Microsoft
            </button>

            <div className="portal-divider">or</div>

            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
              Don&apos;t have an account?{' '}
              <Link href="/contact" style={{ fontWeight: 600 }}>
                Contact us to get started
              </Link>
            </p>
          </div>

          <div style={{ marginTop: 'var(--space-8)' }}>
            <h3 style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>Portal Features</h3>
            <div className="card">
              <ul className="portal-features">
                <li><span>📅</span> Book parent training appointments with your BCBA</li>
                <li><span>📄</span> Upload and share documents securely (HIPAA-compliant)</li>
                <li><span>📝</span> Complete intake forms online</li>
                <li><span>🔔</span> Receive appointment reminders</li>
                <li><span>📊</span> View your child&apos;s treatment timeline</li>
                <li><span>🔒</span> Multi-factor authentication for your security</li>
              </ul>
            </div>
          </div>

          <p style={{ marginTop: 'var(--space-6)', fontSize: '0.8rem', color: 'var(--color-text-muted)', textAlign: 'center' }}>
            🔒 This portal is HIPAA-compliant. All data is encrypted at rest and in transit. Your information is never shared without your consent.
          </p>
        </div>
      </section>
    </>
  );
}
