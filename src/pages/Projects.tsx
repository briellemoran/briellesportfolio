import { useNavigate } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Towers of the Republic",
      date: "May - June 2026",
      description: "A Star Wars inspired tower defense game.",
      tech: ["Unity", "C#"],
      link: "https://play.unity.com/en/games/e3710bd4-c3c5-4cc2-a714-489a291d5511/towers-of-the-republic",
      image: "/towersrepublic.png"
    },
    {
      title: "focuscape",
      date: "Nov - Dec 2025",
      description: "A study timer that combines proven productivity techniques with color psychology-based backgrounds designed to enhance focus.",
      tech: ["React", "TypeScript", "CSS", "HTML"],
      link: "https://focuscape.vercel.app/",
      image: "/focuscape.png"
    },
    {
      title: "Dress Yourself",
      date: "Sep - Nov 2025",
      description: "A wardrobe styling app that helps you generate outfits from your closet.",
      tech: ["React Native", "TypeScipt", "HTML", "CSS", "Adobe Illustrator"],
      link: "/projects/dressyourself",
      image: "/dressyourself.png"
    },
    {
      title: "Voyagers",
      date: "Jan - Apr 2025",
      description: "A budget-focused travel planning application that generates travel itineraries.",
      tech: ["Figma", "Adobe Illustrator"],
      link: "/projects/voyagers",
      image: "/voyagers.png"
    }
  ];

  return (
    <div className = "projects-background">
      <div className="projects-page">
        <h1 className="projects-title">Projects</h1>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              onClick={() => navigate(project.link)}
            >
              <div className="project-hero">
                <img src={project.image} alt={project.title} className="project-hero-img" />
                <div className="project-hero-overlay" />
                <div className="project-hero-text">
                  <h2>{project.title}</h2>
                  <span className="project-date">{project.date}</span>
                </div>
              </div>
              <div className="project-body">
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tech.map((t, i) => (
                    <span key={i} className="project-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;