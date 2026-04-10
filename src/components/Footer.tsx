import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, Send, Code2, Heart } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/StevenErazoLaguna',
      icon: <Github className="w-5 h-5" />,
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/steven-e-960307119/',
      icon: <Linkedin className="w-5 h-5" />,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      url: 'mailto:erazoestiven1@gmail.com',
      icon: <Mail className="w-5 h-5" />,
      color: 'hover:text-red-400'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/593962567643',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.105 1.515 5.84L0 24l6.293-1.515A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22.05c-1.95 0-3.79-.51-5.4-1.41l-.39-.21-3.72.9.99-3.63-.21-.39A10.05 10.05 0 011.95 12c0-5.58 4.5-10.05 10.05-10.05 5.58 0 10.05 4.5 10.05 10.05 0 5.58-4.5 10.05-10.05 10.05zm5.4-7.5c-.3-.15-1.77-.87-2.04-.96-.27-.09-.48-.15-.69.15-.21.3-.78.96-.96 1.14-.18.18-.36.21-.66.06-.3-.15-1.26-.45-2.4-1.41-.87-.78-1.44-1.74-1.62-2.04-.18-.3-.02-.45.14-.6.15-.15.3-.36.45-.54.15-.18.18-.3.27-.48.09-.18.06-.36-.03-.51-.09-.15-.69-1.65-.96-2.37-.24-.57-.48-.48-.69-.48h-.57c-.18 0-.45.06-.69.3-.24.24-.9.87-.9 2.1 0 1.23.93 2.43 1.05 2.61.12.18 1.83 2.79 4.44 3.9.63.27 1.12.42 1.5.54.63.21 1.2.18 1.65.12.51-.06 1.77-.72 2.01-1.41.24-.69.24-1.29.18-1.41-.06-.12-.24-.18-.51-.3z" />
        </svg>
      ),
      color: 'hover:text-green-400'
    }
  ];

  const quickLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Contacto', href: '#contact' }
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      text: 'erazoestiven1@gmail.com',
      href: 'mailto:erazoestiven1@gmail.com'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      text: '+593 96 256 7643',
      href: 'tel:+593962567643'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      text: 'Quito, Ecuador',
      href: null
    }
  ];

  return (
    <footer id="contact" className="relative bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-8 h-8 text-blue-500" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Steven Erazo
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Full Stack Developer especializado en arquitecturas de microservicios, 
              desarrollo web moderno y soluciones en la nube. Apasionado por crear 
              experiencias digitales innovadoras y escalables.
            </p>
            
            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.url.startsWith('http') ? '_blank' : undefined}
                  rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`group relative p-3 bg-gray-800 rounded-lg transition-all duration-300 ${social.color} hover:scale-110 hover:bg-gray-700`}
                  aria-label={social.name}
                >
                  {social.icon}
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Enlaces rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contacto</h4>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors duration-200 group"
                    >
                      <span className="mt-0.5 text-blue-500 group-hover:text-blue-400 transition-colors">
                        {info.icon}
                      </span>
                      <span className="text-sm">{info.text}</span>
                    </a>
                  ) : (
                    <div className="flex items-start gap-3 text-gray-400">
                      <span className="mt-0.5 text-blue-500">{info.icon}</span>
                      <span className="text-sm">{info.text}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <a
              href="mailto:erazoestiven1@gmail.com"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Send className="w-4 h-4" />
              Enviar mensaje
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} Steven Gabriel Erazo Laguna. Todos los derechos reservados.
            </p>
            
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span>Hecho con</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>usando</span>
              <span className="text-blue-400 font-medium">React + TypeScript</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -z-10"></div>
    </footer>
  );
}

export default Footer;
