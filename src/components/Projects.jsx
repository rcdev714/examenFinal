import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: "Perceptron Labs",
      description: "Open source AI development platform focused on machine learning research and development",
      technologies: ["React", "Next.js", "OpenAI API", "Vercel"],
      link: "https://perceptronlabs.vercel.app",
      github: "https://github.com/labsperceptron"
    },
    {
      title: "AI Customer Service Automation",
      description: "Comprehensive AI agent system for automated customer service with voice interface integration",
      technologies: ["Python", "OpenAI API", "Google Speech-to-Text", "ElevenLabs TTS"],
      link: "#",
      github: "#"
    },
    {
      title: "Social Media Appointment Booking",
      description: "Automated appointment booking system integrated with social media platforms using AI",
      technologies: ["Node.js", "Express", "OpenAI API", "Social Media APIs"],
      link: "#",
      github: "#"
    },
    {
      title: "AWS Infrastructure Automation",
      description: "Python-based automation tools for AWS infrastructure management and optimization",
      technologies: ["Python", "AWS SDK", "Docker", "CI/CD"],
      link: "#",
      github: "#"
    }
  ]

  return (
    <section className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.link !== "#" && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    🌐 Live Demo
                  </a>
                )}
                {project.github !== "#" && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    💻 GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 