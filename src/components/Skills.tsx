import React from 'react';
import { Code } from 'lucide-react';
import { skillsData } from '../data/skillsData';
import { motion } from '../utils/motion';
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
              className="mb-12 last:mb-0"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {category.category}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 + categoryIndex * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4 flex flex-col items-center text-center"
                  >
                    <div className="text-blue-600 dark:text-blue-400 mb-3">
                      {skill.icon ? skill.icon : 
                        <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                          <span className="text-lg font-bold">{skill.name.charAt(0)}</span>
                        </div>
                      }
                    </div>
                    <h4 className="text-gray-900 dark:text-white font-medium">{skill.name}</h4>
                    
                    <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                      <div 
                        className="bg-blue-600 dark:bg-blue-500 h-1.5 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
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