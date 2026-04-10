'use client';
import { useState } from 'react';
import content from '../data/content.json';
import '../pages.css';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const { siteVars } = content;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // Send form data to mailto link as a fallback until backend is wired up
    const subject = encodeURIComponent(data.subject || 'Contact Form Submission');
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || 'N/A'}\n\nMessage:\n${data.message}`
    );
    window.location.href = `mailto:${siteVars.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Get in Touch</span>
          <h1>Contact Us</h1>
          <p className="page-hero-text">
            We would love to hear from you. Reach out to learn how ABA Solutions can support your family.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div>
              <h2>Send Us a Message</h2>
              {submitted ? (
                <div className="card text-center contact-success">
                  <div className="contact-success-icon" aria-hidden="true">✅</div>
                  <h3>Thank You!</h3>
                  <p>Your email client should have opened with the message. If it didn&apos;t, please email us directly at <a href={`mailto:${siteVars.email}`}>{siteVars.email}</a>.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-name">Full Name *</label>
                    <input className="form-input" id="contact-name" name="name" type="text" required placeholder="Your full name" autoComplete="name" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-email">Email Address *</label>
                    <input className="form-input" id="contact-email" name="email" type="email" required placeholder="your@email.com" autoComplete="email" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-phone">Phone Number</label>
                    <input className="form-input" id="contact-phone" name="phone" type="tel" placeholder={siteVars.phone} autoComplete="tel" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-subject">Subject *</label>
                    <input className="form-input" id="contact-subject" name="subject" type="text" required placeholder="How can we help?" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-message">Message *</label>
                    <textarea className="form-textarea" id="contact-message" name="message" required placeholder="Tell us about your needs..." />
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg w-full" id="contact-submit">
                    Send Message
                  </button>
                </form>
              )}
            </div>

            <div>
              <h2>Contact Information</h2>
              <div className="contact-info-item">
                <span className="contact-info-icon" aria-hidden="true">📧</span>
                <div>
                  <div className="contact-info-label">Email</div>
                  <div className="contact-info-value">
                    <a href={`mailto:${siteVars.email}`}>{siteVars.email}</a>
                  </div>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-icon" aria-hidden="true">📱</span>
                <div>
                  <div className="contact-info-label">Phone</div>
                  <div className="contact-info-value">
                    <a href={`tel:${siteVars.phone.replace(/[^0-9+]/g, '')}`}>{siteVars.phone}</a>
                  </div>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-icon" aria-hidden="true">🏥</span>
                <div>
                  <div className="contact-info-label">Parkville Clinic</div>
                  <div className="contact-info-value">Parkville, MD</div>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-icon" aria-hidden="true">🏥</span>
                <div>
                  <div className="contact-info-label">Owings Mills Clinic</div>
                  <div className="contact-info-value">Owings Mills, MD</div>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-icon" aria-hidden="true">📘</span>
                <div>
                  <div className="contact-info-label">Facebook</div>
                  <div className="contact-info-value">
                    <a href={siteVars.facebook} target="_blank" rel="noopener noreferrer">
                      Follow us on Facebook →
                    </a>
                  </div>
                </div>
              </div>

              <div className="card mt-8 text-center bg-alt">
                <h3>🎙️ Our Podcast</h3>
                <p className="text-sm">The Grit and Grind of Autism — Finding Light Along the Journey</p>
                <a
                  href={siteVars.podcast}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  Listen Now →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
