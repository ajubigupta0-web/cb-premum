import { Link } from 'react-router-dom';

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Remote Tech Talent Acquisition',
      excerpt: 'Exploring how the shift to remote work is transforming how companies hire and manage tech talent, and what this means for the future of recruitment.',
      author: 'Sonu Kumar Gupta',
      date: 'March 15, 2024',
      category: 'Industry Insights',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Top 10 Skills Every Full Stack Developer Should Have in 2024',
      excerpt: 'A comprehensive guide to the essential skills that modern full stack developers need to stay competitive in today\'s rapidly evolving tech landscape.',
      author: 'Tech Team',
      date: 'March 10, 2024',
      category: 'Tech Tips',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format&fit=crop',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'How to Build a High-Performing Tech Team',
      excerpt: 'Learn the strategies and best practices for building and managing a tech team that delivers exceptional results and drives business growth.',
      author: 'Leadership Team',
      date: 'March 5, 2024',
      category: 'Leadership',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&auto=format&fit=crop',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'The Benefits of Staff Augmentation vs. Permanent Hiring',
      excerpt: 'A detailed comparison of staff augmentation and permanent hiring models, helping you decide which approach works best for your business needs.',
      author: 'HR Team',
      date: 'February 28, 2024',
      category: 'Business Strategy',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&auto=format&fit=crop',
      readTime: '8 min read'
    },
    {
      id: 5,
      title: 'Cloud Migration: Best Practices and Common Pitfalls',
      excerpt: 'Everything you need to know about migrating to the cloud, including best practices, common challenges, and how to ensure a smooth transition.',
      author: 'DevOps Team',
      date: 'February 20, 2024',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=600&auto=format&fit=crop',
      readTime: '10 min read'
    },
    {
      id: 6,
      title: 'AI and Machine Learning: Transforming Business Operations',
      excerpt: 'Discover how AI and ML technologies are revolutionizing business operations and creating new opportunities for innovation and growth.',
      author: 'AI Team',
      date: 'February 15, 2024',
      category: 'Innovation',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&auto=format&fit=crop',
      readTime: '9 min read'
    }
  ];

  const categories = ['All', 'Industry Insights', 'Tech Tips', 'Leadership', 'Business Strategy', 'Technology', 'Innovation'];

  return (
    <>
      {/* Hero Section */}
      <section className="hero" style={{ 
        minHeight: '50vh', 
        paddingTop: '120px',
        background: 'url(https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&auto=format&fit=crop) center/cover'
      }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text" style={{ maxWidth: '800px', textAlign: 'center', margin: '0 auto' }}>
            <h1>Our Blog</h1>
            <p style={{ fontSize: '18px', marginBottom: '40px' }}>
              Stay updated with our latest insights, industry trends, and expert advice on technology, recruitment, and business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="about" style={{ background: 'white', paddingTop: '80px' }}>
        <div className="about-container">
          <div className="about-image">
            <img src={blogPosts[0].image} alt={blogPosts[0].title} style={{ borderRadius: 'var(--radius)' }} />
          </div>
          <div className="about-text">
            <div style={{ 
              display: 'inline-block', 
              background: 'var(--blue-pale)', 
              color: 'var(--blue-primary)', 
              padding: '6px 16px', 
              borderRadius: '20px', 
              fontSize: '12px', 
              fontWeight: 600, 
              marginBottom: '16px' 
            }}>
              {blogPosts[0].category}
            </div>
            <h2>{blogPosts[0].title}</h2>
            <p style={{ fontSize: '16px', marginBottom: '20px' }}>
              {blogPosts[0].excerpt}
            </p>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '24px', fontSize: '14px', color: 'var(--gray-text)' }}>
              <span>By {blogPosts[0].author}</span>
              <span>•</span>
              <span>{blogPosts[0].date}</span>
              <span>•</span>
              <span>{blogPosts[0].readTime}</span>
            </div>
            <Link to={`/blogs/${blogPosts[0].id}`} className="btn-primary">
              Read More
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="features" style={{ background: 'var(--gray-light)' }}>
        <div className="features-container">
          <div className="section-header">
            <h2>Latest Articles</h2>
            <p>Explore our collection of articles covering technology, business, and industry insights</p>
          </div>
          <div className="gallery-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="feature-card" style={{ padding: '0', overflow: 'hidden', cursor: 'pointer' }}>
                <div className="gallery-item" style={{ aspectRatio: '16/9', marginBottom: '0' }}>
                  <img src={post.image} alt={post.title} />
                </div>
                <div style={{ padding: '24px' }}>
                  <div style={{ 
                    display: 'inline-block', 
                    background: 'var(--blue-pale)', 
                    color: 'var(--blue-primary)', 
                    padding: '4px 12px', 
                    borderRadius: '12px', 
                    fontSize: '11px', 
                    fontWeight: 600, 
                    marginBottom: '12px' 
                  }}>
                    {post.category}
                  </div>
                  <h3 style={{ marginBottom: '12px', fontSize: '20px' }}>{post.title}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--gray-text)', marginBottom: '16px', lineHeight: 1.6 }}>
                    {post.excerpt}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: 'var(--gray-text)', marginBottom: '16px' }}>
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link to={`/blogs/${post.id}`} style={{ 
                    color: 'var(--blue-primary)', 
                    textDecoration: 'none', 
                    fontWeight: 600, 
                    fontSize: '14px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="testimonials" style={{ background: 'var(--blue-primary)', color: 'white' }}>
        <div className="testimonials-container">
          <div className="section-header">
            <h2 style={{ color: 'white' }}>Subscribe to Our Newsletter</h2>
            <p style={{ color: 'rgba(255,255,255,0.9)' }}>
              Get the latest articles, insights, and updates delivered directly to your inbox
            </p>
          </div>
          <div style={{ 
            maxWidth: '500px', 
            margin: '40px auto 0', 
            display: 'flex', 
            gap: '12px',
            flexWrap: 'wrap'
          }}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              style={{
                flex: 1,
                minWidth: '250px',
                padding: '16px 20px',
                borderRadius: 'var(--radius)',
                border: 'none',
                fontSize: '16px',
                outline: 'none'
              }}
            />
            <button className="btn-primary" style={{ background: 'white', color: 'var(--blue-primary)' }}>
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="team" style={{ background: 'white' }}>
        <div className="team-container">
          <div className="section-header">
            <h2>Browse by Category</h2>
            <p>Find articles on topics that interest you most</p>
          </div>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '12px', 
            justifyContent: 'center',
            marginTop: '40px'
          }}>
            {categories.map((category, index) => (
              <button 
                key={index}
                className="about-feature-tag"
                style={{ 
                  cursor: 'pointer',
                  border: 'none',
                  fontSize: '14px'
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
