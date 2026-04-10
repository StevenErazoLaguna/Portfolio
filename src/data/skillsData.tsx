import React from 'react';

interface Skill {
  name: string;
  level: number;
  category?: string;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
  color: string;
}

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend Development",
    color: "blue",
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Angular", level: 75 },
      { name: "Vite", level: 80 }
    ]
  },
  {
    category: "Backend Development",
    color: "green",
    skills: [
      { name: "Spring Boot", level: 85 },
      { name: "Java", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Express", level: 75 },
      { name: "Python", level: 70 },
      { name: "REST API", level: 90 },
      { name: "GraphQL", level: 65 }
    ]
  },
  {
    category: "Bases de datos",
    color: "purple",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 70 },
      { name: "Firebase", level: 65 }
    ]
  },
  {
    category: "DevOps & Cloud",
    color: "orange",
    skills: [
      { name: "Docker", level: 80 },
      { name: "Kubernetes", level: 70 },
      { name: "Linux", level: 85 },
      { name: "Git/GitHub", level: 90 },
      { name: "Azure DevOps", level: 75 },
      { name: "CI/CD", level: 75 }
    ]
  },
  {
    category: "Herramientas & Observabilidad",
    color: "pink",
    skills: [
      { name: "Dynatrace", level: 75 },
      { name: "OpenLens", level: 70 },
      { name: "Swagger", level: 80 },
      { name: "Postman", level: 85 },
      { name: "k6", level: 70 },
      { name: "Jira", level: 80 }
    ]
  },
  {
    category: "Inteligencia Artificial",
    color: "indigo",
    skills: [
      { name: "TensorFlow", level: 65 },
      { name: "PyTorch", level: 60 },
      { name: "Scikit-learn", level: 70 },
      { name: "LLMs", level: 65 }
    ]
  },
  {
    category: "Análisis de datos",
    color: "cyan",
    skills: [
      { name: "Pandas", level: 70 },
      { name: "NumPy", level: 70 },
      { name: "Matplotlib", level: 65 },
      { name: "Power BI", level: 65 },
      { name: "BigQuery", level: 60 },
      { name: "Excel", level: 85 }
    ]
  },
  {
    category: "Ciberseguridad",
    color: "red",
    skills: [
      { name: "Fortinet", level: 80 },
      { name: "VPN/VLAN", level: 85 },
      { name: "Firewalls", level: 80 },
      { name: "UFW/iptables", level: 75 },
      { name: "Kali Linux", level: 65 },
      { name: "Network Security", level: 75 }
    ]
  }
];
