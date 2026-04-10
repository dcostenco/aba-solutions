'use client';
import { useState, useEffect, useCallback } from 'react';
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

  // Close menu on route change
  useEffect(() => { setIsOpen(false); }, [pathname]);

  // Fix #8: Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('body-scroll-lock');
    } else {
      document.body.classList.remove('body-scroll-lock');
    }
    return () => document.body.classList.remove('body-scroll-lock');
  }, [isOpen]);

  // Fix #8: Close menu on Escape key
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape' && isOpen) {
      setIsOpen(false);
    }
  }, [isOpen]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About Us' },
    { href: '/locations', label: 'Locations' },
    { href: '/resources', label: 'Resources' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="navbar-inner container">
        <Link href="/" className="navbar-brand">
          <span className="brand-icon" aria-hidden="true">🧩</span>
          <span className="brand-text">
            <span className="brand-name">ABA Solutions</span>
            <span className="brand-sub">Applied Behavior Analysis</span>
          </span>
        </Link>

        <div
          className={`navbar-links ${isOpen ? 'navbar-links-open' : ''}`}
          role="menu"
          aria-hidden={!isOpen ? 'true' : undefined}
        >
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`navbar-link ${pathname === link.href ? 'navbar-link-active' : ''}`}
              aria-current={pathname === link.href ? 'page' : undefined}
              role="menuitem"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/portal" className="btn btn-primary btn-nav" role="menuitem">
            Patient Portal
          </Link>
        </div>

        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <span className={`hamburger ${isOpen ? 'hamburger-open' : ''}`}></span>
        </button>
      </div>
    </nav>
  );
}
