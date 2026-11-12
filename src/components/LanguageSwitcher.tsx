import { Globe2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language.startsWith('en') ? 'en' : 'es';

  const changeLanguage = (language: 'es' | 'en') => {
    void i18n.changeLanguage(language);
  };

  return (
    <div
      className="inline-flex items-center gap-1 rounded-2xl border border-gray-200/80 bg-white/80 p-1 shadow-sm backdrop-blur-xl dark:border-gray-700/80 dark:bg-gray-800/80"
      role="group"
      aria-label={t('language.label', { defaultValue: 'Language' })}
    >
      <Globe2 className="ml-2 h-4 w-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
      {(['es', 'en'] as const).map((language) => {
        const isActive = currentLanguage === language;
        const label = language === 'es' ? 'ES' : 'EN';
        const languageName = language === 'es' ? t('language.spanish') : t('language.english');

        return (
          <button
            key={language}
            type="button"
            onClick={() => changeLanguage(language)}
            aria-pressed={isActive}
            aria-label={`${t('language.switchTo', { defaultValue: 'Switch to' })} ${languageName}`}
            className={`rounded-xl px-2.5 py-1.5 text-xs font-bold tracking-wide transition-all duration-200 ${
              isActive
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

export default LanguageSwitcher;
