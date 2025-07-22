import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const base = command === 'build' ? '/examenFinal/app/' : '/'
  
  return {
    plugins: [react()],
    test: {
      environment: 'jsdom',
      setupFiles: ['./src/setupTests.js'],
      globals: true,
    },
    base: base,
  }
})
