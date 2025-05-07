import { Project } from '../types';
import imageBuho from '../Images/PortadaBuhoBank.png';
import imageHCI from '../Images/PortadaHCI.png';

export const projectsData: Project[] = [
  {
    id: 1,
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
    id: 2,
    title: "ColorFall",
    shortDescription: "Juego de selección de colores con IA",
    description: "Desarrollo de un juego interactivo de selección de colores utilizando React y TypeScript. Implementación de un sistema de puntuación y niveles, con una interfaz atractiva y amigable. Integración de una API para la generación aleatoria de colores y almacenamiento de resultados, con los cuales a traves de IA se genera un modelo de predicción de colores.",
    image: imageHCI,
    technologies: ["React", "Node.js", "Express", "MySQL", "Postman"],
    categories: ["web", "backend","IA","frontend"],
    githubUrl: "https://github.com/StevenErazoLaguna/ProjectHCI.git"
  }
  

];