import { Briefcase, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { experienceData, Language } from '../data/experienceData';
import TimelineItem from './TimelineItem';
import SectionTitle from './SectionTitle';

function Experience() {
  const { i18n, t } = useTranslation();
  const language: Language = i18n.language.startsWith('en') ? 'en' : 'es';
  const currentJobs = experienceData.filter((experience) => experience.current).length;
  const totalYears = new Date().getFullYear() - 2024;

  return (
    <section id="experience" className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20 dark:from-gray-900 dark:to-gray-800">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t('experience.title')}
          subtitle={t('experience.subtitle')}
          icon={<Briefcase className="h-6 w-6" />}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 mb-16 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-blue-100 p-3 dark:bg-blue-900/30">
                <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{experienceData.length}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t('experience.positions')}</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-green-100 p-3 dark:bg-green-900/30">
                <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{currentJobs}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t('experience.currentJobs')}</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-purple-100 p-3 dark:bg-purple-900/30">
                <Briefcase className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{totalYears}+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t('experience.yearsExperience')}</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="relative mt-16">
          <div className="absolute left-6 top-0 h-full w-1 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 opacity-30 dark:from-blue-600 dark:via-purple-600 dark:to-pink-600 md:left-1/2 md:-ml-px" />

          <div className="relative">
            {experienceData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
              >
                <TimelineItem
                  title={item.title[language]}
                  company={item.company[language]}
                  period={item.period[language]}
                  highlights={item.highlights[language]}
                  technologies={item.technologies}
                  isLeft={index % 2 === 0}
                  current={item.current}
                />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative mt-8 flex justify-center"
        >
          <div className="relative">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div className="absolute -inset-2 animate-pulse rounded-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-30 blur-lg" />
          </div>
        </motion.div>

        <p className="mt-6 text-center font-medium text-gray-600 dark:text-gray-400">{t('experience.growing')}</p>
      </div>
    </section>
  );
}

export default Experience;
