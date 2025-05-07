import React, { useState } from 'react';
import { FolderKanban } from 'lucide-react';
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
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Proyectos"
          subtitle="Mis proyectos destacados"
          icon={<FolderKanban className="w-6 h-6" />}
        />

        {/* Filter Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
                }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
}

export default Projects;