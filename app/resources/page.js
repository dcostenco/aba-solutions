import content from '../data/content.json';
import '../pages.css';

export const metadata = {
  title: 'Resources | ABA Solutions, LLC',
  description: 'Helpful resources for families navigating ABA therapy, autism support, and community services in Maryland.',
};

export default function ResourcesPage() {
  const { resources } = content;

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
              <div key={i} className="card card-interactive resource-card">
                <div className="resource-icon" aria-hidden="true">{resource.icon}</div>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-link"
                >
                  {resource.linkText} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container text-center">
          <h2>Career Opportunities</h2>
          <p className="careers-desc color-light">
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
