import React, { useState } from 'react';
import { ExternalLink, Github, X, Code2, Sparkles } from 'lucide-react';
import { Project } from '../types';
import { motion } from '../utils/motion';

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
      <div 
        className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-700 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:scale-[1.02]"
        onClick={() => setShowModal(true)}
      >
        {/* Image Container */}
        <div className="relative h-56 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
          
          {/* Hover Actions */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex gap-3">
              {project.liveUrl && (
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/90 dark:bg-gray-900/90 rounded-full text-blue-600 hover:bg-white hover:scale-110 transition-all shadow-lg"
                  onClick={(e) => e.stopPropagation()}
                  aria-label="Live Demo"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
              {project.githubUrl && (
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/90 dark:bg-gray-900/90 rounded-full text-gray-900 dark:text-white hover:bg-white hover:scale-110 transition-all shadow-lg"
                  onClick={(e) => e.stopPropagation()}
                  aria-label="GitHub Repository"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full shadow-lg">
              {project.categories[0]?.toUpperCase()}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm line-clamp-2 leading-relaxed">
            {project.shortDescription}
          </p>
          
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Decorative corner */}
        <div className="absolute top-0 left-0 w-20 h-20 bg-blue-500/5 rounded-br-full blur-xl"></div>
      </div>
      
      {/* Project Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:p-0">
            <div 
              className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
              aria-hidden="true"
              onClick={() => setShowModal(false)}
            ></div>
            
            <motion.div 
              className="relative inline-block align-middle bg-white dark:bg-gray-900 rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:max-w-3xl sm:w-full border border-gray-200 dark:border-gray-800"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                type="button"
                className="absolute top-4 right-4 z-10 p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-full text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 transition-all hover:scale-110 shadow-lg"
                onClick={() => setShowModal(false)}
              >
                <X className="h-5 w-5" />
              </button>
              
              {/* Modal Image */}
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              {/* Modal Content */}
              <div className="p-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white" id="modal-title">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                      {project.shortDescription}
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="mt-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Tecnologías utilizadas</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Ver proyecto en vivo
                    </a>
                  )}
                  
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-500 text-gray-900 dark:text-white font-semibold rounded-lg transition-all hover:scale-105"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      Ver código
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCard;
