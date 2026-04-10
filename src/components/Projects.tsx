import React, { useState } from 'react';
import { FolderKanban, Filter } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import ProjectCard from './ProjectCard';
import { motion } from '../utils/motion';
import SectionTitle from './SectionTitle';

function Projects() {
  const [filter, setFilter] = useState<string>('all');

  // Get unique categories
  const categories = ['all', ...new Set(projectsData.flatMap(project => project.categories))];

  // Filter projects based on selected category
  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(project => project.categories.includes(filter));

  return (
    <section id="projects" className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Proyectos Destacados"
          subtitle="Soluciones innovadoras y aplicaciones que he desarrollado"
          icon={<FolderKanban className="w-6 h-6" />}
        />

        {/* Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Filter className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Filtrar por:</span>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  filter === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-105'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No hay proyectos en esta categoría
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Projects;
