import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const shared = {
  language: {
    label: 'Language',
    switchTo: 'Switch to',
    spanish: 'Spanish',
    english: 'English',
  },
  nav: {
    home: 'Home',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact',
  },
  theme: { toggle: 'Toggle theme' },
  menu: { toggle: 'Toggle menu' },
  hero: {
    availableBadge: 'Available for new projects',
    greeting: 'Hi, I am',
    role: 'Full Stack Developer • Cybersecurity • IT Analyst',
    location: 'Quito, Ecuador',
    profile: 'Computer Science Engineering student with experience in full-stack development of financial applications and incident analysis in critical banking systems. Specialized in Spring Boot, React/TypeScript, Kubernetes, and enterprise tools (Dynatrace, OpenLens, Fortinet). Experienced in infrastructure security (VPNs/VLANs, hardening) and production operations in regulated financial environments.',
    contactMe: 'Contact me',
    viewProjects: 'View projects',
    available: 'Available',
    scrollDown: 'Scroll down',
    profileAlt: 'Steven Erazo profile photo',
  },
  experience: {
    title: 'Professional Experience',
    subtitle: 'A track record of building, integrating, and supporting enterprise software.',
    positions: 'Positions',
    currentJobs: 'Current Role',
    yearsExperience: 'Years of Experience',
    current: 'Current',
    technologies: 'Technologies',
    showMore: 'Show more',
    showLess: 'Show less',
    location: 'Quito, Ecuador',
    growing: 'Always learning and building.',
  },
  projects: {
    title: 'Featured Projects',
    subtitle: 'Innovative solutions and applications I have built.',
    filterBy: 'Filter by:',
    noProjects: 'No projects in this category',
    filters: {
      all: 'All',
      web: 'Web',
      frontend: 'Frontend',
      backend: 'Backend',
      fullstack: 'Full Stack',
      ia: 'AI',
    },
    items: {
      1: {
        shortDescription: 'Financial platform for cooperatives and their customers',
        description: 'Complete financial platform with a microservices architecture built with Spring Boot (Java 17) on the backend and React/TypeScript on the frontend. Credit and investment management system with role-based JWT/Spring Security authentication, REST APIs documented with Swagger, and role-specific dashboards. Includes credit applications, loan approvals, payment tracking, and investment management modules with a responsive TailwindCSS interface.',
      },
      2: {
        shortDescription: 'Frontend for an online banking web application',
        description: 'Frontend development for an online banking web application using React and TypeScript. Implemented an attractive responsive design with Bootstrap and Material UI, plus RESTful API integration for data management and user authentication.',
      },
      3: {
        shortDescription: 'AI-powered color selection game',
        description: 'Developed an interactive color selection game with React and TypeScript. Implemented scoring and level systems with a friendly interface, an API for random color generation, and result storage used to create an AI color prediction model.',
      },
    },
    liveDemo: 'Live demo',
    repository: 'GitHub repository',
    technologiesUsed: 'Technologies used',
    viewLive: 'View live project',
    viewCode: 'View code',
    close: 'Close project details',
  },
  skills: {
    title: 'Skills & Technologies',
    subtitle: 'Technologies and tools I work with',
    level: {
      advanced: 'Advanced',
      intermediate: 'Intermediate',
      basic: 'Basic',
    },
    categories: {
      frontend: 'Frontend Development',
      backend: 'Backend Development',
      databases: 'Databases',
      devops: 'DevOps & Cloud',
      tools: 'Tools & Observability',
      ai: 'Artificial Intelligence',
      data: 'Data Analysis',
      security: 'Cybersecurity',
    },
  },
  footer: {
    description: 'Full Stack Developer specialized in microservices architectures, modern web development, and cloud solutions. Passionate about creating innovative and scalable digital experiences.',
    quickLinks: 'Quick links',
    about: 'About me',
    contact: 'Contact',
    sendMessage: 'Send message',
    rights: 'All rights reserved.',
    madeWith: 'Made with',
    using: 'using',
    location: 'Quito, Ecuador',
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: shared },
      es: {
        translation: {
          language: {
            label: 'Idioma',
            switchTo: 'Cambiar a',
            spanish: 'Español',
            english: 'Inglés',
          },
          nav: {
            home: 'Inicio',
            experience: 'Experiencia',
            projects: 'Proyectos',
            skills: 'Habilidades',
            contact: 'Contacto',
          },
          theme: { toggle: 'Cambiar tema' },
          menu: { toggle: 'Abrir menú' },
          hero: {
            availableBadge: 'Disponible para nuevos proyectos',
            greeting: 'Hola, soy',
            role: 'Full Stack Developer • Ciberseguridad • Analista de TI',
            location: 'Quito, Ecuador',
            profile: 'Estudiante de Ingeniería en Computación con experiencia en desarrollo full-stack de aplicaciones financieras y análisis de incidentes en sistemas bancarios críticos. Especializado en Spring Boot, React/TypeScript, Kubernetes y herramientas enterprise (Dynatrace, OpenLens, Fortinet). Experiencia en seguridad de infraestructura (VPNs/VLANs, hardening) y operación de ambientes productivos en entornos financieros regulados.',
            contactMe: 'Contáctame',
            viewProjects: 'Ver proyectos',
            available: 'Disponible',
            scrollDown: 'Desplazarse hacia abajo',
            profileAlt: 'Foto de perfil de Steven Erazo',
          },
          experience: {
            title: 'Experiencia Profesional',
            subtitle: 'Trayectoria construyendo, integrando y dando soporte a soluciones de software empresariales.',
            positions: 'Posiciones',
            currentJobs: 'Cargo Actual',
            yearsExperience: 'Años de Experiencia',
            current: 'Actualidad',
            technologies: 'Tecnologías',
            showMore: 'Ver más',
            showLess: 'Ver menos',
            location: 'Quito, Ecuador',
            growing: 'Aprendiendo y construyendo constantemente.',
          },
          projects: {
            title: 'Proyectos Destacados',
            subtitle: 'Soluciones innovadoras y aplicaciones que he desarrollado.',
            filterBy: 'Filtrar por:',
            noProjects: 'No hay proyectos en esta categoría',
            filters: {
              all: 'Todos',
              web: 'Web',
              frontend: 'Frontend',
              backend: 'Backend',
              fullstack: 'Full Stack',
              ia: 'IA',
            },
            items: {
              1: {
                shortDescription: 'Plataforma financiera para cooperativas y clientes',
                description: 'Plataforma financiera completa con arquitectura de microservicios desarrollada con Spring Boot (Java 17) en backend y React/TypeScript en frontend. Sistema de gestión de créditos e inversiones con autenticación JWT/Spring Security basada en roles, APIs REST documentadas con Swagger y dashboards diferenciados por tipo de usuario. Incluye módulos de solicitudes de crédito, aprobación de préstamos, seguimiento de pagos y gestión de inversiones con interfaz responsiva construida con TailwindCSS.',
              },
              2: {
                shortDescription: 'Frontend de una aplicación web de banca en línea',
                description: 'Desarrollo del frontend de una aplicación web de banca en línea utilizando React y TypeScript. Implementación de un diseño responsivo y atractivo con Bootstrap y Material UI. Integración de API RESTful para la gestión de datos y autenticación de usuarios.',
              },
              3: {
                shortDescription: 'Juego de selección de colores con IA',
                description: 'Desarrollo de un juego interactivo de selección de colores utilizando React y TypeScript. Implementación de un sistema de puntuación y niveles, con una interfaz atractiva y amigable. Integración de una API para la generación aleatoria de colores y almacenamiento de resultados, utilizados para crear un modelo de predicción de colores con IA.',
              },
            },
            liveDemo: 'Demo en vivo',
            repository: 'Repositorio de GitHub',
            technologiesUsed: 'Tecnologías utilizadas',
            viewLive: 'Ver proyecto en vivo',
            viewCode: 'Ver código',
            close: 'Cerrar detalles del proyecto',
          },
          skills: {
            title: 'Habilidades y Tecnologías',
            subtitle: 'Tecnologías y herramientas con las que trabajo',
            level: {
              advanced: 'Avanzado',
              intermediate: 'Intermedio',
              basic: 'Básico',
            },
            categories: {
              frontend: 'Desarrollo Frontend',
              backend: 'Desarrollo Backend',
              databases: 'Bases de datos',
              devops: 'DevOps y Cloud',
              tools: 'Herramientas y Observabilidad',
              ai: 'Inteligencia Artificial',
              data: 'Análisis de datos',
              security: 'Ciberseguridad',
            },
          },
          footer: {
            description: 'Full Stack Developer especializado en arquitecturas de microservicios, desarrollo web moderno y soluciones en la nube. Apasionado por crear experiencias digitales innovadoras y escalables.',
            quickLinks: 'Enlaces rápidos',
            about: 'Sobre mí',
            contact: 'Contacto',
            sendMessage: 'Enviar mensaje',
            rights: 'Todos los derechos reservados.',
            madeWith: 'Hecho con',
            using: 'usando',
            location: 'Quito, Ecuador',
          },
        },
      },
    },
    fallbackLng: 'es',
    supportedLngs: ['es', 'en'],
    load: 'languageOnly',
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
