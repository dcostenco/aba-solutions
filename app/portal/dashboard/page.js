'use client';
import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '../../lib/supabase-browser';
import '../../pages.css';

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const supabaseRef = useRef(null);

  // Create client once and store in ref to avoid re-render loops
  if (!supabaseRef.current) {
    supabaseRef.current = createClient();
  }
  const supabase = supabaseRef.current;

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.replace('/portal');
        return;
      }
      setUser(user);
      setLoading(false);
    };
    getUser();
  }, [router, supabase]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.replace('/portal');
  };

  if (loading) {
    return (
      <section className="section">
        <div className="portal-container text-center">
          <div className="btn-spinner-lg"></div>
          <p className="mt-4 color-muted">Loading your portal...</p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Welcome Back</span>
          <h1>Patient Dashboard</h1>
          <p className="page-hero-text">
            Welcome, {user?.user_metadata?.full_name || user?.email}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            <div className="card card-interactive dashboard-card">
              <div className="dashboard-icon" aria-hidden="true">📅</div>
              <h3>Appointments</h3>
              <p className="color-light text-sm">Book and manage parent training sessions with your BCBA.</p>
              <span className="badge badge-blue">Coming Soon</span>
            </div>

            <div className="card card-interactive dashboard-card">
              <div className="dashboard-icon" aria-hidden="true">📄</div>
              <h3>Documents</h3>
              <p className="color-light text-sm">Upload and securely share documents with your care team.</p>
              <span className="badge badge-blue">Coming Soon</span>
            </div>

            <div className="card card-interactive dashboard-card">
              <div className="dashboard-icon" aria-hidden="true">📝</div>
              <h3>Intake Forms</h3>
              <p className="color-light text-sm">Complete required intake and consent forms online.</p>
              <span className="badge badge-blue">Coming Soon</span>
            </div>
          </div>

          <div className="grid-2 mt-8">
            <div className="card dashboard-card">
              <div className="dashboard-icon" aria-hidden="true">👤</div>
              <h3>Your Account</h3>
              <div className="dashboard-info">
                <div className="dashboard-info-row">
                  <span className="dashboard-info-label">Email</span>
                  <span>{user?.email}</span>
                </div>
                <div className="dashboard-info-row">
                  <span className="dashboard-info-label">Provider</span>
                  <span className="badge badge-green">{user?.app_metadata?.provider || 'email'}</span>
                </div>
                <div className="dashboard-info-row">
                  <span className="dashboard-info-label">2FA</span>
                  <span className="badge badge-blue">Required</span>
                </div>
              </div>
            </div>

            <div className="card dashboard-card">
              <div className="dashboard-icon" aria-hidden="true">📊</div>
              <h3>Treatment Timeline</h3>
              <p className="color-light text-sm">Your child&apos;s treatment progress will appear here once services begin.</p>
              <span className="badge badge-blue">Coming Soon</span>
            </div>
          </div>

          <div className="text-center mt-8">
            <button onClick={handleSignOut} className="btn btn-outline">
              Sign Out
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
