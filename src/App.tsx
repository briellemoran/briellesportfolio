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
                <h2>Welcome to my Portfolio!</h2>
                <p>
                  Hi, I'm Brielle Moran! I've always been driven by curiosity and creativity, 
                  which has led to a constant need to be creating and problem-solving. Currently, 
                  I'm majoring in Computer Science & Design with a minor in Business, where I'm focusing on UI/UX design. 
                  I love bridging the gap between design and functional code, whether that's building full-stack applications, 
                  designing brand identities, or creating digital art.
                </p>
              </div>
            </div>
          </>
        } />
        <Route path="/projects" element={<Projects />} />
        <Route path="/redbubble" element={<Redbubble />} />
      </Routes>
    </Router>
  );
}

export default App;