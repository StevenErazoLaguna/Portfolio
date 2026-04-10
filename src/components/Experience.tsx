import React from 'react';
import TimelineItem from './TimelineItem';
import { Briefcase, TrendingUp } from 'lucide-react';
import { experienceData } from '../data/experienceData';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

function Experience() {
  const currentJobs = experienceData.filter(exp => exp.current).length;
  const totalYears = new Date().getFullYear() - 2024; // Desde tu primera experiencia

  return (
    <section id="experience" className="relative py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Experiencia Profesional"
          subtitle="Mi trayectoria en el desarrollo de software"
          icon={<Briefcase className="w-6 h-6" />}
        />

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 mb-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{experienceData.length}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Posiciones</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{currentJobs}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Trabajos Actuales</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <Briefcase className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{totalYears}+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Años de Experiencia</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="mt-16 relative">
          {/* Timeline Line with Gradient */}
          <div className="absolute top-0 left-6 md:left-1/2 md:-ml-px h-full w-1 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 dark:from-blue-600 dark:via-purple-600 dark:to-pink-600 opacity-30"></div>

          <div className="relative">
            {experienceData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
              >
                <TimelineItem
                  title={item.title}
                  company={item.company}
                  period={item.period}
                  description={item.description}
                  technologies={item.technologies}
                  isLeft={index % 2 === 0}
                  current={item.current}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* End Timeline Marker */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative flex justify-center mt-8"
        >
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -inset-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
          </div>
        </motion.div>

        <p className="text-center mt-6 text-gray-600 dark:text-gray-400 font-medium">
          Creciendo constantemente
        </p>
      </div>
    </section>
  );
}

export default Experience;
