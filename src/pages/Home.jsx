import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ServiceModal from '../components/ServiceModal';

const Home = () => {
  const [serviceModal, setServiceModal] = useState({ isOpen: false, type: null });
  const [featuresSlide, setFeaturesSlide] = useState(0);
  const [testimonialsSlide, setTestimonialsSlide] = useState(0);
  const featuresRef = useRef(null);
  const testimonialsRef = useRef(null);

  const featuresCount = 6;
  const testimonialsCount = 6;

  const showServiceDetail = (serviceType) => {
    setServiceModal({ isOpen: true, type: serviceType });
  };

  const closeServiceDetail = () => {
    setServiceModal({ isOpen: false, type: null });
  };

  useEffect(() => {
    const handleFeaturesScroll = () => {
      if (featuresRef.current) {
        const scrollLeft = featuresRef.current.scrollLeft;
        const cardWidth = featuresRef.current.offsetWidth - 24; // Account for gap
        const currentSlide = Math.round(scrollLeft / cardWidth);
        setFeaturesSlide(currentSlide);
      }
    };

    const handleTestimonialsScroll = () => {
      if (testimonialsRef.current) {
        const scrollLeft = testimonialsRef.current.scrollLeft;
        const cardWidth = testimonialsRef.current.offsetWidth - 32; // Account for gap
        const currentSlide = Math.round(scrollLeft / cardWidth);
        setTestimonialsSlide(currentSlide);
      }
    };

    const featuresEl = featuresRef.current;
    const testimonialsEl = testimonialsRef.current;

    if (featuresEl) {
      featuresEl.addEventListener('scroll', handleFeaturesScroll);
    }
    if (testimonialsEl) {
      testimonialsEl.addEventListener('scroll', handleTestimonialsScroll);
    }

    return () => {
      if (featuresEl) {
        featuresEl.removeEventListener('scroll', handleFeaturesScroll);
      }
      if (testimonialsEl) {
        testimonialsEl.removeEventListener('scroll', handleTestimonialsScroll);
      }
    };
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero" id="home">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              On-demand <span style={{ color: 'var(--blue-primary)' }}>talent</span>
              <br />
              on-point <span style={{ color: 'var(--blue-primary)' }}>software solutions</span>
            </h1>
            <p>
              Connect with elite developers and build exceptional products. From staffing to full-scale development, we deliver the talent and expertise your business needs to thrive.
            </p>
            
            {/* Stats Section */}
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-number">796+</div>
                <div className="hero-stat-label">Projects</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">119+</div>
                <div className="hero-stat-label">Happy Customers</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">398+</div>
                <div className="hero-stat-label">Consultants</div>
              </div>
            </div>

            <a href="https://codersbrain.ai" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Enroll Now
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features" id="amenities">
        <div className="features-container">
          <div className="section-header">
            <h2>Why Choose CodersBrain</h2>
            <p>
              With excellent analysis, strategic, and technical skills, CodersBrain provides you talented on-demand developers that take your idea beyond your wildest dreams. Our team quickly understands your unique requirements and works closely with your in-house team to deliver excellence at every touchpoint.
            </p>
          </div>
          <div className="features-grid" ref={featuresRef}>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3>Trusted by Industry Leaders</h3>
              <p>CodersBrain has built strong partnerships with leading companies through transparent processes and reliable delivery across 800+ successful projects.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  <line x1="8" y1="7" x2="16" y2="7"></line>
                  <line x1="8" y1="11" x2="16" y2="11"></line>
                </svg>
              </div>
              <h3>IIT-Backed Excellence</h3>
              <p>Founded by IIT Guwahati alumnus, we combine academic excellence with deep industry experience to deliver high-performance tech teams.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <h3>Seamless Team Integration</h3>
              <p>Our developers integrate smoothly with your existing teams, tools, and workflows so you can scale without friction.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
              </div>
              <h3>Complete Resource Freedom</h3>
              <p>You have full freedom to interview, select, and work with resources, ensuring every hire is the right fit for your culture and goals.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h3>700+ Expert Developers</h3>
              <p>Access a curated pool of specialists across web, mobile, cloud, AI/ML, AR/VR, and more to match any project requirement.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <h3>Rapid Talent Acquisition</h3>
              <p>Our streamlined recruitment process delivers qualified candidates quickly, reducing time-to-hire and accelerating delivery.</p>
            </div>
          </div>
          {/* Features Slider Dots - Mobile Only */}
          <div className="slider-dots features-dots">
            {Array.from({ length: featuresCount }).map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${index === featuresSlide ? 'active' : ''}`}
                onClick={() => {
                  if (featuresRef.current) {
                    const cardWidth = featuresRef.current.offsetWidth - 24;
                    featuresRef.current.scrollTo({
                      left: index * cardWidth,
                      behavior: 'smooth'
                    });
                  }
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about" id="about">
        <div className="about-container">
          <div className="about-text">
            <h2>On-Demand Tech Talent, Tailored For You</h2>
            <p>
              CodersBrain helps you build high-performing technology teams with ease. From single expert hires to fully managed squads, we provide vetted developers who integrate seamlessly with your business, understand your domain, and help you deliver products faster.
            </p>
            <div className="about-features">
              <div className="about-feature-tag">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44L2 10.5a2.5 2.5 0 0 1 2.5-2.5h5Z"></path>
                  <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44L22 10.5a2.5 2.5 0 0 0-2.5-2.5h-5Z"></path>
                </svg>
                Dedicated Tech Talent
              </div>
              <div className="about-feature-tag">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                Flexible Engagement Models
              </div>
            </div>
            <a href="#pricing" className="btn-primary">
              Learn More
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop" alt="Workspace" />
            <div className="about-callout">
              <h3>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                  <path d="M6 12h12"></path>
                  <path d="M6 16h12"></path>
                  <path d="M6 20h12"></path>
                  <path d="M6 8h12"></path>
                </svg>
                Anything You Need
              </h3>
              <p>From flexible plans to modern interiors, every detail is designed to help you focus on what truly matters — your work and growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="pricing" id="pricing">
        <div className="pricing-container">
          <div className="pricing-image">
            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&fit=crop" alt="Pricing" />
            <div className="pricing-callout">
              <h3>
                Friendly Price Package
              </h3>
              <p>Choose from flexible and affordable plans designed to match your work style.</p>
            </div>
          </div>
          <div className="pricing-text">
            <h2>Our Core Services</h2>
            <p>
              From strategic IT consulting to full-scale development and staff augmentation, CodersBrain delivers complete end-to-end technology solutions. We combine deep domain expertise with flexible engagement models so you get exactly the support you need, when you need it.
            </p>
            <div className="pricing-options">
              <div className="pricing-option" onClick={() => showServiceDetail('consulting')}>
                <div className="pricing-option-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                  </svg>
                </div>
                <h4>IT Consulting</h4>
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
              </div>
              <div className="pricing-option" onClick={() => showServiceDetail('software')}>
                <div className="pricing-option-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <h4>Software Development</h4>
              </div>
            </div>
            <Link to="/contact" className="btn-primary">
              Explore Services
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className="impact">
        <div className="impact-container">
          <div className="impact-image">
            <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&auto=format&fit=crop" alt="Impact" />
            <div className="footer-badge" style={{ marginTop: '24px', width: '50%' }}>
              <span className="footer-badge-tm">™</span>
              <span>Incredible</span>
              <span>Workplaces</span>
            </div>
          </div>
          <div className="impact-text">
            <h2>Our Working Process and Workplace</h2>
            <p>
              Our technology-enabled talent acquisition process follows three clear steps that keep every stakeholder aligned and every hire on track for success.
            </p>
            <ul style={{
              margin: '24px 0 32px',
              paddingLeft: '20px',
              color: 'rgba(255,255,255,0.95)',
              lineHeight: 1.8
            }}>
              <li><strong>01. Client Analysis:</strong> We dive deep into your business goals, technical landscape, and culture to define exactly what success looks like.</li>
              <li><strong>02. Candidate Assessment:</strong> We map the market, screen top talent, and evaluate skills, experience, and cultural fit.</li>
              <li><strong>03. Interview & Selection:</strong> We coordinate interviews and technical evaluations so you can confidently choose the right resources.</li>
            </ul>
            <Link to="/contact" className="btn-primary" style={{ background: 'white', color: 'var(--blue-primary)' }}>
              Discuss Your Hiring Needs
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* PARTNERS SECTION */}
      <section className="gallery" style={{ background: 'var(--gray-light)' }}>
        <div className="gallery-container">
          <div className="section-header">
            <h2>Our Partners</h2>
            <p>Trusted by leading enterprises and fast-growing companies across industries.</p>
          </div>
          <div className="partners-grid">
            <div className="partners-marquee">
              {[
                { name: 'Google', src: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
                { name: 'Microsoft', src: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
                { name: 'IBM', src: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
                { name: 'SAP', src: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg' },
                { name: 'Cisco', src: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg' },
                { name: 'Intel', src: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg' },
                { name: 'Salesforce', src: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg' },
                { name: 'Adobe', src: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg' },
                { name: 'Amazon', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
                { name: 'Apple', src: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
                { name: 'Meta', src: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
                { name: 'NVIDIA', src: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg' },
                { name: 'GitHub', src: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' },
                { name: 'Infosys', src: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' }
              ].concat([
                { name: 'Google', src: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
                { name: 'Microsoft', src: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
                { name: 'IBM', src: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
                { name: 'SAP', src: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg' },
                { name: 'Cisco', src: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg' },
                { name: 'Intel', src: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg' },
                { name: 'Salesforce', src: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg' },
                { name: 'Adobe', src: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg' },
                { name: 'Amazon', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
                { name: 'Apple', src: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
                { name: 'Meta', src: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
                { name: 'NVIDIA', src: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg' },
                { name: 'GitHub', src: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' },
                { name: 'Infosys', src: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' }
              ]).map((company, index) => (
              <div 
                key={index}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  padding: '20px',
                  background: 'white',
                  borderRadius: 'var(--radius)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  height: '120px',
                  transition: 'all 0.3s'
                }}
              >
                <img 
                  src={company.src} 
                  alt={company.name} 
                  style={{ 
                    maxWidth: '100%', 
                    maxHeight: '80px', 
                    width: 'auto', 
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'grayscale(100%) opacity(0.85)',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.filter = 'grayscale(0%) opacity(1)';
                    e.target.parentElement.style.transform = 'translateY(-4px)';
                    e.target.parentElement.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.filter = 'grayscale(100%) opacity(0.85)';
                    e.target.parentElement.style.transform = 'translateY(0)';
                    e.target.parentElement.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                  }}
                />
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="testimonials">
        <div className="testimonials-container">
          <div className="section-header">
            <h2>Happy Clients Say</h2>
            <p>Hear from our satisfied clients about their experience working with CodersBrain</p>
          </div>
          <div className="testimonials-slider" ref={testimonialsRef}>
            <div className="testimonial-content">
              <p className="testimonial-text">
                "The work that CodersBrain has been doing is tremendous. They are experts at conducting the proper searches and identifying the best candidates."
              </p>
              <div className="testimonial-author">
                <img src="https://i.pravatar.cc/150?img=12" alt="Manjunath GM" className="testimonial-avatar" />
                <div className="testimonial-info">
                  <h4>Manjunath GM</h4>
                  <p>Talent Acquisition Leader - AVP, Hex</p>
                </div>
              </div>
            </div>
            <div className="testimonial-content">
              <p className="testimonial-text">
                "CodersBrain has been instrumental in helping us scale our engineering team. Their candidates are top-notch and the recruitment process is incredibly smooth."
              </p>
              <div className="testimonial-author">
                <img src="https://i.pravatar.cc/150?img=33" alt="Sarah Johnson" className="testimonial-avatar" />
                <div className="testimonial-info">
                  <h4>Sarah Johnson</h4>
                  <p>CTO, TechStart Inc.</p>
                </div>
              </div>
            </div>
            <div className="testimonial-content">
              <p className="testimonial-text">
                "We've worked with CodersBrain for over 2 years now. Their IT consulting services helped us reduce costs by 70% while improving our infrastructure significantly."
              </p>
              <div className="testimonial-author">
                <img src="https://i.pravatar.cc/150?img=47" alt="Rajesh Kumar" className="testimonial-avatar" />
                <div className="testimonial-info">
                  <h4>Rajesh Kumar</h4>
                  <p>VP of Technology, Global Solutions</p>
                </div>
              </div>
            </div>
            <div className="testimonial-content">
              <p className="testimonial-text">
                "The software development team from CodersBrain integrated seamlessly with our existing team. They delivered our project on time and exceeded our expectations."
              </p>
              <div className="testimonial-author">
                <img src="https://i.pravatar.cc/150?img=51" alt="Emily Chen" className="testimonial-avatar" />
                <div className="testimonial-info">
                  <h4>Emily Chen</h4>
                  <p>Product Manager, Innovate Labs</p>
                </div>
              </div>
            </div>
            <div className="testimonial-content">
              <p className="testimonial-text">
                "CodersBrain's staff augmentation services have been a game-changer for us. We were able to quickly scale our team without the hassle of traditional hiring."
              </p>
              <div className="testimonial-author">
                <img src="https://i.pravatar.cc/150?img=68" alt="Michael Brown" className="testimonial-avatar" />
                <div className="testimonial-info">
                  <h4>Michael Brown</h4>
                  <p>Engineering Director, CloudFirst</p>
                </div>
              </div>
            </div>
            <div className="testimonial-content">
              <p className="testimonial-text">
                "IIT-backed excellence truly shows in their work. The quality of developers we've hired through CodersBrain is exceptional. Highly recommended!"
              </p>
              <div className="testimonial-author">
                <img src="https://i.pravatar.cc/150?img=27" alt="Priya Sharma" className="testimonial-avatar" />
                <div className="testimonial-info">
                  <h4>Priya Sharma</h4>
                  <p>Head of Engineering, DataViz</p>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonials Slider Dots - Mobile Only */}
          <div className="slider-dots testimonials-dots">
            {Array.from({ length: testimonialsCount }).map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${index === testimonialsSlide ? 'active' : ''}`}
                onClick={() => {
                  if (testimonialsRef.current) {
                    const cardWidth = testimonialsRef.current.offsetWidth - 32;
                    testimonialsRef.current.scrollTo({
                      left: index * cardWidth,
                      behavior: 'smooth'
                    });
                  }
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
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

export default Home;

