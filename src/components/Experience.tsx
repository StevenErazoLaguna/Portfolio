import React from 'react';
import TimelineItem from './TimelineItem';
import { Briefcase } from 'lucide-react';
import { experienceData } from '../data/experienceData';
import { motion } from '../utils/motion';
import SectionTitle from './SectionTitle';

function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Work Experience" 
          subtitle="My professional journey" 
          icon={<Briefcase className="w-6 h-6" />}
        />
        
        <div className="mt-16 relative">
          {/* Timeline Line */}
          <div className="absolute top-0 left-6 md:left-1/2 md:-ml-px h-full w-0.5 bg-blue-400 dark:bg-blue-600"></div>
          
          <div className="relative">
            {experienceData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <TimelineItem 
                  title={item.title}
                  company={item.company}
                  period={item.period}
                  description={item.description}
                  technologies={item.technologies}
                  isLeft={index % 2 === 0}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;