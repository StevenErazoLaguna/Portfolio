import React, { ReactNode } from 'react';
import { motion } from '../utils/motion';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  icon?: ReactNode;
}

function SectionTitle({ title, subtitle, icon }: SectionTitleProps) {
  return (
    <motion.div 
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {icon && (
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="p-4 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl shadow-lg">
              {icon}
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-30"></div>
          </div>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
        {title}
      </h2>
      <div className="mt-4 flex justify-center">
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
      </div>
      <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    </motion.div>
  );
}

export default SectionTitle;
