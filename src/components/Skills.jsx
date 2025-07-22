import React from 'react'

const Skills = () => {
  const technicalStack = [
    {
      category: "Languages",
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
      category: "Databases",
      skills: ["MySQL", "MongoDB", "PostgreSQL", "Supabase"]
    },
    {
      category: "Cloud",
      skills: ["AWS (4+ years)", "Azure", "GCP"]
    },
    {
      category: "AI/ML",
      skills: ["OpenAI API", "RAG implementation", "agent development"]
    },
    {
      category: "Infrastructure",
      skills: ["Docker", "Git", "XenServer", "CI/CD", "VPS"]
    }
  ]

  return (
    <section className="skills">
      <div className="container">
        <h2>Technical Stack</h2>
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