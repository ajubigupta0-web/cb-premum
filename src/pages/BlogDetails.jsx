import { useParams, Link, useNavigate } from 'react-router-dom';

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Blog posts data (same as Blogs.jsx)
  const blogPosts = {
    1: {
      id: 1,
      title: 'The Future of Remote Tech Talent Acquisition',
      content: `
        <p>The landscape of tech talent acquisition has undergone a dramatic transformation in recent years, with remote work becoming not just a trend, but a fundamental shift in how companies operate and hire. This evolution has created both opportunities and challenges for organizations seeking to build high-performing technology teams.</p>
        
        <h2>The Remote Revolution</h2>
        <p>Remote work has fundamentally changed the way companies approach talent acquisition. No longer constrained by geographical boundaries, organizations can now tap into a global pool of tech talent. This shift has been accelerated by the pandemic, which forced companies to adapt quickly to remote work models.</p>
        
        <p>For tech companies, this means access to a much larger talent pool. Instead of being limited to local candidates, companies can now hire the best developers, engineers, and tech professionals from anywhere in the world. This has led to increased competition for top talent, but also more opportunities for skilled professionals.</p>
        
        <h2>Challenges and Solutions</h2>
        <p>However, remote talent acquisition comes with its own set of challenges. Companies must develop new strategies for:</p>
        <ul>
          <li><strong>Virtual Interviews:</strong> Conducting effective technical assessments and cultural fit evaluations remotely</li>
          <li><strong>Onboarding:</strong> Ensuring new remote hires feel connected and integrated into the team</li>
          <li><strong>Communication:</strong> Establishing clear communication channels and collaboration tools</li>
          <li><strong>Time Zone Management:</strong> Coordinating work across different time zones</li>
        </ul>
        
        <h2>The Future Outlook</h2>
        <p>As we look ahead, remote tech talent acquisition will continue to evolve. We're seeing the emergence of hybrid models that combine the best of both remote and in-office work. Companies are investing in better tools and processes to support remote teams, and the tech industry is leading the way in this transformation.</p>
        
        <p>The future of tech talent acquisition is not just about finding the right skills—it's about building flexible, adaptable teams that can thrive in a remote-first world. Companies that embrace this change and invest in the right tools and processes will have a significant competitive advantage.</p>
      `,
      author: 'Sonu Kumar Gupta',
      date: 'March 15, 2024',
      category: 'Industry Insights',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop',
      readTime: '5 min read'
    },
    2: {
      id: 2,
      title: 'Top 10 Skills Every Full Stack Developer Should Have in 2024',
      content: `
        <p>The role of a full stack developer continues to evolve, requiring a diverse set of skills that span both frontend and backend technologies. In 2024, the expectations for full stack developers have never been higher, with companies seeking professionals who can handle everything from UI/UX design to database management and cloud deployment.</p>
        
        <h2>1. Frontend Technologies</h2>
        <p>Mastery of modern frontend frameworks like React, Vue.js, or Angular is essential. Understanding of HTML5, CSS3, and JavaScript (ES6+) is fundamental, along with responsive design principles and accessibility standards.</p>
        
        <h2>2. Backend Development</h2>
        <p>Proficiency in server-side languages such as Node.js, Python, Java, or .NET is crucial. Understanding RESTful APIs, GraphQL, and microservices architecture is increasingly important.</p>
        
        <h2>3. Database Management</h2>
        <p>Knowledge of both SQL (PostgreSQL, MySQL) and NoSQL (MongoDB, Redis) databases is essential. Understanding database design, optimization, and query performance is critical.</p>
        
        <h2>4. Version Control</h2>
        <p>Expertise in Git and platforms like GitHub or GitLab is non-negotiable. Understanding branching strategies, code reviews, and collaborative workflows is essential.</p>
        
        <h2>5. Cloud Platforms</h2>
        <p>Familiarity with cloud services like AWS, Azure, or Google Cloud Platform is becoming standard. Understanding containerization (Docker) and orchestration (Kubernetes) is highly valued.</p>
        
        <h2>6. DevOps Practices</h2>
        <p>Understanding CI/CD pipelines, automated testing, and deployment strategies is crucial for modern development workflows.</p>
        
        <h2>7. Security Awareness</h2>
        <p>Knowledge of common security vulnerabilities, authentication methods, and data protection practices is essential in today's threat landscape.</p>
        
        <h2>8. Testing</h2>
        <p>Proficiency in writing unit tests, integration tests, and understanding test-driven development (TDD) principles.</p>
        
        <h2>9. Problem-Solving Skills</h2>
        <p>Strong analytical thinking, debugging abilities, and the capacity to learn new technologies quickly are fundamental.</p>
        
        <h2>10. Soft Skills</h2>
        <p>Communication, collaboration, and the ability to work in agile teams are just as important as technical skills.</p>
      `,
      author: 'Tech Team',
      date: 'March 10, 2024',
      category: 'Tech Tips',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&auto=format&fit=crop',
      readTime: '7 min read'
    },
    3: {
      id: 3,
      title: 'How to Build a High-Performing Tech Team',
      content: `
        <p>Building a high-performing tech team is one of the most critical challenges facing technology leaders today. A great team can accelerate product development, drive innovation, and create competitive advantages. But what does it take to build and maintain such a team?</p>
        
        <h2>Define Clear Goals and Vision</h2>
        <p>Every high-performing team starts with a clear understanding of what they're trying to achieve. Define your team's mission, set measurable goals, and ensure everyone understands how their work contributes to the bigger picture.</p>
        
        <h2>Hire for Culture Fit and Diversity</h2>
        <p>Technical skills are important, but cultural fit and diversity are equally crucial. Look for candidates who share your values but bring different perspectives and experiences. Diverse teams are more innovative and better at problem-solving.</p>
        
        <h2>Foster Continuous Learning</h2>
        <p>Technology evolves rapidly, and your team needs to keep up. Invest in training, conferences, and learning opportunities. Encourage knowledge sharing and create an environment where learning is valued.</p>
        
        <h2>Establish Clear Communication</h2>
        <p>Effective communication is the foundation of any high-performing team. Establish clear channels, regular check-ins, and transparent processes. Use tools that facilitate collaboration and keep everyone aligned.</p>
        
        <h2>Empower Your Team</h2>
        <p>Give your team autonomy and trust them to make decisions. Micromanagement kills creativity and motivation. Instead, provide clear guidelines and support, then let your team execute.</p>
        
        <h2>Recognize and Reward</h2>
        <p>Celebrate wins, both big and small. Recognize individual contributions and team achievements. Create a culture where people feel valued and appreciated.</p>
      `,
      author: 'Leadership Team',
      date: 'March 5, 2024',
      category: 'Leadership',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&auto=format&fit=crop',
      readTime: '6 min read'
    },
    4: {
      id: 4,
      title: 'The Benefits of Staff Augmentation vs. Permanent Hiring',
      content: `
        <p>When building your technology team, one of the most important decisions you'll face is whether to hire permanent employees or use staff augmentation. Both approaches have their merits, and the right choice depends on your specific needs, timeline, and business objectives.</p>
        
        <h2>Understanding Staff Augmentation</h2>
        <p>Staff augmentation involves bringing in external professionals to work alongside your existing team on a temporary or project basis. These professionals integrate with your team, use your tools and processes, and work under your management.</p>
        
        <h2>Understanding Permanent Hiring</h2>
        <p>Permanent hiring means bringing someone on as a full-time employee with all the associated benefits, responsibilities, and long-term commitment.</p>
        
        <h2>When to Choose Staff Augmentation</h2>
        <ul>
          <li><strong>Short-term Projects:</strong> When you need expertise for a specific project with a defined timeline</li>
          <li><strong>Skill Gaps:</strong> When you need specialized skills that aren't required long-term</li>
          <li><strong>Rapid Scaling:</strong> When you need to scale quickly without the overhead of permanent hiring</li>
          <li><strong>Budget Constraints:</strong> When you want to avoid the full cost of permanent employees</li>
        </ul>
        
        <h2>When to Choose Permanent Hiring</h2>
        <ul>
          <li><strong>Long-term Needs:</strong> When you need ongoing expertise and continuity</li>
          <li><strong>Core Team Building:</strong> When building your foundational team</li>
          <li><strong>Cultural Integration:</strong> When you want someone deeply integrated into your company culture</li>
          <li><strong>Knowledge Retention:</strong> When you need to build institutional knowledge</li>
        </ul>
        
        <h2>The Hybrid Approach</h2>
        <p>Many successful companies use a hybrid approach, maintaining a core permanent team while augmenting with specialists as needed. This provides stability while maintaining flexibility.</p>
      `,
      author: 'HR Team',
      date: 'February 28, 2024',
      category: 'Business Strategy',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&auto=format&fit=crop',
      readTime: '8 min read'
    },
    5: {
      id: 5,
      title: 'Cloud Migration: Best Practices and Common Pitfalls',
      content: `
        <p>Cloud migration has become a strategic imperative for most organizations, offering scalability, cost efficiency, and improved agility. However, migrating to the cloud is a complex process that requires careful planning and execution.</p>
        
        <h2>Planning Your Migration</h2>
        <p>Before starting your cloud migration, it's essential to have a clear strategy. Assess your current infrastructure, identify which applications and data should be migrated, and determine your migration timeline and budget.</p>
        
        <h2>Best Practices</h2>
        <ul>
          <li><strong>Start Small:</strong> Begin with non-critical applications to learn and refine your process</li>
          <li><strong>Security First:</strong> Implement security measures from the start, not as an afterthought</li>
          <li><strong>Cost Management:</strong> Monitor and optimize cloud costs continuously</li>
          <li><strong>Training:</strong> Ensure your team has the necessary skills and knowledge</li>
          <li><strong>Backup Plans:</strong> Always have a rollback strategy</li>
        </ul>
        
        <h2>Common Pitfalls to Avoid</h2>
        <ul>
          <li><strong>Lack of Planning:</strong> Rushing into migration without proper planning</li>
          <li><strong>Underestimating Costs:</strong> Not accounting for all cloud-related expenses</li>
          <li><strong>Security Oversights:</strong> Failing to properly configure security settings</li>
          <li><strong>Data Loss:</strong> Not having proper backup and recovery procedures</li>
          <li><strong>Vendor Lock-in:</strong> Becoming too dependent on a single cloud provider</li>
        </ul>
        
        <h2>Success Factors</h2>
        <p>Successful cloud migrations require strong leadership, clear communication, and a phased approach. Work with experienced cloud migration partners who can guide you through the process and help you avoid common mistakes.</p>
      `,
      author: 'DevOps Team',
      date: 'February 20, 2024',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1200&auto=format&fit=crop',
      readTime: '10 min read'
    },
    6: {
      id: 6,
      title: 'AI and Machine Learning: Transforming Business Operations',
      content: `
        <p>Artificial Intelligence and Machine Learning are no longer futuristic concepts—they're transforming how businesses operate today. From automating routine tasks to providing deep insights, AI and ML are creating new opportunities and competitive advantages.</p>
        
        <h2>The Current State of AI in Business</h2>
        <p>AI and ML technologies are being adopted across industries, from healthcare to finance to manufacturing. Companies are using these technologies to improve efficiency, reduce costs, and create better customer experiences.</p>
        
        <h2>Key Applications</h2>
        <ul>
          <li><strong>Process Automation:</strong> Automating repetitive tasks and workflows</li>
          <li><strong>Predictive Analytics:</strong> Forecasting trends and making data-driven decisions</li>
          <li><strong>Customer Service:</strong> Chatbots and virtual assistants improving customer support</li>
          <li><strong>Personalization:</strong> Tailoring products and services to individual customers</li>
          <li><strong>Quality Control:</strong> Detecting defects and ensuring product quality</li>
        </ul>
        
        <h2>Getting Started with AI</h2>
        <p>For businesses looking to adopt AI and ML, start with clear use cases that provide immediate value. Invest in the right talent and tools, and ensure you have quality data to work with. Consider partnering with AI experts who can help you navigate the complexities.</p>
        
        <h2>The Future</h2>
        <p>As AI and ML technologies continue to evolve, they will become even more integral to business operations. Companies that embrace these technologies now will be better positioned for future success.</p>
      `,
      author: 'AI Team',
      date: 'February 15, 2024',
      category: 'Innovation',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&auto=format&fit=crop',
      readTime: '9 min read'
    }
  };

  const post = blogPosts[id];

  if (!post) {
    return (
      <section className="hero" style={{ minHeight: '60vh', paddingTop: '120px' }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text" style={{ maxWidth: '800px', textAlign: 'center', margin: '0 auto' }}>
            <h1>Blog Post Not Found</h1>
            <p style={{ fontSize: '18px', marginBottom: '40px' }}>
              The blog post you're looking for doesn't exist.
            </p>
            <Link to="/blogs" className="btn-primary">
              Back to Blogs
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="hero" style={{ 
        minHeight: '40vh', 
        paddingTop: '120px',
        background: `url(${post.image}) center/cover`
      }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text" style={{ maxWidth: '800px', textAlign: 'center', margin: '0 auto' }}>
            <div style={{ 
              display: 'inline-block', 
              background: 'var(--blue-pale)', 
              color: 'var(--blue-primary)', 
              padding: '6px 16px', 
              borderRadius: '20px', 
              fontSize: '12px', 
              fontWeight: 600, 
              marginBottom: '20px' 
            }}>
              {post.category}
            </div>
            <h1>{post.title}</h1>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', justifyContent: 'center', fontSize: '14px', color: 'rgba(255,255,255,0.9)', flexWrap: 'wrap' }}>
              <span>By {post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="about" style={{ background: 'white', paddingTop: '80px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 48px' }}>
          <div style={{ marginBottom: '40px' }}>
            <Link 
              to="/blogs" 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px', 
                color: 'var(--blue-primary)', 
                textDecoration: 'none', 
                fontWeight: 600,
                marginBottom: '32px'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Blogs
            </Link>
          </div>
          
          <div 
            className="blog-content"
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              color: 'var(--gray-dark)'
            }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <div style={{ 
            marginTop: '60px', 
            paddingTop: '40px', 
            borderTop: '1px solid var(--gray-light)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <div>
              <h3 style={{ marginBottom: '12px', fontSize: '20px' }}>Share this article</h3>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a href="#" style={{ 
                  width: '40px', 
                  height: '40px', 
                  background: 'var(--blue-primary)', 
                  color: 'white', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  textDecoration: 'none'
                }}>
                  in
                </a>
                <a href="#" style={{ 
                  width: '40px', 
                  height: '40px', 
                  background: 'var(--blue-primary)', 
                  color: 'white', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  textDecoration: 'none'
                }}>
                  t
                </a>
                <a href="#" style={{ 
                  width: '40px', 
                  height: '40px', 
                  background: 'var(--blue-primary)', 
                  color: 'white', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  textDecoration: 'none'
                }}>
                  f
                </a>
              </div>
            </div>
            <Link to="/blogs" className="btn-primary">
              View All Blogs
            </Link>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="features" style={{ background: 'var(--gray-light)' }}>
        <div className="features-container">
          <div className="section-header">
            <h2>Related Articles</h2>
            <p>Continue reading more insights and updates</p>
          </div>
          <div className="gallery-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {Object.values(blogPosts)
              .filter(p => p.id !== post.id)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link 
                  key={relatedPost.id} 
                  to={`/blogs/${relatedPost.id}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <article className="feature-card" style={{ padding: '0', overflow: 'hidden', cursor: 'pointer' }}>
                    <div className="gallery-item" style={{ aspectRatio: '16/9', marginBottom: '0' }}>
                      <img src={relatedPost.image} alt={relatedPost.title} />
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
                        {relatedPost.category}
                      </div>
                      <h3 style={{ marginBottom: '12px', fontSize: '20px' }}>{relatedPost.title}</h3>
                      <p style={{ fontSize: '14px', color: 'var(--gray-text)', marginBottom: '16px', lineHeight: 1.6 }}>
                        {relatedPost.excerpt}
                      </p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: 'var(--gray-text)' }}>
                        <span>{relatedPost.author}</span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;







