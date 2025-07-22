import React from 'react'

const Skills = () => {
  const technicalStack = [
    {
      category: "Lenguajes",
      skills: ["Python", "JavaScript", "TypeScript"]
    },
    {
      category: "Backend",
      skills: ["Flask", "Node.js", "Express"]
    },
    {
      category: "Frontend", 
      skills: ["React", "Next.js"]
    },
    {
      category: "Bases de Datos",
      skills: ["MySQL", "MongoDB", "PostgreSQL", "Supabase"]
    },
    {
      category: "Cloud",
      skills: ["AWS (4+ años)", "Azure", "GCP"]
    },
    {
      category: "IA/ML",
      skills: ["OpenAI API", "Implementación de RAG", "Desarrollo de agentes"]
    },
    {
      category: "Infraestructura",
      skills: ["Docker", "Git", "XenServer", "CI/CD", "VPS"]
    }
  ]

  return (
    <section className="skills">
      <div className="container">
        <h2>Stack Tecnológico</h2>
        <div className="skills-grid">
          {technicalStack.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.category}</h3>
              <ul>
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="skill-item">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills 