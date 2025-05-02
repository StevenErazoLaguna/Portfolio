import React from 'react';

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  isLeft: boolean;
}

function TimelineItem({ title, company, period, description, technologies, isLeft }: TimelineItemProps) {
  return (
    <div className={`relative z-10 mb-12 md:mb-16 flex items-start ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* Timeline Dot */}
      <div className="absolute left-6 md:left-1/2 -translate-y-1 md:-translate-x-3 w-6 h-6 rounded-full bg-blue-600 border-4 border-white dark:border-gray-800"></div>
      
      {/* Content */}
      <div className={`ml-12 md:ml-0 ${isLeft ? 'md:mr-10 md:pr-16' : 'md:ml-10 md:pl-16'} w-full md:w-1/2`}>
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
          <h4 className="mt-1 text-lg font-medium text-blue-600 dark:text-blue-400">{company}</h4>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{period}</p>
          
          <p className="mt-3 text-gray-700 dark:text-gray-300">{description}</p>
          
          <div className="mt-4 flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimelineItem;