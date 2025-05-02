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
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
            {icon}
          </div>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
        {title}
      </h2>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
        {subtitle}
      </p>
    </motion.div>
  );
}

export default SectionTitle;