import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Conoce un poco mas de mi</h3>
            <p className="text-gray-400">
              Soy un desarrollador apasionado por la tecnología y la innovación. Me encanta aprender nuevas habilidades y enfrentar desafíos. Siempre estoy buscando oportunidades para crecer y mejorar mis habilidades.

            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="https://github.com/StevenErazoLaguna"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/steven-e-960307119/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:erazoestiven1@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/593962567643" // Reemplaza 1234567890 con tu número de teléfono en formato internacional
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.105 1.515 5.84L0 24l6.293-1.515A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22.05c-1.95 0-3.79-.51-5.4-1.41l-.39-.21-3.72.9.99-3.63-.21-.39A10.05 10.05 0 011.95 12c0-5.58 4.5-10.05 10.05-10.05 5.58 0 10.05 4.5 10.05 10.05 0 5.58-4.5 10.05-10.05 10.05zm5.4-7.5c-.3-.15-1.77-.87-2.04-.96-.27-.09-.48-.15-.69.15-.21.3-.78.96-.96 1.14-.18.18-.36.21-.66.06-.3-.15-1.26-.45-2.4-1.41-.87-.78-1.44-1.74-1.62-2.04-.18-.3-.02-.45.14-.6.15-.15.3-.36.45-.54.15-.18.18-.3.27-.48.09-.18.06-.36-.03-.51-.09-.15-.69-1.65-.96-2.37-.24-.57-.48-.48-.69-.48h-.57c-.18 0-.45.06-.69.3-.24.24-.9.87-.9 2.1 0 1.23.93 2.43 1.05 2.61.12.18 1.83 2.79 4.44 3.9.63.27 1.12.42 1.5.54.63.21 1.2.18 1.65.12.51-.06 1.77-.72 2.01-1.41.24-.69.24-1.29.18-1.41-.06-.12-.24-.18-.51-.3z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Sobre mi</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-white transition-colors">Experiencia</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Proyectos</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors">Habilidades</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contactame</h3>
            <p className="text-gray-400 mb-2">Email: erazoestiven1@gmail.com</p>
            <p className="text-gray-400 mb-2">Location: Quito, Ecuador</p>
            <a
              href="mailto:erazoestiven1@gmail.com"
              className="inline-block mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              Enviar un mensaje
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500">
            © {currentYear} Steven Gabriel Erazo Laguna. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;