import React from 'react'

const Experience = () => {
  const experiences = [
    {
      title: "Product Manager/Tech Lead",
      company: "OMNI",
      location: "Madrid",
      period: "Jan 2024 - Present",
      achievements: [
        "Integrated OpenAI API with social media platforms for automated appointment booking",
        "Built voice interface system (Google Speech-to-Text + ElevenLabs TTS)",
        "Developed AI agents for customer service automation"
      ]
    },
    {
      title: "Software Engineer",
      company: "TandiCorp",
      location: "Quito",
      period: "Feb 2020 - Dec 2023",
      achievements: [
        "Infrastructure: Managed AWS production environments, on-premise servers",
        "Security: Implemented RBAC, configured site-to-site VPN on AWS",
        "Performance: Load balancing implementation, system optimization",
        "Automation: Built Python-based AI agents for process automation",
        "Data: AWS DataSync migrations, database management"
      ]
    }
  ]

  return (
    <section className="experience">
      <div className="container">
        <h2>Experience</h2>
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