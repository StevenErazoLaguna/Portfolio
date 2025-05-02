import React from 'react';
import { Github as GitHub, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { motion } from '../utils/motion';
import image from '../Images/profile.jpg';

function Hero() {
  return (
    <section id="about" className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 lg:order-1">
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
            >
              Hola, soy<span className="text-blue-600 dark:text-blue-400"> Steven Erazo</span>
            </motion.h1>

            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
              }}
              className="mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-300"
            >
              Analista de TI || Cibsersegridad || Desarrollador FullStack
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } }
              }}
              className="mt-6 text-gray-700 dark:text-gray-400 text-lg leading-relaxed max-w-2xl"
            >
              Estudiante de octavo semestre de Ingeniería en Ciencias de la Computación con experiencia como desarrollador Full Stack y
              enfoque creciente en ciberseguridad. He trabajado en automatización de flujos con Python, desarrollo web con React, Node.js
              y PHP, y gestión de bases de datos relacionales (MySQL, PostgreSQL) y no relacionales (MongoDB). Cuento con experiencia en
              administración de servidores Linux, configuración de firewalls, implementación de políticas de seguridad y resolución de
              incidencias técnicas. Apasionado por el diseño de soluciones escalables, seguras y eficientes, que mejoren la productividad
              y la resiliencia tecnológica en entornos empresariales.

            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.6 } }
              }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                Habla conmigo
              </a>
              <a
                href="#projects"
                className="px-6 py-3 bg-transparent border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-lg transition-colors"
              >
                Mira mis proyectos
              </a>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.8 } }
              }}
              className="mt-8 flex items-center space-x-5"
            >
              <a
                href="https://github.com/StevenErazoLaguna"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <GitHub className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/steven-e-960307119/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:erazoestiven1@gmail.com"
                className="text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.3 } }
            }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400 shadow-xl">
              <img
                src={image}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>

        <div className="mt-16 flex justify-center">
          <a
            href="#experience"
            className="animate-bounce flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;