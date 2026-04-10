import { Project } from '../types';
import imageBuho from '../Images/PortadaBuhoBank.png';
import imageHCI from '../Images/PortadaHCI.png';
import imageDinerop from '../Images/PortadaDinerop.png';

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Dinerop",
    shortDescription: "Plataforma financiera para cooperativas y clientes",
    description: "Plataforma financiera completa con arquitectura de microservicios desarrollada con Spring Boot (Java 17) en backend y React/TypeScript en frontend. Sistema de gestión de créditos e inversiones con autenticación JWT/Spring Security basada en roles, APIs REST documentadas con Swagger y dashboards diferenciados por tipo de usuario. Incluye módulos de solicitudes de crédito, aprobación de préstamos, seguimiento de pagos y gestión de inversiones con interfaz responsiva construida con TailwindCSS.",
    image: imageDinerop,
    technologies: ["Spring Boot", "Java 17", "React", "TypeScript", "PostgreSQL", "Docker", "JWT", "Swagger", "TailwindCSS"],
    categories: ["web", "frontend", "backend", "fullstack"],
    liveUrl: "https://www.dinerop.com/",
    githubUrl: ""
  },
  {
    id: 2,
    title: "Banca Web",
    shortDescription: "Frontend de una aplicación web de banca en línea",
    description: "Desarrollo del frontend de una aplicación web de banca en línea utilizando React y TypeScript. Implementación de un diseño responsivo y atractivo con Bootstrap y Material UI. Integración de API RESTful para la gestión de datos y autenticación de usuarios.",
    image: imageBuho,
    technologies: ["React", "TypeScript", "Boostrap", "Material UI", "Node.js"],
    categories: ["web", "frontend"],
    liveUrl: "https://front-end-buhobank.onrender.com/",
    githubUrl: "https://github.com/BuhoBank/front_end_BuhoBank.git"
  },
  {
    id: 3,
    title: "ColorFall",
    shortDescription: "Juego de selección de colores con IA",
    description: "Desarrollo de un juego interactivo de selección de colores utilizando React y TypeScript. Implementación de un sistema de puntuación y niveles, con una interfaz atractiva y amigable. Integración de una API para la generación aleatoria de colores y almacenamiento de resultados, con los cuales a traves de IA se genera un modelo de predicción de colores.",
    image: imageHCI,
    technologies: ["React", "Node.js", "Express", "MySQL", "Postman"],
    categories: ["web", "backend","IA","frontend"],
    githubUrl: "https://github.com/StevenErazoLaguna/ProjectHCI.git"
  }
];
