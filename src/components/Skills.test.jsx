import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Skills from './Skills'

describe('Skills Component - Minimum 5 Skills Validation', () => {
  it('should render the skills section title', () => {
    render(<Skills />)
    
    const titleElement = screen.getByText('Stack Tecnológico')
    expect(titleElement).toBeInTheDocument()
  })

  it('should display at least 5 skill categories', () => {
    render(<Skills />)
    
    // Check for at least 5 skill categories
    const categories = [
      'Lenguajes',
      'Backend',
      'Frontend',
      'Bases de Datos',
      'Cloud', 
      'IA/ML', 
      'Infraestructura'
    ]
    
    categories.forEach(category => {
      expect(screen.getByText(category)).toBeInTheDocument()
    })
    
    const categoryElements = document.querySelectorAll('.skill-category')
    expect(categoryElements.length).toBeGreaterThanOrEqual(5)
  })

  it('should have at least 5 total skill items across all categories', () => {
    render(<Skills />)
    
    // Count all skill items in the DOM
    const skillItems = screen.getAllByRole('listitem')
    expect(skillItems.length).toBeGreaterThanOrEqual(5)
  })

  it('should display specific required skills', () => {
    render(<Skills />)
    
    // Check for specific skills to ensure content is loaded
    const requiredSkills = [
      'Python',
      'React',
      'Node.js',
      'AWS (4+ años)',
      'OpenAI API'
    ]
    
    requiredSkills.forEach(skill => {
      expect(screen.getByText(skill)).toBeInTheDocument()
    })
    
    // Validate minimum of 5 skills are present
    const skillElements = document.querySelectorAll('.skill-item')
    expect(skillElements.length).toBeGreaterThanOrEqual(5)
  })

  it('should render skill categories with proper structure', () => {
    render(<Skills />)
    
    // Check that skill categories contain lists
    const skillLists = screen.getAllByRole('list')
    expect(skillLists.length).toBeGreaterThanOrEqual(5)
  })

  it('should validate minimum skill count requirement', () => {
    render(<Skills />)
    
    // This test specifically validates the requirement:
    // "Que el listado de habilidades tenga al menos 5 elementos"
    
    const allSkillElements = screen.getAllByText((content, element) => {
      return element?.classList.contains('skill-item') || 
             element?.tagName === 'LI'
    })
    
    // Must have at least 5 skill elements
    expect(allSkillElements.length).toBeGreaterThanOrEqual(5)
    
    // Additional validation: check that each skill has meaningful content
    allSkillElements.slice(0, 5).forEach(skill => {
      expect(skill.textContent.length).toBeGreaterThan(1)
    })
  })
}) 