# 📋 Portafolio Personal con CI/CD - Sebastian Salgado

## 🎯 Descripción del Proyecto

Este proyecto es un portafolio personal desarrollado como parte del examen final, implementando buenas prácticas de desarrollo mediante pipelines automatizados que facilitan la entrega y despliegue continuo usando GitHub Pages.

### 🔗 Enlaces Importantes

- **🌐 Sitio Web:** [https://rcdev714.github.io/examenFinal/]
- **📂 Repositorio:** [https://github.com/rcdev714/examenFinal]


## 🏗️ Arquitectura del Proyecto

```
examenFinal/
├── app/                          # Aplicación React principal
│   ├── src/
│   │   ├── components/           # Componentes reutilizables
│   │   │   ├── Header.jsx        # Datos personales
│   │   │   ├── About.jsx         # Información personal
│   │   │   ├── Skills.jsx        # Habilidades técnicas
│   │   │   ├── Experience.jsx    # Experiencia laboral
│   │   │   ├── Projects.jsx      # Proyectos realizados
│   │   │   └── Contact.jsx       # Contacto y educación
│   │   ├── components/           # Pruebas unitarias
│   │   │   ├── Header.test.jsx   # Tests datos personales
│   │   │   ├── Skills.test.jsx   # Tests habilidades (≥5)
│   │   │   └── Projects.test.jsx # Tests proyectos (≥3)
│   │   ├── App.jsx              # Componente principal
│   │   ├── App.test.jsx         # Tests principales
│   │   └── setupTests.js        # Configuración de tests
│   ├── package.json             # Dependencias y scripts
│   └── vite.config.js           # Configuración Vite + Testing
├── .github/workflows/
│   └── deploy.yml               # Pipeline CI/CD
└── README.md                    # Documentación
```

## ✅ Validaciones Implementadas

### 📋 Datos Personales Requeridos
- ✅ **Fotografía:** Imagen cargada correctamente con fallback
- ✅ **Número de teléfono:** +34 123 456 789
- ✅ **Nombres y apellidos:** Sebastian Salgado

### 🔧 Habilidades Técnicas (Mínimo 5)
- ✅ **7 categorías implementadas:**
  - Languages: Python, JavaScript, TypeScript
  - Backend: Flask, Node.js, Express  
  - Frontend: React, Next.js
  - Databases: MySQL, MongoDB, PostgreSQL, Supabase
  - Cloud: AWS (4+ years), Azure, GCP
  - AI/ML: OpenAI API, RAG implementation, agent development
  - Infrastructure: Docker, Git, XenServer, CI/CD, VPS

### 💼 Proyectos (Mínimo 3)
- ✅ **4 proyectos implementados:**
  1. **Perceptron Labs** - Plataforma AI open source
  2. **AI Customer Service Automation** - Sistema de atención automatizado
  3. **Social Media Appointment Booking** - Reservas automáticas en redes sociales
  4. **AWS Infrastructure Automation** - Herramientas de automatización AWS

## 🧪 Pruebas Unitarias

### 📊 Cobertura de Tests
```bash
# Ejecutar todas las pruebas
npm test

# Ejecutar pruebas en modo CI
npm run test:run
```

### 📝 Tests Implementados
- **App.test.jsx:** Pruebas principales de la aplicación
- **Header.test.jsx:** Validación de datos personales obligatorios
- **Skills.test.jsx:** Verificación de ≥5 habilidades técnicas
- **Projects.test.jsx:** Confirmación de ≥3 proyectos

## 🚀 Pipeline CI/CD

### 🔄 Flujo Automatizado
1. **📥 Trigger:** Push a rama `main` o ejecución manual
2. **📦 Install:** Instalación de dependencias con `npm ci`
3. **🧪 Test:** Ejecución de pruebas unitarias con Vitest
4. **🏗️ Build:** Compilación del proyecto para producción
5. **🚀 Deploy:** Despliegue automático en GitHub Pages

### ⚙️ Configuración del Pipeline
```yaml
# .github/workflows/deploy.yml
- Instala dependencias del proyecto
- Ejecuta pruebas unitarias (obligatorio para continuar)
- Construye el proyecto optimizado
- Despliega automáticamente en GitHub Pages
```

## 🤖 Experiencia con IA (GitHub Copilot)

### 💡 Sugerencias Útiles de IA

#### 1. **Generación de Estructura de Pruebas**
```javascript
// Sugerencia de Copilot para estructura de tests
describe('Skills Component - Minimum 5 Skills Validation', () => {
  it('should validate minimum skill count requirement', () => {
    // IA sugirió esta estructura completa para validación
  })
})
```
**Adaptación:** Se usó la estructura sugerida y se adaptó para validar específicamente los requisitos del ejercicio.

#### 2. **Configuración de Vitest con React**
```javascript
// Copilot sugirió esta configuración en vite.config.js
test: {
  environment: 'jsdom',
  setupFiles: ['./src/setupTests.js'],
  globals: true,
}
```
**Adaptación:** Se implementó exactamente como se sugirió, funcionó perfectamente para el entorno de testing.

#### 3. **Validaciones CSS Responsive**
```css
/* IA sugirió estas media queries */
@media (max-width: 768px) {
  .profile-section {
    flex-direction: column;
    text-align: center;
  }
}
```
**Adaptación:** Se utilizaron las sugerencias de responsive design y se mejoraron con el patrón de diseño minimalista preferido.

#### 4. **Pipeline de GitHub Actions**
```yaml
# Copilot generó la estructura base del workflow
- name: Run unit tests
  run: |
    cd app
    npm run test:run
  env:
    CI: true
```
**Adaptación:** Se tomó la estructura base y se adaptó para el flujo específico del proyecto con Vite.

### 📈 Valor Agregado por IA

1. **⚡ Aceleración del desarrollo:** Redujo el tiempo de configuración inicial en ~60%
2. **🎯 Patrones optimizados:** Sugirió mejores prácticas para testing y CI/CD
3. **🐛 Prevención de errores:** Identificó configuraciones problemáticas antes de la implementación
4. **📚 Aprendizaje:** Proporcionó alternativas y explicaciones para diferentes enfoques

### 🔧 Adaptaciones Realizadas

- **Personalización de componentes:** Estructuras sugeridas adaptadas al diseño minimalista
- **Tests específicos:** Validaciones generales convertidas en tests específicos para requisitos
- **Configuración de rutas:** Ajuste de base path para GitHub Pages
- **Optimización CSS:** Mejoras en el sistema de colores y espaciado

## 🛠️ Tecnologías Utilizadas

- **⚛️ Frontend:** React 19.1.0 + Vite 7.0.4
- **🧪 Testing:** Vitest + React Testing Library
- **🎨 Styling:** CSS3 con diseño responsive
- **🚀 CI/CD:** GitHub Actions
- **📦 Deployment:** GitHub Pages
- **🤖 AI Assistant:** GitHub Copilot

## 📋 Instrucciones de Desarrollo

### 🚀 Inicio Rápido
```bash
# Clonar repositorio
git clone https://github.com/tuusuario/examenFinal.git
cd examenFinal/app

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Ejecutar pruebas
npm test

# Construir para producción
npm run build
```

### 🧪 Comandos de Testing
```bash
# Modo watch (desarrollo)
npm test

# Ejecutar una vez (CI)
npm run test:run

# Con cobertura
npm run test:coverage
```

## ✨ Características Destacadas

- 📱 **Diseño Responsive:** Optimizado para todos los dispositivos
- 🎨 **UI Moderna:** Interfaz minimalista con gradientes y animaciones
- ⚡ **Performance:** Carga rápida y optimizada
- 🔒 **Validación Completa:** Todos los requisitos verificados por tests
- 🚀 **Despliegue Automático:** Pipeline completamente automatizado
- 🤖 **IA-Assisted:** Desarrollo asistido por inteligencia artificial

## 👤 Autor

**Sebastian Salgado**
- 📧 Email: sebsalgado44@gmail.com
- 🌐 Portfolio: https://perceptronlabs.vercel.app
- 💻 GitHub: https://github.com/labsperceptron

---

*Proyecto desarrollado como parte del examen final - Sistema de la Información con Tecnologías Emergentes* 