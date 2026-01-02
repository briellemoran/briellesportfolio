import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo-link">
          <img src="/BAM.png" alt="Logo" className="logo" />
        </a>
        <Link to="/projects" className="nav-link">PROJECTS</Link>
        <Link to="/redbubble" className="nav-link">REDBUBBLE</Link>
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