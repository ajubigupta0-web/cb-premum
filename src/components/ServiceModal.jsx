import { useEffect } from 'react';

const serviceDetails = {
  consulting: {
    title: 'IT Consulting',
    description: 'Simplifying complexity, CodersBrain IT consultants create digital success by saving your 70-75% cost. Our strategic technology consulting helps you make informed decisions, optimize your IT infrastructure, and drive digital transformation that aligns with your business objectives.',
    features: [
      'Strategic technology planning and roadmap development',
      'IT infrastructure optimization and modernization',
      'Digital transformation consulting',
      'Cost reduction strategies (70-75% savings)',
      'Technology stack evaluation and recommendations',
      'Cloud migration and architecture consulting',
      'Security and compliance consulting',
      'Process improvement and automation'
    ]
  },
  staffing: {
    title: 'Permanent & Contract Staffing',
    description: 'Top potential employees (700+), expert in technology. Recruitment in a short period. We connect you with highly skilled professionals who become permanent members of your team, bringing expertise and commitment to drive long-term success.',
    features: [
      'Access to 700+ pre-vetted technology experts',
      'Rapid recruitment process (72 hours average)',
      'Permanent placement solutions',
      'Contract and contract-to-hire options',
      'Executive and leadership search',
      'Team augmentation services',
      'Cultural fit assessment',
      'Technical skill verification',
      '95% placement retention rate'
    ]
  },
  software: {
    title: 'Software Development',
    description: 'Complete end-to-end software development solutions from concept to deployment. We build custom software applications, web platforms, mobile apps, and enterprise solutions tailored to your business needs.',
    features: [
      'Custom web application development',
      'Mobile app development (iOS & Android)',
      'Enterprise software solutions',
      'API and microservices development',
      'Cloud-native application development',
      'Legacy system modernization',
      'Full-stack development services',
      'DevOps and CI/CD implementation',
      'Quality assurance and testing',
      'Post-deployment support and maintenance'
    ]
  }
};

const ServiceModal = ({ isOpen, serviceType, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !serviceType) return null;

  const service = serviceDetails[serviceType];
  if (!service) return null;

  return (
    <div className="service-modal active" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="service-modal-content">
        <button className="service-modal-close" onClick={onClose}>&times;</button>
        <div className="service-detail-header">
          <h2>{service.title}</h2>
          <p>{service.description}</p>
        </div>
        <div className="service-detail-content">
          <h3>Key Features & Services</h3>
          <ul>
            {service.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div style={{ marginTop: '32px', textAlign: 'center' }}>
          <a href="#contact" className="btn-primary" onClick={onClose}>Get Started</a>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;







