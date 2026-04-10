'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About Us' },
    { href: '/locations', label: 'Locations' },
    { href: '/resources', label: 'Resources' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-inner container">
        <Link href="/" className="navbar-brand">
          <span className="brand-icon">🧩</span>
          <span className="brand-text">
            <span className="brand-name">ABA Solutions</span>
            <span className="brand-sub">Applied Behavior Analysis</span>
          </span>
        </Link>

        <div className={`navbar-links ${isOpen ? 'navbar-links-open' : ''}`}>
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`navbar-link ${pathname === link.href ? 'navbar-link-active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/portal" className="btn btn-primary btn-nav">
            Patient Portal
          </Link>
        </div>

        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isOpen ? 'hamburger-open' : ''}`}></span>
        </button>
      </div>
    </nav>
  );
}
