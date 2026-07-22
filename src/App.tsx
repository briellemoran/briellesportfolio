import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import Redbubble from './pages/Redbubble';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <div className="home-hero">
              <img src="/BAMwhite.png" alt="BAM" className="home-logo" />
            </div>
            <div className="home-intro">
              <div className="intro-content">
                <img src="/profile.png" alt="profile" className="profile-drawing" />
                <h2>Hi, I'm Brielle!</h2>
                <div className="intro-tags">
                  <span className="intro-tag">Developer</span>
                  <span className="intro-tag">Designer</span>
                  <span className="intro-tag">Creator</span>
                </div>
                <p>
                  I've always been driven by curiosity and creativity, which has led to a constant need to be creating and problem-solving. 
                  I'm currently majoring in Computer Science & Design with a minor in Business where I'm focusing on UI/UX design. 
                  I love bridging the gap between design and functional code, whether that's building full-stack applications, 
                  designing brand identities, or creating digital art.
                </p>
              </div>
            </div>
            <img src="/divider.png" alt="divider" className="divider" />
            <div className="home-faq">
              <div className="faq-content">
                <h2 className="faq-title">Things you might be wondering</h2>
                <div className="faq-list">
                  <div className="faq-item">
                    <h3>Why BAM?</h3>
                    <p>BAM are my initials! I didn't just think it sounded cool… (well, maybe a little).</p>
                  </div>
                  <div className="faq-item">
                    <h3>How did you build this website?</h3>
                    <p>I built this site using React, so it's written in TypeScript and styled in CSS. The drawings are my own that I made separately and embedded throughout.</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        } />
        <Route path="/projects" element={<Projects />} />
        <Route path="/redbubble" element={<Redbubble />} />
      </Routes>
      <footer className="footer">
        <img src="/BAM.png" alt="divider" className="footer-divider" />
        <p>designed & built by <span className="footer-name">Brielle Moran</span></p>
        <p>© 2025</p>
      </footer>
    </Router>
  );
}

export default App;