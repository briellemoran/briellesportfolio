import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "focuscape",
      description: "Focuscape is a responsive study timer website I created that combines proven productivity techniques (Pomodoro, 52-17, and 90-minute methods) with color psychology-based backgrounds designed to enhance focus. The app features real-time session tracking with automatic work/break cycling and visual progress visualization. Drawing on research in color psychology, I designed five custom background themes to support different study needs.",
      tech: "React.js, TypeScript, React Context API, React Router, CSS3, HTML5, github, Adobe Illustrator",
      link: "https://focuscape.vercel.app/",
      image: "/focuscape.png"
    },
    {
      title: "Dress Yourself",
      description: "Dress Yourself is a full-stack mobile application I built with a team of 5. The app helps users digitize their wardrobe by uploading and categorizing clothing items, then generates new outfit combinations from their existing pieces. I designed the brand identity, including the color scheme and logo in Adobe Illustrator, and developed key user interface components for the clothing upload, categorization, and outfit generation features. Working cross-functionally with the team, I integrated the front-end React Native components with back-end API endpoints to create a seamless user experience.",
      tech: "React Native, TypeScipt, Adobe Illustrator, github",
      link: "https://docs.google.com/presentation/d/1azef02ch9A8mLqzjUeETzDhqEr1g3h9OUlr2k_fSQtU/edit?usp=sharing",
      image: "/dressyourself.png"
    },
    {
      title: "Voyagers",
      description: "Voyagers is a budget-focused travel planning application I co-created with a focus on making travel stress-free. I led the design process, conceptualizing the user experience and creating an interactive Figma prototype. Using Adobe Illustrator, I designed the brand identity and logo, then worked closely with my co-creator to translate these design specifications into functional requirements for development.",
      tech: "Figma, Adobe Illustrator",
      link: "https://www.voyagers.global/",
      image: "/voyagers.png"
    }
  ];

  return (
    <div className="projects-background">
      <div className="projects-page">
        <h1 className="projects-title">Projects</h1>
        
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-block">
              <div className="project-content">
                <h2>{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <p className="project-tech"><strong>Built with:</strong> {project.tech}</p>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    View Project →
                  </a>
                )}
              </div>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;