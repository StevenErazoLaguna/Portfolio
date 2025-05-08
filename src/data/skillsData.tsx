import React from 'react';
import { Code, PaintBucket, Database, Server, GraduationCap, Settings } from 'lucide-react';

export const skillsData = [
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML5", level: 100, icon: <Code className="w-5 h-10" /> },
      { name: "CSS3", level: 100, icon: <PaintBucket className="w-10 h-10" /> },
      { name: "JavaScript", level: 100, icon: <Code className="w-10 h-10" /> },
      { name: "TypeScript", level: 100, icon: <Code className="w-10 h-10" /> },
      { name: "React", level: 100 },
      { name: "PHP", level: 100 },
      { name: "Tailwind CSS", level: 100 }
    ]
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", level: 50, icon: <Server className="w-10 h-10" /> },
      { name: "Express", level: 50 },
      { name: "Python", level: 50 },
      { name: "Django", level: 50 },
      { name: "GraphQL", level: 50 },
      { name: "REST API", level: 50 }
    ]
  },
  {
    category: "Bases de datos",
    skills: [
      { name: "MongoDB", level: 10, icon: <Database className="w-10 h-10" /> },
      { name: "MySQL", level: 10 },
      { name: "PostgreSQL", level: 10 },
      { name: "Firebase", level: 10 }
    ]
  },
  {
    category: "Control de versiones y herramientas",
    skills: [
      { name: "Git", level: 100, icon: <Settings className="w-10 h-10" /> },
      { name: "Git Hub", level: 100 },
      { name: "Azure Devops", level: 100 },
      { name: "Jira", level: 100 }
    ]
  },
  {
    category: "IA",
    skills: [
      { name: "TensorFlow", level: 50, icon: <GraduationCap className="w-10 h-10" /> },
      { name: "PyTorch ", level: 50 },
      { name: "Redes neuronales", level: 50 },
      { name: "Scikit-learn", level: 50 }
    ]
  },
  {
    category: "Analisis de datos",
    skills: [
      { name: "Power BI", level: 10, icon: <GraduationCap className="w-10 h-10" /> },
      { name: "Pandas", level: 10 },
      { name: "Matplotlib ", level: 10 },
      { name: "NumPy ", level: 10 },
      { name: "Excel", level: 10 },
      { name: "Big Query", level: 10 },
      { name: "Google Cloude", level: 10 }
    ]
  },
  {
    category: "Ciberseguridad",
    skills: [
      { name: "Kali Linux", level: 10, icon: <GraduationCap className="w-10 h-10" /> },
      { name: "Arquitectura de red", level: 10 },
      { name: "Configuracion Firewalls ", level: 10 }
    ]
  }
];