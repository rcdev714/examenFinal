import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App Portfolio', () => {
  it('renders portfolio application without crashing', () => {
    render(<App />)
    expect(screen.getByText('Sebastian Salgado')).toBeInTheDocument()
  })

  it('contains all main sections', () => {
    render(<App />)
    
    // Check for main sections
    expect(screen.getByText('Sobre Mí')).toBeInTheDocument()
    expect(screen.getByText('Stack Tecnológico')).toBeInTheDocument()
    expect(screen.getByText('Experiencia')).toBeInTheDocument()
    expect(screen.getByText('Proyectos')).toBeInTheDocument()
    expect(screen.getByText('Educación')).toBeInTheDocument()
  })

  it('displays software engineer title', () => {
    render(<App />)
    // Look for the title specifically in the header section
    expect(screen.getByRole('heading', { level: 2, name: 'Ingeniero de Software' })).toBeInTheDocument()
  })
}) 