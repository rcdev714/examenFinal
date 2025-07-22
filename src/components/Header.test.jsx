import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Header from './Header'

describe('Header Component - Personal Data Validation', () => {
  it('should display full name correctly', () => {
    render(<Header />)
    
    // Validate that names and surnames are displayed
    const nameElement = screen.getByText('Sebastian Salgado')
    expect(nameElement).toBeInTheDocument()
    expect(nameElement).toHaveClass('name')
  })

  it('should display phone number', () => {
    render(<Header />)
    
    // Validate that phone number is present
    const phoneElement = screen.getByText(/\+593 93 980 0968/)
    expect(phoneElement).toBeInTheDocument()
    expect(phoneElement).toHaveClass('phone')
  })

  it('should display email address', () => {
    render(<Header />)
    
    // Validate that email is present
    const emailElement = screen.getByText(/sebsalgado44@gmail.com/)
    expect(emailElement).toBeInTheDocument()
    expect(emailElement).toHaveClass('email')
  })

  it('should display profile photo with correct attributes', () => {
    render(<Header />)
    
    // Validate that photo is loaded correctly (image format)
    const photoElement = screen.getByAltText('Sebastian Salgado')
    expect(photoElement).toBeInTheDocument()
    expect(photoElement).toHaveClass('profile-photo')
    expect(photoElement).toHaveAttribute('src')
    
    // Check that it's an image element
    expect(photoElement.tagName).toBe('IMG')
  })

  it('should display professional title', () => {
    render(<Header />)
    
    const titleElement = screen.getByText('Ingeniero de Software')
    expect(titleElement).toBeInTheDocument()
    expect(titleElement).toHaveClass('title')
  })

  it('should have all required personal data elements', () => {
    render(<Header />)
    
    // Comprehensive validation of all personal data requirements
    expect(screen.getByText('Sebastian Salgado')).toBeInTheDocument() // Names and surnames
    expect(screen.getByText(/\+593 93 980 0968/)).toBeInTheDocument() // Phone number
    expect(screen.getByAltText('Sebastian Salgado')).toBeInTheDocument() // Photo
    expect(screen.getByText(/sebsalgado44@gmail.com/)).toBeInTheDocument() // Email (additional contact)
  })
}) 