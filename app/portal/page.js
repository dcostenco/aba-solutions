'use client';
import { useState } from 'react';
import Link from 'next/link';
import '../pages.css';

export default function PortalPage() {
  const [showToast, setShowToast] = useState(false);

  const handleOAuthClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

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
            <div className="portal-icon" aria-hidden="true">🔐</div>
            <h2>Sign In</h2>
            <p className="color-light mb-6">
              Sign in with your Google or Microsoft account. Two-factor authentication is required for your security.
            </p>

            <button
              className="btn btn-primary btn-lg w-full mb-3"
              onClick={handleOAuthClick}
              disabled={showToast}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>

            <button
              className="btn btn-outline btn-lg w-full"
              onClick={handleOAuthClick}
              disabled={showToast}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M11.4 24H0V11.4h11.4V24zM24 24H12.6V11.4H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z"/>
              </svg>
              Continue with Microsoft
            </button>

            {showToast && (
              <div className="portal-toast" role="alert">
                Patient Portal launching soon. Contact us to get early access.
              </div>
            )}

            <div className="portal-divider">or</div>

            <p className="text-xs color-muted">
              Don&apos;t have an account?{' '}
              <Link href="/contact" className="portal-contact-link">
                Contact us to get started
              </Link>
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-center mb-6">Portal Features</h3>
            <div className="card">
              <ul className="portal-features">
                <li><span aria-hidden="true">📅</span> Book parent training appointments with your BCBA</li>
                <li><span aria-hidden="true">📄</span> Upload and share documents securely (HIPAA-compliant)</li>
                <li><span aria-hidden="true">📝</span> Complete intake forms online</li>
                <li><span aria-hidden="true">🔔</span> Receive appointment reminders</li>
                <li><span aria-hidden="true">📊</span> View your child&apos;s treatment timeline</li>
                <li><span aria-hidden="true">🔒</span> Multi-factor authentication for your security</li>
              </ul>
            </div>
          </div>

          <p className="mt-6 text-xxs color-muted text-center">
            🔒 This portal is HIPAA-compliant. All data is encrypted at rest and in transit. Your information is never shared without your consent.
          </p>
        </div>
      </section>
    </>
  );
}
