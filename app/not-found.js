import Link from 'next/link';
import './pages.css';

export default function NotFound() {
  return (
    <section className="section">
      <div className="portal-container text-center">
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔍</div>
        <h1>Page Not Found</h1>
        <p className="color-light">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been moved or no longer exists.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
          <Link href="/" className="btn btn-primary">Go Home</Link>
          <Link href="/contact" className="btn btn-outline">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
