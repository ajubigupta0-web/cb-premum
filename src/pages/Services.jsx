import { useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceModal from '../components/ServiceModal';

const Services = () => {
  const [serviceModal, setServiceModal] = useState({ isOpen: false, type: null });

  const showServiceDetail = (serviceType) => {
    setServiceModal({ isOpen: true, type: serviceType });
  };

  const closeServiceDetail = () => {
    setServiceModal({ isOpen: false, type: null });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero" style={{ 
        minHeight: '50vh', 
        paddingTop: '120px',
        background: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&auto=format&fit=crop) center/cover'
      }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text" style={{ maxWidth: '800px', textAlign: 'center', margin: '0 auto' }}>
            <h1>Our Core Services</h1>
            <p style={{ fontSize: '18px', marginBottom: '40px' }}>
              Comprehensive IT solutions tailored to your business needs. From strategic consulting to full-scale development and staff augmentation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="features">
        <div className="features-container">
          <div className="section-header">
            <h2>What We Offer</h2>
            <p>
              CodersBrain delivers complete end-to-end technology solutions. We combine deep domain expertise with flexible engagement models so you get exactly the support you need, when you need it.
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card" onClick={() => showServiceDetail('consulting')} style={{ cursor: 'pointer' }}>
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                </svg>
              </div>
              <h3>IT Consulting</h3>
              <p>Strategic technology consulting that helps you make informed decisions, optimize your IT infrastructure, and drive digital transformation. Save 70-75% on costs while achieving your business objectives.</p>
            </div>
            <div className="feature-card" onClick={() => showServiceDetail('staffing')} style={{ cursor: 'pointer' }}>
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3>Permanent & Contract Staffing</h3>
              <p>Access to 700+ pre-vetted technology experts. Rapid recruitment process with 72-hour average delivery time. Permanent placements, contract staffing, and contract-to-hire options.</p>
            </div>
            <div className="feature-card" onClick={() => showServiceDetail('software')} style={{ cursor: 'pointer' }}>
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h3>Software Development</h3>
              <p>Complete end-to-end software development solutions from concept to deployment. Custom web applications, mobile apps, enterprise solutions, and cloud-native applications.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
                </svg>
              </div>
              <h3>Cloud & DevOps</h3>
              <p>Cloud migration, architecture consulting, and DevOps implementation. We help you modernize your infrastructure and streamline your development processes.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="10" rx="2"></rect>
                  <circle cx="12" cy="16" r="1"></circle>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <h3>AI & Data Engineering</h3>
              <p>Leverage artificial intelligence and machine learning to transform your business. Data engineering, analytics, and AI-powered solutions tailored to your needs.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
              </div>
              <h3>Staff Augmentation</h3>
              <p>Scale your team quickly with our staff augmentation services. Integrate our developers seamlessly with your existing teams, tools, and workflows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="pricing" style={{ background: 'var(--gray-light)' }}>
        <div className="pricing-container">
          <div className="pricing-text">
            <h2>Why Choose Our Services</h2>
            <p>
              With excellent analysis, strategic, and technical skills, CodersBrain provides you talented on-demand developers that take your idea beyond your wildest dreams. Our team quickly understands your unique requirements and works closely with your in-house team to deliver excellence at every touchpoint.
            </p>
            <div className="pricing-options" style={{ gridTemplateColumns: '1fr' }}>
              <div className="pricing-option" onClick={() => showServiceDetail('consulting')}>
                <div className="pricing-option-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                  </svg>
                </div>
                <h4>IT Consulting</h4>
                <p style={{ fontSize: '14px', marginTop: '8px', opacity: 0.8 }}>
                  Strategic technology planning, infrastructure optimization, and digital transformation
                </p>
              </div>
              <div className="pricing-option" onClick={() => showServiceDetail('staffing')}>
                <div className="pricing-option-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h4>Permanent & Contract Staffing</h4>
                <p style={{ fontSize: '14px', marginTop: '8px', opacity: 0.8 }}>
                  Access to 700+ experts with rapid 72-hour recruitment process
                </p>
              </div>
              <div className="pricing-option" onClick={() => showServiceDetail('software')}>
                <div className="pricing-option-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <h4>Software Development</h4>
                <p style={{ fontSize: '14px', marginTop: '8px', opacity: 0.8 }}>
                  End-to-end development from concept to deployment and maintenance
                </p>
              </div>
            </div>
            <Link to="/contact" className="btn-primary" style={{ marginTop: '32px' }}>
              Get a Quote
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
          <div className="pricing-image">
            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&fit=crop" alt="Our Services" />
            <div className="pricing-callout">
              <h3>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 21h6"></path>
                  <path d="M12 3v18"></path>
                  <path d="M3 12h18"></path>
                  <path d="M12 3a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5 5 5 0 0 0 5-5V8a5 5 0 0 0-5-5z"></path>
                </svg>
                Flexible Engagement Models
              </h3>
              <p>Choose from project-based, retainer, or dedicated team models that fit your business needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="impact">
        <div className="impact-container">
          <div className="impact-image">
            <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&auto=format&fit=crop" alt="Our Process" />
          </div>
          <div className="impact-text">
            <h2>Our Service Delivery Process</h2>
            <p>Our technology-enabled process follows three clear steps that keep every stakeholder aligned and every project on track for success.</p>
            <ul style={{
              margin: '24px 0 32px',
              paddingLeft: '20px',
              color: 'rgba(255,255,255,0.95)',
              lineHeight: 1.8
            }}>
              <li><strong>01. Discovery & Analysis:</strong> We dive deep into your business goals, technical landscape, and requirements to define exactly what success looks like.</li>
              <li><strong>02. Solution Design:</strong> We design tailored solutions, select the right talent, and create a roadmap that aligns with your objectives.</li>
              <li><strong>03. Execution & Support:</strong> We deliver with excellence, provide ongoing support, and ensure continuous improvement throughout the engagement.</li>
            </ul>
            <Link to="/contact" className="btn-primary" style={{ background: 'white', color: 'var(--blue-primary)' }}>
              Start Your Project
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="testimonials">
        <div className="testimonials-container">
          <div className="section-header">
            <h2>Ready to Get Started?</h2>
            <p>Let's discuss how CodersBrain can help transform your technology initiatives</p>
          </div>
          <div style={{ marginTop: '40px', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary">
              Contact Us
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <a href="tel:+919772635332" className="btn-primary" style={{ background: 'var(--gray-light)', color: 'var(--gray-dark)' }}>
              Call Now
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <ServiceModal 
        isOpen={serviceModal.isOpen} 
        serviceType={serviceModal.type} 
        onClose={closeServiceDetail} 
      />
    </>
  );
};

export default Services;
