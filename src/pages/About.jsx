import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero" style={{ 
        minHeight: '50vh', 
        paddingTop: '120px',
        background: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&auto=format&fit=crop) center/cover'
      }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text" style={{ maxWidth: '800px', textAlign: 'center', margin: '0 auto' }}>
            <h1>About CodersBrain</h1>
            <p style={{ fontSize: '18px', marginBottom: '40px' }}>
              We've redefined the way people work by creating a space that blends comfort, creativity, and community.
            </p>
          </div>
        </div>
      </section>

      {/* About Our Company Section */}
      <section className="about">
        <div className="about-container">
          <div className="about-text">
            <h2>About Our Co-Working Place</h2>
            <p>
              A descriptive paragraph that tells clients how good you are and proves that you are the best choice that they've made. This paragraph is also for those who are looking out for a reliable co-working space. You can use a few enticing words and flaunt your capabilities that will attract future clients and encourage them to hire you right away. List down your expertise and experience to prove you are the best.
            </p>
            <p>
              CodersBrain was founded in 2015 by IIT Guwahati alumnus Mr. Sonu Kumar Gupta. We're on a mission to transform how tech talent is acquired in a fast-paced digital world. With over a decade of IT recruitment experience, we offer agile, scalable hiring solutions including contract staffing, contract-to-hire, and permanent placements.
            </p>
            <div className="about-features">
              <div className="about-feature-tag">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
                Mission-Driven
              </div>
              <div className="about-feature-tag">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 21h6"></path>
                  <path d="M12 3v18"></path>
                  <path d="M3 12h18"></path>
                  <path d="M12 3a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5 5 5 0 0 0 5-5V8a5 5 0 0 0-5-5z"></path>
                </svg>
                Innovation First
              </div>
              <div className="about-feature-tag">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                Client-Centric
              </div>
            </div>
            <Link to="/contact" className="btn-primary">
              Get In Touch
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop" alt="About CodersBrain" />
            <div className="about-callout">
              <h3>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                  <path d="M4 22h16"></path>
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                </svg>
                Excellence Since 2015
              </h3>
              <p>Over a decade of experience in transforming how tech talent is acquired and managed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="features" style={{ background: 'var(--gray-light)' }}>
        <div className="features-container">
          <div className="section-header">
            <h2>Our Story</h2>
            <p>From a vision to reality - building the future of tech talent acquisition</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                </svg>
              </div>
              <h3>Founded in 2015</h3>
              <p>Started by IIT Guwahati alumnus Mr. Sonu Kumar Gupta with a vision to revolutionize tech talent acquisition in India and beyond.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                  <polyline points="16 7 22 7 22 13"></polyline>
                </svg>
              </div>
              <h3>Rapid Growth</h3>
              <p>From a small startup to a trusted partner for 800+ successful projects, serving 119+ happy customers across industries.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <h3>Global Reach</h3>
              <p>Expanding our network of 700+ expert developers and 398+ consultants to serve clients worldwide with exceptional talent.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              <h3>IIT Excellence</h3>
              <p>Founded by IIT Guwahati alumnus, combining academic excellence with deep industry experience to deliver high-performance teams.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  <rect x="2" y="6" width="20" height="14" rx="2"></rect>
                </svg>
              </div>
              <h3>Industry Leaders</h3>
              <p>Trusted by leading enterprises and fast-growing companies through transparent processes and reliable delivery.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
              </div>
              <h3>Future Forward</h3>
              <p>Continuously evolving our services and expanding our capabilities to meet the changing needs of the tech industry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="impact">
        <div className="impact-container">
          <div className="impact-image">
            <img src="https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop" alt="Our Values" />
          </div>
          <div className="impact-text">
            <h2>Our Core Values</h2>
            <p>These principles guide everything we do and shape how we work with clients, candidates, and each other.</p>
            <ul style={{
              margin: '24px 0 32px',
              paddingLeft: '20px',
              color: 'rgba(255,255,255,0.95)',
              lineHeight: 1.8
            }}>
              <li><strong>Integrity:</strong> We believe in transparent, honest communication and ethical business practices in all our interactions.</li>
              <li><strong>Excellence:</strong> We strive for the highest quality in every project, ensuring client satisfaction and candidate success.</li>
              <li><strong>Innovation:</strong> We continuously adapt and evolve our processes to stay ahead of industry trends and client needs.</li>
              <li><strong>Partnership:</strong> We build long-term relationships based on trust, mutual respect, and shared success.</li>
            </ul>
            <Link to="/services" className="btn-primary" style={{ background: 'white', color: 'var(--blue-primary)' }}>
              Explore Our Services
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
