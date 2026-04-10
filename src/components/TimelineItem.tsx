import React, { useState } from 'react';
import { MapPin, Calendar, Building2, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  isLeft: boolean;
  current?: boolean;
}

function TimelineItem({ title, company, period, description, technologies, isLeft, current }: TimelineItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = description.length > 300;
  const displayDescription = shouldTruncate && !isExpanded 
    ? description.substring(0, 300) + '...' 
    : description;

  return (
    <div className={`relative z-10 mb-16 flex items-start ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* Timeline Dot with Glow Effect */}
      <div className="absolute left-6 md:left-1/2 -translate-y-1 md:-translate-x-3 flex items-center justify-center">
        <div className={`w-6 h-6 rounded-full ${current ? 'bg-green-500' : 'bg-blue-600'} border-4 border-white dark:border-gray-800 relative z-10`}>
          {current && (
            <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
          )}
        </div>
        {/* Glow ring */}
        <div className={`absolute w-10 h-10 rounded-full ${current ? 'bg-green-500/20' : 'bg-blue-600/20'} blur-sm`}></div>
      </div>
      
      {/* Content Card */}
      <div className={`ml-12 md:ml-0 ${isLeft ? 'md:mr-10 md:pr-16' : 'md:ml-10 md:pl-16'} w-full md:w-1/2`}>
        <div className="group relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-500/50 dark:hover:border-blue-500/50">
          
          {/* Card Header with Gradient */}
          <div className={`relative p-6 pb-4 ${current ? 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20' : 'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20'}`}>
            {/* Status Badge */}
            {current && (
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full shadow-lg">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  Actual
                </span>
              </div>
            )}
            
            {/* Job Title */}
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 pr-20">
              {title}
            </h3>
            
            {/* Company */}
            <div className="flex items-center gap-2 mb-3">
              <Building2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                {company}
              </h4>
            </div>
            
            {/* Period and Location */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>{period}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                <span>Quito, Ecuador</span>
              </div>
            </div>
          </div>
          
          {/* Card Body */}
          <div className="p-6 pt-4">
            {/* Description */}
            <div className="mb-5">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                {displayDescription}
              </p>
              
              {/* Expand/Collapse Button */}
              {shouldTruncate && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="mt-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium flex items-center gap-1 transition-colors"
                >
                  {isExpanded ? (
                    <>
                      Ver menos <ChevronUp className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Ver más <ChevronDown className="w-4 h-4" />
                    </>
                  )}
                </button>
              )}
            </div>
            
            {/* Technologies */}
            <div>
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">
                Tecnologías
              </p>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className={`group/tech relative px-3 py-1.5 ${current ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'} text-xs font-medium rounded-full hover:scale-105 transition-all cursor-default shadow-sm`}
                  >
                    {tech}
                    {/* Tooltip effect on hover */}
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/tech:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      {tech}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Decorative Corner */}
          <div className={`absolute top-0 right-0 w-32 h-32 ${current ? 'bg-green-500/5' : 'bg-blue-500/5'} rounded-bl-full blur-2xl`}></div>
        </div>
      </div>
    </div>
  );
}

export default TimelineItem;
