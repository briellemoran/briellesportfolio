import { Link, useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  /*
   * when scrolled down more than 12px, then add the white background to the nav
   */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-left">
        <Link to="/" className="logo-link">
          <img src="/BAM.png" alt="Logo" className="logo" />
        </Link>
        <Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'nav-link-active' : ''}`}>PROJECTS</Link>
        <Link to="/redbubble" className={`nav-link ${location.pathname === '/redbubble' ? 'nav-link-active' : ''}`}>REDBUBBLE</Link>
      </div>
      
      <div className="navbar-right">
        <a 
          href="https://github.com/briellemoran" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
          aria-label="GitHub"
        >
          <FaGithub className="social-icon" />
        </a>
        <a 
          href="https://www.linkedin.com/in/brielle-moran" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="social-icon" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;