import React, { useState } from 'react';
import { Code } from 'lucide-react';
import { skillsData } from '../data/skillsData';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

// Mapeo de colores Tailwind
const colorMap: { [key: string]: { bg: string; text: string; border: string; hover: string } } = {
  blue: { bg: 'bg-blue-50 dark:bg-blue-950/30', text: 'text-blue-700 dark:text-blue-300', border: 'border-blue-200 dark:border-blue-800', hover: 'hover:border-blue-400 dark:hover:border-blue-600' },
  green: { bg: 'bg-green-50 dark:bg-green-950/30', text: 'text-green-700 dark:text-green-300', border: 'border-green-200 dark:border-green-800', hover: 'hover:border-green-400 dark:hover:border-green-600' },
  purple: { bg: 'bg-purple-50 dark:bg-purple-950/30', text: 'text-purple-700 dark:text-purple-300', border: 'border-purple-200 dark:border-purple-800', hover: 'hover:border-purple-400 dark:hover:border-purple-600' },
  orange: { bg: 'bg-orange-50 dark:bg-orange-950/30', text: 'text-orange-700 dark:text-orange-300', border: 'border-orange-200 dark:border-orange-800', hover: 'hover:border-orange-400 dark:hover:border-orange-600' },
  pink: { bg: 'bg-pink-50 dark:bg-pink-950/30', text: 'text-pink-700 dark:text-pink-300', border: 'border-pink-200 dark:border-pink-800', hover: 'hover:border-pink-400 dark:hover:border-pink-600' },
  indigo: { bg: 'bg-indigo-50 dark:bg-indigo-950/30', text: 'text-indigo-700 dark:text-indigo-300', border: 'border-indigo-200 dark:border-indigo-800', hover: 'hover:border-indigo-400 dark:hover:border-indigo-600' },
  cyan: { bg: 'bg-cyan-50 dark:bg-cyan-950/30', text: 'text-cyan-700 dark:text-cyan-300', border: 'border-cyan-200 dark:border-cyan-800', hover: 'hover:border-cyan-400 dark:hover:border-cyan-600' },
  red: { bg: 'bg-red-50 dark:bg-red-950/30', text: 'text-red-700 dark:text-red-300', border: 'border-red-200 dark:border-red-800', hover: 'hover:border-red-400 dark:hover:border-red-600' },
};

function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const getLevelLabel = (level: number): string => {
    if (level >= 85) return 'Avanzado';
    if (level >= 70) return 'Intermedio';
    return 'Básico';
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Skills & Technologies"
          subtitle="Tecnologías y herramientas con las que trabajo"
          icon={<Code className="w-6 h-6" />}
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((category, categoryIndex) => {
            const colors = colorMap[category.color] || colorMap.blue;
            
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className={`${colors.bg} rounded-xl p-6 border-2 ${colors.border} transition-all duration-300 ${colors.hover}`}
              >
                <h3 className={`text-xl font-bold ${colors.text} mb-6 flex items-center gap-2`}>
                  <div className={`w-3 h-3 rounded-full ${colors.text.replace('text-', 'bg-')}`}></div>
                  {category.category}
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 + categoryIndex * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      onHoverStart={() => setHoveredSkill(skill.name)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      className="relative"
                    >
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer border border-gray-200 dark:border-gray-700">
                        <div className="flex flex-col gap-2">
                          <span className="text-sm font-semibold text-gray-900 dark:text-white">
                            {skill.name}
                          </span>
                          
                          {/* Barra de nivel */}
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: skillIndex * 0.05 + categoryIndex * 0.1 }}
                              className={`h-full ${colors.text.replace('text-', 'bg-')} rounded-full`}
                            />
                          </div>
                          
                          {/* Nivel en texto */}
                          {hoveredSkill === skill.name && (
                            <motion.span
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className={`text-xs font-medium ${colors.text}`}
                            >
                              {getLevelLabel(skill.level)} • {skill.level}%
                            </motion.span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
