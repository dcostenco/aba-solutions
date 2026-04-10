import content from '../data/content.json';
import '../pages.css';

export const metadata = {
  title: 'About Us | ABA Solutions, LLC',
  description: 'Meet our team of experienced BCBAs and RBTs at ABA Solutions. Serving Maryland families since 2014.',
};

export default function AboutPage() {
  const { team } = content;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Our Team</span>
          <h1>Meet the ABA Solutions Team</h1>
          <p className="page-hero-text">
            Our team of Board Certified Behavior Analysts and Registered Behavior Technicians bring decades of combined experience helping families across Maryland.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {team.map((member, i) => (
            member.bio && (
              <div key={i} className="card team-detail-card mb-6">
                <div className="team-detail-avatar" aria-hidden="true">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="flex-wrap-center">
                    <h3 className="mb-0">{member.name}</h3>
                    <span className="badge badge-blue">{member.role}</span>
                  </div>
                  <p className="team-detail-meta">{member.title} &bull; {member.credentials}</p>
                  <p>{member.bio}</p>
                </div>
              </div>
            )
          ))}
        </div>
      </section>
    </>
  );
}
