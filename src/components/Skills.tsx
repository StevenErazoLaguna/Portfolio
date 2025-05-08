import React from 'react';
import { Code } from 'lucide-react';
import { skillsData } from '../data/skillsData';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Skills & Technologies"
          subtitle="What I work with"
          icon={<Code className="w-6 h-6" />}
        />

        <div className="mt-16">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="mb-8 last:mb-0"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {category.category}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 + categoryIndex * 0.1 }}
                    whileHover={{ y: -2 }}
                    className="bg-white dark:bg-gray-900 rounded-lg p-3 flex items-center gap-2 shadow-sm"
                  >
                    <div className="flex-shrink-0 w-2 h-2 rounded-full" style={{
                      backgroundColor: `hsl(${skill.level}, 70%, 50%)`
                    }} />
                    <span className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;