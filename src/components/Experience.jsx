import React from 'react'

const Experience = () => {
  const experiences = [
    {
      title: "Product Manager/Tech Lead",
      company: "OMNI",
      location: "Madrid",
      period: "Ene 2024 - Presente",
      achievements: [
        "Integración de la API de OpenAI con redes sociales para la reserva automatizada de citas",
        "Construcción de una interfaz de voz (Google Speech-to-Text + ElevenLabs TTS)",
        "Desarrollo de agentes de IA para la automatización del servicio al cliente"
      ]
    },
    {
      title: "Ingeniero de Software",
      company: "TandiCorp",
      location: "Quito",
      period: "Feb 2020 - Dic 2023",
      achievements: [
        "Infraestructura: Gestión de entornos de producción en AWS y servidores on-premise",
        "Seguridad: Implementación de RBAC, configuración de VPN site-to-site en AWS",
        "Rendimiento: Implementación de balanceo de carga y optimización de sistemas",
        "Automatización: Creación de agentes de IA con Python para la automatización de procesos",
        "Datos: Migraciones con AWS DataSync y gestión de bases de datos"
      ]
    }
  ]

  return (
    <section className="experience">
      <div className="container">
        <h2>Experiencia</h2>
        <div className="experience-list">
          {experiences.map((job, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <h3>{job.title}</h3>
                <div className="company-info">
                  <span className="company">{job.company}</span>
                  <span className="location">{job.location}</span>
                  <span className="period">{job.period}</span>
                </div>
              </div>
              <ul className="achievements">
                {job.achievements.map((achievement, achIndex) => (
                  <li key={achIndex}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience 