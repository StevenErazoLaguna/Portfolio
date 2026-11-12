import { useState } from 'react';
import { MapPin, Calendar, Building2, ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  highlights: string[];
  technologies: string[];
  isLeft: boolean;
  current?: boolean;
}

function TimelineItem({ title, company, period, highlights, technologies, isLeft, current }: TimelineItemProps) {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = highlights.length > 2;
  const visibleHighlights = shouldTruncate && !isExpanded ? highlights.slice(0, 2) : highlights;

  return (
    <div className={`relative z-10 mb-16 flex items-start ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      <div className="absolute left-6 md:left-1/2 -translate-y-1 md:-translate-x-3 flex items-center justify-center">
        <div className={`w-6 h-6 rounded-full ${current ? 'bg-green-500' : 'bg-blue-600'} border-4 border-white dark:border-gray-800 relative z-10`}>
          {current && <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />}
        </div>
        <div className={`absolute w-10 h-10 rounded-full ${current ? 'bg-green-500/20' : 'bg-blue-600/20'} blur-sm`} />
      </div>

      <div className={`ml-12 md:ml-0 ${isLeft ? 'md:mr-10 md:pr-16' : 'md:ml-10 md:pl-16'} w-full md:w-1/2`}>
        <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-900 dark:hover:border-blue-500/50">
          <div className={`relative p-6 pb-4 ${current ? 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20' : 'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20'}`}>
            {current && (
              <div className="absolute right-4 top-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
                  {t('experience.current')}
                </span>
              </div>
            )}

            <h3 className="mb-2 pr-20 text-xl font-bold text-gray-900 dark:text-white">{title}</h3>

            <div className="mb-3 flex items-center gap-2">
              <Building2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400">{company}</h4>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span>{period}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                <span>{t('experience.location')}</span>
              </div>
            </div>
          </div>

          <div className="p-6 pt-4">
            <div className="mb-5">
              <ul className="space-y-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                {visibleHighlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {shouldTruncate && (
                <button
                  type="button"
                  onClick={() => setIsExpanded(!isExpanded)}
                  aria-expanded={isExpanded}
                  className="mt-4 flex items-center gap-1 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  {isExpanded ? t('experience.showLess') : t('experience.showMore')}
                  {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
              )}
            </div>

            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                {t('experience.technologies')}
              </p>
              <div className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className={`rounded-full px-3 py-1.5 text-xs font-medium shadow-sm transition-all hover:scale-105 ${current ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'}`}
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className={`absolute right-0 top-0 h-32 w-32 rounded-bl-full blur-2xl ${current ? 'bg-green-500/5' : 'bg-blue-500/5'}`} />
        </div>
      </div>
    </div>
  );
}

export default TimelineItem;
