import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className={isScrolled ? 'scrolled' : ''}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src="https://www.codersbrain.com/wp-content/uploads/2023/03/logo-black.png" alt="CodersBrain" />
        </Link>
        <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" className={isActive('/') && location.pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link to="/about" className={isActive('/about') ? 'active' : ''}>About</Link></li>
          <li><Link to="/services" className={isActive('/services') ? 'active' : ''}>Services</Link></li>
          <li><Link to="/careers" className={isActive('/careers') ? 'active' : ''}>Careers</Link></li>
          <li><Link to="/blogs" className={isActive('/blogs') ? 'active' : ''}>Blogs</Link></li>
          <li><Link to="/contact" className={isActive('/contact') ? 'active' : ''}>Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;







