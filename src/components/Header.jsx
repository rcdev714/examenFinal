import React from 'react'

const Header = () => {
  const personalData = {
    name: "Sebastian Salgado",
    title: "Software Engineer",
    photo: "/profile.jpg", // Placeholder for photo
    phone: "+34 123 456 789", // Example phone number
    email: "sebsalgado44@gmail.com"
  }

  return (
    <header className="header">
      <div className="header-content">
        <div className="profile-section">
          <img 
            src={personalData.photo} 
            alt="Sebastian Salgado" 
            className="profile-photo"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/200x200/333/fff?text=SS"
            }}
          />
          <div className="profile-info">
            <h1 className="name">{personalData.name}</h1>
            <h2 className="title">{personalData.title}</h2>
            <div className="contact-info">
              <p className="email">📧 {personalData.email}</p>
              <p className="phone">📱 {personalData.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header 