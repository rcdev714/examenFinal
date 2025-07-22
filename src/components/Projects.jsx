import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: "Perceptron Labs",
      description: "Plataforma de desarrollo de IA de código abierto centrada en la investigación y el desarrollo de machine learning.",
      technologies: ["React", "Next.js", "OpenAI API", "Vercel"],
      link: "https://perceptronlabs.vercel.app",
      github: "https://github.com/labsperceptron"
    },
    {
      title: "Automatización de Servicio al Cliente con IA",
      description: "Sistema completo de agentes de IA para un servicio al cliente automatizado con integración de interfaz de voz.",
      technologies: ["Python", "OpenAI API", "Google Speech-to-Text", "ElevenLabs TTS"],
      link: "#",
      github: "#"
    },
    {
      title: "Reserva de Citas en Redes Sociales",
      description: "Sistema automatizado de reserva de citas integrado con plataformas de redes sociales mediante IA.",
      technologies: ["Node.js", "Express", "OpenAI API", "Social Media APIs"],
      link: "#",
      github: "#"
    },
    {
      title: "Automatización de Infraestructura en AWS",
      description: "Herramientas de automatización basadas en Python para la gestión y optimización de la infraestructura de AWS.",
      technologies: ["Python", "AWS SDK", "Docker", "CI/CD"],
      link: "#",
      github: "#"
    }
  ]

  return (
    <section className="projects">
      <div className="container">
        <h2>Proyectos</h2>
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
                    🌐 Demo en Vivo
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