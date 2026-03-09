import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
      title: 'Address',
      content: '#1245, 27th Main Rd, HSR Layout, Sector 2, Bangalore 560102, INDIA',
      link: null
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
      title: 'Phone',
      content: '+91 9772635332',
      link: 'tel:+919772635332'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
      title: 'Alternate Phone',
      content: '+91 9752337875',
      link: 'tel:+919752337875'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </svg>
      ),
      title: 'Email',
      content: 'info@codersbrain.com',
      link: 'mailto:info@codersbrain.com'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </svg>
      ),
      title: 'Alternate Email',
      content: 'sk@codersbrain.com',
      link: 'mailto:sk@codersbrain.com'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero" style={{ 
        minHeight: '50vh', 
        paddingTop: '120px',
        background: 'url(https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1920&auto=format&fit=crop) center/cover'
      }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text" style={{ maxWidth: '800px', textAlign: 'center', margin: '0 auto' }}>
            <h1>Contact Us</h1>
            <p style={{ fontSize: '18px', marginBottom: '40px' }}>
              Get in touch with us. We'd love to hear from you and discuss how we can help with your tech talent needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="about" style={{ background: 'white' }}>
        <div className="about-container">
          <div className="about-text">
            <h2>Send Us a Message</h2>
            <p style={{ marginBottom: '32px' }}>
              Fill out the form below and we'll get back to you as soon as possible. Our team is ready to help you with your technology needs.
            </p>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '14px' }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius)',
                      border: '1px solid var(--gray-400)',
                      fontSize: '15px',
                      outline: 'none',
                      transition: 'border-color 0.3s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--blue-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--gray-400)'}
                  />
                </div>
                <div>
                  <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '14px' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius)',
                      border: '1px solid var(--gray-400)',
                      fontSize: '15px',
                      outline: 'none',
                      transition: 'border-color 0.3s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--blue-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--gray-400)'}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label htmlFor="phone" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '14px' }}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius)',
                      border: '1px solid var(--gray-400)',
                      fontSize: '15px',
                      outline: 'none',
                      transition: 'border-color 0.3s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--blue-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--gray-400)'}
                  />
                </div>
                <div>
                  <label htmlFor="company" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '14px' }}>
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius)',
                      border: '1px solid var(--gray-400)',
                      fontSize: '15px',
                      outline: 'none',
                      transition: 'border-color 0.3s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--blue-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--gray-400)'}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '14px' }}>
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius)',
                    border: '1px solid var(--gray-400)',
                    fontSize: '15px',
                    outline: 'none',
                    transition: 'border-color 0.3s',
                    background: 'white'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--blue-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--gray-400)'}
                >
                  <option value="">Select a service</option>
                  <option value="consulting">IT Consulting</option>
                  <option value="staffing">Permanent & Contract Staffing</option>
                  <option value="software">Software Development</option>
                  <option value="augmentation">Staff Augmentation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '14px' }}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius)',
                    border: '1px solid var(--gray-400)',
                    fontSize: '15px',
                    outline: 'none',
                    transition: 'border-color 0.3s',
                    resize: 'vertical',
                    fontFamily: 'inherit'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--blue-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--gray-400)'}
                />
              </div>

              {submitStatus === 'success' && (
                <div style={{
                  padding: '12px 16px',
                  background: 'var(--blue-pale)',
                  color: 'var(--blue-primary)',
                  borderRadius: 'var(--radius)',
                  fontSize: '14px',
                  fontWeight: 600
                }}>
                  ✓ Thank you! Your message has been sent. We'll get back to you soon.
                </div>
              )}

              <button 
                type="submit" 
                className="btn-primary"
                disabled={isSubmitting}
                style={{ 
                  alignSelf: 'flex-start',
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
            </form>
          </div>

          <div className="about-image">
            <div style={{ 
              background: 'var(--gray-light)', 
              padding: '40px', 
              borderRadius: 'var(--radius)',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '32px'
            }}>
              <div>
                <h3 style={{ marginBottom: '24px', fontSize: '24px' }}>Contact Information</h3>
                <p style={{ color: 'var(--gray-text)', marginBottom: '32px' }}>
                  Reach out to us through any of these channels. We're here to help!
                </p>
              </div>

              {contactInfo.map((info, index) => (
                <div key={index} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: 'var(--blue-primary)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    flexShrink: 0
                  }}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '4px', fontSize: '16px', fontWeight: 600 }}>
                      {info.title}
                    </h4>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        style={{ 
                          color: 'var(--gray-text)', 
                          textDecoration: 'none',
                          fontSize: '15px',
                          transition: 'color 0.3s'
                        }}
                        onMouseEnter={(e) => e.target.style.color = 'var(--blue-primary)'}
                        onMouseLeave={(e) => e.target.style.color = 'var(--gray-text)'}
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p style={{ color: 'var(--gray-text)', fontSize: '15px', margin: 0 }}>
                        {info.content}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="gallery" style={{ padding: '0', background: 'var(--gray-light)' }}>
        <div style={{ width: '100%', height: '400px', background: 'var(--gray-light)' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1234567890!2d77.641234567890!3d12.91234567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzQ0LjQiTiA3N8KwMzgnMjguNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: 'var(--radius)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="CodersBrain Location"
          ></iframe>
        </div>
      </section>

      {/* Office Hours */}
      <section className="testimonials">
        <div className="testimonials-container">
          <div className="section-header">
            <h2>Office Hours</h2>
            <p>We're available during these hours to assist you</p>
          </div>
          <div style={{
            maxWidth: '600px',
            margin: '40px auto',
            background: 'white',
            padding: '40px',
            borderRadius: 'var(--radius)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0', borderBottom: '1px solid var(--gray-light)' }}>
              <span style={{ fontWeight: 600 }}>Monday - Friday</span>
              <span style={{ color: 'var(--gray-text)' }}>9:00 AM - 6:00 PM IST</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0', borderBottom: '1px solid var(--gray-light)' }}>
              <span style={{ fontWeight: 600 }}>Saturday</span>
              <span style={{ color: 'var(--gray-text)' }}>10:00 AM - 4:00 PM IST</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0' }}>
              <span style={{ fontWeight: 600 }}>Sunday</span>
              <span style={{ color: 'var(--gray-text)' }}>Closed</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
