import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector) // Detecta automáticamente el idioma del navegador
  .use(initReactI18next) // Integra con React
  .init({
    resources: {
      en: {
        translation: {
          "skillsTitle": "Skills & Technologies",
          "skillsSubtitle": "What I work with",
          "categoryTitle": "{{category}}",
        },
      },
      es: {
        translation: {
          "skillsTitle": "Habilidades y Tecnologías",
          "skillsSubtitle": "Con lo que trabajo",
          "categoryTitle": "{{category}}",
        },
      },
    },
    fallbackLng: 'en', // Idioma por defecto
    interpolation: {
      escapeValue: false, // React ya maneja el escape de valores
    },
  });

export default i18n;