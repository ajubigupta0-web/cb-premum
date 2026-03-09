import { Link } from 'react-router-dom';

const Careers = () => {

  const benefits = [
    { 
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      ), 
      title: 'Competitive Salary', 
      desc: 'Market-competitive compensation packages' 
    },
    { 
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
      ), 
      title: 'Learning & Development', 
      desc: 'Continuous learning opportunities and training' 
    },
    { 
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
          <path d="M21 3v5h-5"></path>
          <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
          <path d="M3 21v-5h5"></path>
        </svg>
      ), 
      title: 'Flexible Time Off', 
      desc: 'Generous leave policy and work-life balance' 
    },
    { 
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      ), 
      title: 'Remote Work Options', 
      desc: 'Flexible work arrangements' 
    },
    { 
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      ), 
      title: 'Career Growth', 
      desc: 'Clear career paths and advancement opportunities' 
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero" style={{ 
        minHeight: '50vh', 
        paddingTop: '120px',
        background: 'url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&auto=format&fit=crop) center/cover'
      }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text" style={{ maxWidth: '800px', textAlign: 'center', margin: '0 auto' }}>
            <h1>Join Our Team</h1>
            <p style={{ fontSize: '18px', marginBottom: '40px' }}>
              Be part of something great. Help us transform how tech talent is acquired and managed.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="features">
        <div className="features-container">
          <div className="section-header">
            <h2>Why Work at CodersBrain?</h2>
            <p>Join a team that's passionate about technology, innovation, and making a difference</p>
          </div>
          <div className="features-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {benefit.icon}
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="about" style={{ background: 'white' }}>
        <div className="about-container">
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop" alt="Company Culture" />
          </div>
          <div className="about-text">
            <h2>Our Culture</h2>
            <p>
              At CodersBrain, we believe in creating an environment where everyone can thrive. We value diversity, innovation, and collaboration. Our team is made up of passionate individuals who are committed to excellence and continuous learning.
            </p>
            <p>
              We foster a culture of open communication, where ideas are welcomed and everyone has a voice. Whether you're working on client projects or contributing to internal initiatives, you'll have the opportunity to make a real impact.
            </p>
            <div className="about-features">
              <div className="about-feature-tag">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                Diverse & Inclusive
              </div>
              <div className="about-feature-tag">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                </svg>
                Innovation-Driven
              </div>
              <div className="about-feature-tag">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                Collaborative
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings - Intellohire Embedded Page */}
      <section className="pricing" style={{ background: 'var(--gray-light)' }}>
        <div className="features-container">
          <div className="section-header">
            <h2>Open Positions</h2>
            <p>Browse and apply to our latest opportunities through our Intellohire careers portal</p>
          </div>
          <div
            style={{
              marginTop: '32px',
              background: '#ffffff',
              borderRadius: 'var(--radius)',
              boxShadow: '0 12px 40px rgba(0,0,0,0.08)',
              overflow: 'hidden',
              border: '1px solid var(--gray-light)'
            }}
          >
            <iframe
              src="https://app.intellohire.com/public/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyZXNvdXJjZSI6eyJvcmdhbml6YXRpb24iOjgwMn19.ocFqMtPkmk_u0ZZDi2P1RufpRytaUVgVdVusAj8ELCQ/career-page"
              style={{ width: '100%', height: '180rem', border: 'none', overflow: 'hidden' }}
              allowTransparency
              scrolling="no"
              frameBorder="0"
              title="CodersBrain Careers"
            />
          </div>
        </div>
      </section>

      {/* Internship Program */}
      <section className="impact">
        <div className="impact-container">
          <div className="impact-text">
            <h2>Internship Program</h2>
            <p>
              Are you a student or recent graduate looking to kickstart your career in tech? Our internship program offers hands-on experience, mentorship, and the opportunity to work on real-world projects.
            </p>
            <ul style={{
              margin: '24px 0 32px',
              paddingLeft: '20px',
              color: 'rgba(255,255,255,0.95)',
              lineHeight: 1.8
            }}>
              <li><strong>Real Projects:</strong> Work on actual client projects and build your portfolio</li>
              <li><strong>Mentorship:</strong> Learn from experienced professionals in the industry</li>
              <li><strong>Flexible Schedule:</strong> Balance your studies with practical experience</li>
              <li><strong>Career Path:</strong> Many interns transition to full-time positions</li>
            </ul>
            <Link to="/contact" className="btn-primary" style={{ background: 'white', color: 'var(--blue-primary)' }}>
              Apply for Internship
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
          <div className="impact-image">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop" alt="Internship Program" />
          </div>
        </div>
      </section>

    </>
  );
};

export default Careers;
