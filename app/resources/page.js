import Link from 'next/link';
import '../pages.css';

export const metadata = {
  title: 'Resources | ABA Solutions, LLC',
  description: 'Helpful resources for families navigating ABA therapy, autism support, and community services in Maryland.',
};

export default function ResourcesPage() {
  const resources = [
    {
      icon: '🎙️',
      title: 'Our Podcast',
      description: 'The Grit and Grind of Autism — Finding Light Along the Journey. Hosted by our team, sharing real stories and practical advice.',
      link: 'https://podcasts.apple.com/us/podcast/the-grit-and-grind-of-autism-finding-light-along-the-journey/id1616596035',
      linkText: 'Listen on Apple Podcasts →',
    },
    {
      icon: '🏥',
      title: 'Kennedy Krieger Institute',
      description: 'An internationally recognized institution dedicated to improving the lives of children with neurological conditions.',
      link: 'https://www.kennedykrieger.org/',
      linkText: 'Visit Website →',
    },
    {
      icon: '🧩',
      title: 'Autism Society of America',
      description: 'The Autism Society has been the leading source of trusted and reliable information about autism for more than 50 years.',
      link: 'https://autismsociety.org/',
      linkText: 'Visit Website →',
    },
    {
      icon: '📚',
      title: 'BACB - Behavior Analyst Certification Board',
      description: 'Learn about board certification standards and find certified behavior analysts in your area.',
      link: 'https://www.bacb.com/',
      linkText: 'Visit Website →',
    },
    {
      icon: '🏫',
      title: 'Maryland State Department of Education',
      description: 'Information about special education services, IEPs, and educational supports available in Maryland.',
      link: 'https://www.marylandpublicschools.org/',
      linkText: 'Visit Website →',
    },
    {
      icon: '🍎',
      title: 'Maryland Food Bank',
      description: 'ABA Solutions proudly supports the Maryland Food Bank. Join us in making a difference in our community.',
      link: 'https://mdfoodbank.org/',
      linkText: 'Learn More →',
    },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Helpful Links</span>
          <h1>Resources</h1>
          <p className="page-hero-text">
            Helpful resources for families navigating ABA therapy, autism support, and community services.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {resources.map((resource, i) => (
              <div key={i} className="card resource-card">
                <div style={{ fontSize: '2rem', marginBottom: 'var(--space-3)' }}>{resource.icon}</div>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-link"
                >
                  {resource.linkText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Career Opportunities</h2>
          <p style={{ maxWidth: '540px', margin: '0 auto var(--space-6)', color: 'var(--color-text-light)' }}>
            Join our team of dedicated professionals making a difference in the lives of children and families across Maryland.
          </p>
          <a
            href="https://www.indeed.com/cmp/Aba-Solutions,-LLC-1/jobs"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            View Openings on Indeed →
          </a>
        </div>
      </section>
    </>
  );
}
