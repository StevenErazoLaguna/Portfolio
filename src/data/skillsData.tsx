import React from 'react';
import { Code, PaintBucket, Database, Server, GraduationCap, Settings } from 'lucide-react';

export const skillsData = [
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML5", level: 95, icon: <Code className="w-10 h-10" /> },
      { name: "CSS3", level: 90, icon: <PaintBucket className="w-10 h-10" /> },
      { name: "JavaScript", level: 92, icon: <Code className="w-10 h-10" /> },
      { name: "TypeScript", level: 85, icon: <Code className="w-10 h-10" /> },
      { name: "React", level: 90 },
      { name: "Vue.js", level: 75 },
      { name: "Angular", level: 70 },
      { name: "Redux", level: 85 },
      { name: "Tailwind CSS", level: 88 },
      { name: "SASS/SCSS", level: 85 }
    ]
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", level: 80, icon: <Server className="w-10 h-10" /> },
      { name: "Express", level: 75 },
      { name: "Python", level: 65 },
      { name: "Django", level: 60 },
      { name: "GraphQL", level: 70 },
      { name: "REST API", level: 85 }
    ]
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", level: 75, icon: <Database className="w-10 h-10" /> },
      { name: "MySQL", level: 70 },
      { name: "PostgreSQL", level: 65 },
      { name: "Firebase", level: 80 }
    ]
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git", level: 90, icon: <Settings className="w-10 h-10" /> },
      { name: "Webpack", level: 75 },
      { name: "Docker", level: 65 },
      { name: "AWS", level: 60 },
      { name: "Figma", level: 80 },
      { name: "Jest", level: 75 },
      { name: "CI/CD", level: 70 }
    ]
  },
  {
    category: "Learning",
    skills: [
      { name: "Web3", level: 40, icon: <GraduationCap className="w-10 h-10" /> },
      { name: "Machine Learning", level: 30 },
      { name: "WebAssembly", level: 35 },
      { name: "Rust", level: 25 }
    ]
  }
];