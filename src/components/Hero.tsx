import React from 'react';
import { Github as GitHub, Linkedin, Mail, ArrowDown, MapPin, Sparkles } from 'lucide-react';
import { motion } from '../utils/motion';
import image from '../Images/profile.jpg';

function Hero() {
  return (
    <section id="about" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 lg:order-1">
            {/* Greeting Badge */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                Disponible para nuevos proyectos
              </span>
            </motion.div>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } }
              }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
            >
              Hola, soy{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Steven
              </span>
            </motion.h1>

            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
              }}
              className="mt-4 text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300"
            >
              Full Stack Developer • Ciberseguridad • Analista de TI
            </motion.h2>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } }
              }}
              className="mt-4 flex items-center gap-2 text-gray-600 dark:text-gray-400"
            >
              <MapPin className="w-5 h-5" />
              <span>Quito, Ecuador</span>
            </motion.div>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } }
              }}
              className="mt-6 text-gray-700 dark:text-gray-400 text-lg leading-relaxed"
            >
              Estudiante de Ingeniería en Computación con experiencia en desarrollo full-stack de 
              aplicaciones financieras y análisis de incidentes en sistemas bancarios críticos. 
              Especializado en Spring Boot, React/TypeScript, Kubernetes y herramientas enterprise 
              (Dynatrace, OpenLens, Fortinet). Experiencia en seguridad de infraestructura 
              (VPNs/VLANs, hardening) y operación de ambientes productivos en entornos financieros regulados.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 } }
              }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Contáctame
              </a>
              <a
                href="#projects"
                className="px-8 py-3 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-500 text-gray-900 dark:text-white font-medium rounded-lg transition-all hover:scale-105"
              >
                Ver proyectos
              </a>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.6 } }
              }}
              className="mt-8 flex items-center gap-4"
            >
              {[
                { icon: <GitHub className="w-6 h-6" />, url: 'https://github.com/StevenErazoLaguna', label: 'GitHub' },
                { icon: <Linkedin className="w-6 h-6" />, url: 'https://www.linkedin.com/in/steven-e-960307119/', label: 'LinkedIn' },
                { icon: <Mail className="w-6 h-6" />, url: 'mailto:erazoestiven1@gmail.com', label: 'Email' }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target={social.url.startsWith('http') ? '_blank' : undefined}
                  rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.3 } }
            }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full blur-2xl opacity-20"></div>
              
              {/* Profile image */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                <img
                  src={image}
                  alt="Steven Erazo Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute bottom-4 right-4 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Disponible</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="mt-16 flex justify-center">
          <a
            href="#experience"
            className="group flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white hover:scale-110 transition-all shadow-lg hover:shadow-xl animate-bounce"
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
