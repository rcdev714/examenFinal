import React from 'react'

const Contact = () => {
  const education = [
    {
      degree: "Software Engineering",
      institution: "SEK International University",
      period: "2022-2026"
    },
    {
      degree: "Economics",
      institution: "Universidad San Francisco de Quito",
      period: "2017-2020"
    }
  ]

  return (
    <section className="contact">
      <div className="container">
        <div className="contact-content">
          <div className="education-section">
            <h2>Education</h2>
            <div className="education-list">
              {education.map((edu, index) => (
                <div key={index} className="education-item">
                  <h3>{edu.degree}</h3>
                  <p className="institution">{edu.institution}</p>
                  <span className="period">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="contact-section">
            <h2>Get In Touch</h2>
            <div className="contact-links">
              <a href="mailto:sebsalgado44@gmail.com" className="contact-link">
                📧 sebsalgado44@gmail.com
              </a>
              <a href="https://perceptronlabs.vercel.app" target="_blank" rel="noopener noreferrer" className="contact-link">
                🌐 Portfolio
              </a>
              <a href="https://github.com/labsperceptron" target="_blank" rel="noopener noreferrer" className="contact-link">
                💻 GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 