import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Skills from './Skills'

describe('Skills Component - Minimum 5 Skills Validation', () => {
  it('should render the skills section title', () => {
    render(<Skills />)
    
    const titleElement = screen.getByText('Technical Stack')
    expect(titleElement).toBeInTheDocument()
  })

  it('should display at least 5 skill categories', () => {
    render(<Skills />)
    
    // Check for specific categories that should be present
    const categories = [
      'Languages',
      'Backend', 
      'Frontend',
      'Databases',
      'Cloud',
      'AI/ML',
      'Infrastructure'
    ]
    
    categories.forEach(category => {
      expect(screen.getByText(category)).toBeInTheDocument()
    })
    
    // Validate that we have more than 5 categories
    expect(categories.length).toBeGreaterThanOrEqual(5)
  })

  it('should have at least 5 total skill items across all categories', () => {
    render(<Skills />)
    
    // Count all skill items in the DOM
    const skillItems = screen.getAllByRole('listitem')
    expect(skillItems.length).toBeGreaterThanOrEqual(5)
  })

  it('should display specific required skills', () => {
    render(<Skills />)
    
    // Validate presence of key technical skills
    const requiredSkills = [
      'Python',
      'JavaScript', 
      'React',
      'AWS (4+ years)',
      'MongoDB'
    ]
    
    requiredSkills.forEach(skill => {
      expect(screen.getByText(skill)).toBeInTheDocument()
    })
    
    // Ensure we have at least 5 required skills
    expect(requiredSkills.length).toBeGreaterThanOrEqual(5)
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