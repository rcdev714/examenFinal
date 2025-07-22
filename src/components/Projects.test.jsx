import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Projects from './Projects'

describe('Projects Component - Minimum 3 Projects Validation', () => {
  it('should render the projects section title', () => {
    render(<Projects />)
    
    const titleElement = screen.getByText('Proyectos')
    expect(titleElement).toBeInTheDocument()
  })

  it('should display at least 3 project cards', () => {
    render(<Projects />)
    
    // Find all project cards by their container class
    const projectCards = document.querySelectorAll('.project-card')
    expect(projectCards.length).toBeGreaterThanOrEqual(3)
  })

  it('should display specific project titles', () => {
    render(<Projects />)
    
    // Validate presence of at least 3 specific projects
    const requiredProjects = [
      'Perceptron Labs',
      'Automatización de Servicio al Cliente con IA',
      'Reserva de Citas en Redes Sociales',
      'Automatización de Infraestructura en AWS'
    ]
    
    // Check that at least 3 project titles are present
    let foundProjects = 0
    requiredProjects.forEach(project => {
      try {
        const element = screen.getByText(project)
        if (element) foundProjects++
      } catch (e) {
        // Project not found, continue counting
      }
    })
    
    expect(foundProjects).toBeGreaterThanOrEqual(3)
  })

  it('should have project descriptions for each project', () => {
    render(<Projects />)
    
    // Find all project descriptions
    const descriptions = document.querySelectorAll('.project-description')
    expect(descriptions.length).toBeGreaterThanOrEqual(3)
    
    // Validate that descriptions have meaningful content
    Array.from(descriptions).slice(0, 3).forEach(desc => {
      expect(desc.textContent.length).toBeGreaterThan(10)
    })
  })

  it('should display technologies for each project', () => {
    render(<Projects />)
    
    // Check for technology tags
    const techSections = document.querySelectorAll('.technologies')
    expect(techSections.length).toBeGreaterThanOrEqual(3)
  })

  it('should validate minimum project count requirement', () => {
    render(<Projects />)
    
    // This test specifically validates the requirement:
    // "Que el listado de proyectos tenga al menos 3 elementos"
    
    // Method 1: Count by project cards
    const projectCards = document.querySelectorAll('.project-card')
    expect(projectCards.length).toBeGreaterThanOrEqual(3)
    
    // Method 2: Count by project titles (h3 elements within project cards)
    const projectTitles = document.querySelectorAll('.project-card h3')
    expect(projectTitles.length).toBeGreaterThanOrEqual(3)
    
    // Validate that each project has required elements
    Array.from(projectCards).slice(0, 3).forEach(card => {
      // Each project should have a title
      const title = card.querySelector('h3')
      expect(title).toBeTruthy()
      expect(title.textContent.length).toBeGreaterThan(1)
      
      // Each project should have a description
      const description = card.querySelector('.project-description')
      expect(description).toBeTruthy()
      expect(description.textContent.length).toBeGreaterThan(10)
    })
  })

  it('should have functional project links', () => {
    render(<Projects />)
    
    // Check for project links (Live Demo or GitHub)
    const projectLinks = document.querySelectorAll('.project-link')
    expect(projectLinks.length).toBeGreaterThan(0)
    
    // Validate that links have proper href attributes
    Array.from(projectLinks).forEach(link => {
      expect(link.hasAttribute('href')).toBeTruthy()
    })
  })
}) 